const gameState = {
    score: 0,
    hmanState: 0
};

class GameScene extends Phaser.Scene{
    constructor(){
        super({key: 'GameScene'});
    }

    preload(){
        this.load.image('bg_img', 'assets/bg.jpg');
        this.load.text('movies', 'assets/movies.txt');
        this.load.image('h1', 'assets/hman/h1.jpg');
        this.load.image('h2', 'assets/hman/h2.jpg');
        this.load.image('h3', 'assets/hman/h3.jpg');
        this.load.image('h4', 'assets/hman/h4.jpg');
        this.load.image('h5', 'assets/hman/h5.jpg');
        this.load.image('h6', 'assets/hman/h6.jpg');
        this.load.image('h7', 'assets/hman/h7.jpg');
        this.load.image('h8', 'assets/hman/h8.jpg');
        //this.load.spritesheet('character', 'assets/character_spritesheet.png', {frameWidth: 80, frameHeight: 110});
        this.load.audio('correct', 'assets/528862__eponn__beep-4.wav');
        this.load.audio('error', 'assets/483598__raclure__wrong.mp3');
        this.load.audio('win', 'assets/51746__erkanozan__clap.wav');
        this.load.audio('lose', 'assets/364929__josepharaoh99__game-die.mp3');
    }

    create(){
        gameState.hmanState = 0;
        this.bg = this.add.image(0, 0, 'bg_img').setScale(0.49, 0.63).setOrigin(0, 0);

        let cache = this.cache.text;
        let movieList = cache.get('movies');
        gameState.guessList = movieList.split('\n');

        gameState.movieName = this.getMovieName();
        let movieLetters = gameState.movieName.split('');
        movieLetters.pop();
        let vowels = ['a', 'e', 'i', 'o', 'u'];
        let guessName = [];
        gameState.lettersToMatch = [];
        for(let char of movieLetters){
            if(vowels.includes(char.toLowerCase()))
                guessName.push(char);
            else if(char === " ")
                guessName.push("  ");
            else{
                guessName.push('_');
                gameState.lettersToMatch.push(char.toLowerCase());
            }
        }
        
        gameState.guessText = this.add.text(80, 120, guessName.join(' '), {
            fontFamily: 'font1',
            fontSize: '60px'
        });
        
        gameState.keyPressedText = this.add.text(100, 320, "Key Pressed :", {
            fontFamily: 'font1',
            fontSize: '50px'
        });

        let hmanImages = [
            'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'h7', 'h8'
        ];

        this.add.image(600, 350, hmanImages[gameState.hmanState]).setScale(0.8, 0.6);

        var correctSound = this.sound.add('correct');
        var errorSound = this.sound.add('error');

        gameState.winSound = this.sound.add('win');
        gameState.loseSound = this.sound.add('lose');
        
        this.input.keyboard.on('keydown', function(input) {
            gameState.keyPressedText.setText(`Key Pressed : ${input.key}`);
            let matched = false;
            for(let key of gameState.lettersToMatch){
                if(key.toLowerCase() === input.key){
                    matched = true;
                    correctSound.play();
                    gameState.lettersToMatch = gameState.lettersToMatch.filter(
                        element => ![input.key].includes(element)
                    );
                    //console.log(gameState.lettersToMatch);
                    for(let i=0; i < movieLetters.length; i++){
                        if(movieLetters[i].toLowerCase() === input.key)
                            guessName[i] = input.key;
                    }
                    gameState.guessText.setText(guessName.join(' '));
                }
            }

            if(!matched)
            {
                errorSound.play();
                console.log('yes');
                gameState.hmanState += 1;
                this.add.image(600, 350, hmanImages[gameState.hmanState]).setScale(0.8, 0.6);
            }
        }, this);

        //console.log(movieLetters);
        //console.log(gameState.lettersToMatch);
    }
    getMovieName(){
        let idx = Math.floor(Math.random()*gameState.guessList.length);
        return gameState.guessList[idx];
    }
    update(){
        if(gameState.hmanState >= 7){
            gameState.loseSound.play();
            this.time.addEvent({
                delay: 500, 
                callback: () => {
                    let temp = gameState.movieName;
                    this.scene.stop('GameScene');
                    this.scene.start('LoseScene', {name: temp});
                }, 
                callbackScope: this,
                loop: false
            });
        }
        if(gameState.lettersToMatch.length === 0){
            gameState.winSound.play();
            this.time.addEvent({
                delay: 500, 
                callback: () => {
                    this.scene.stop('GameScene');
                    this.scene.start('WinScene');
                }, 
                callbackScope: this,
                loop: false
            });
        }
    }
}