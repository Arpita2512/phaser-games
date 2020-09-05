const gameState = {
    score: 0,
    penalties: 0
};

class GameScene extends Phaser.Scene{
    constructor(){
        super({key: 'GameScene'});
    }

    preload(){
        this.load.image('virus1', 'assets/virus1.png');
        this.load.image('virus2', 'assets/virus2.png');
        this.load.image('sanitiser', 'assets/sanitiser.png');
        this.load.image('mask', 'assets/mask.png');
        this.load.image('sickBoy', 'assets/sickBoy.png');
        this.load.image('sickGirl', 'assets/sickGirl.png');
        this.load.image('player', 'assets/player.png');
        this.load.image('platform', 'assets/platform.png');
        this.load.audio('good', 'assets/good.wav');
        this.load.audio('bad', 'assets/bad.ogg');
    }
    create(){
        const ground = this.physics.add.staticGroup();
        ground.create(10, 585, 'platform').setScale(1, 0.5).refreshBody();
        
        gameState.player = this.physics.add.sprite(280, 520, 'player').setScale(0.4);
        gameState.player.setCollideWorldBounds(true);
        this.physics.add.collider(gameState.player, ground);
        
        gameState.scoreText = this.add.text(110, 570, 'Score: 0', {
            fontFamily: 'Comic Sans MS',
            fontStyle: 'bold',
            fontSize: '20px'
        });
        gameState.penaltyText = this.add.text(360, 570, 'Infection: 0%', {
            fontFamily: 'Comic Sans MS',
            fontStyle: 'bold',
            fontSize: '20px',
        });
                
        const goodItems = this.physics.add.group();
        const goodItemsList = ['mask', 'sanitiser'];
        const goodItemGen = () => {
            const xCoord = (Math.random() * 510) + 20;
            let randomItem = goodItemsList[Math.floor(Math.random() * 2)];
            goodItems.create(xCoord, 10, randomItem).setScale(.9);
        }
        const goodItemGenLoop = this.time.addEvent({
            delay: 5000,
            callback: goodItemGen,
            loop: true,
        });

        
        const badItems = this.physics.add.group();
        const badItemsList = ['virus1', 'virus2', 'sickBoy', 'sickGirl'];
        const badItemGen = () => {
            const xCoord = (Math.random() * 510) + 20;
            let randomItem = badItemsList[Math.floor(Math.random() * 3)];
            badItems.create(xCoord, 10, randomItem).setScale(.9);
        }
        const badItemGenLoop = this.time.addEvent({
            delay: 300,
            callback: badItemGen,
            loop: true,
        });
        
        this.physics.add.collider(badItems, ground, function(item){
            item.destroy();
            gameState.score += 10;
            gameState.scoreText.setText(`Score: ${gameState.score}`);
        });

        const badSound = this.sound.add('bad');
        this.physics.add.collider(gameState.player, badItems, function(player, item){
            item.destroy();
            badSound.play();
            gameState.score -= 5;
            gameState.penalties += 1;
            gameState.scoreText.setText(`Score: ${gameState.score}`);
            gameState.penaltyText.setText(`Infection: ${gameState.penalties*25}%`);
        });
        this.physics.add.collider(goodItems, ground, function(item){
            item.destroy();
        });

        const goodSound = this.sound.add('good');
        this.physics.add.collider(gameState.player, goodItems, function(player, item){
            item.destroy();
            goodSound.play();
            gameState.score += 50;
            gameState.scoreText.setText(`Score: ${gameState.score}`);
        });
        
        
    }

    update(){
        const cursors = this.input.keyboard.createCursorKeys();
        if(cursors.left.isDown)
            gameState.player.x -= 5;
        if(cursors.right.isDown)
            gameState.player.x += 5;

        
        if(gameState.penalties === 4)
        {
            this.physics.pause();
            let temp = gameState.score;
            gameState.score = 0;
            gameState.penalties = 0;
            this.scene.stop('GameScene');
            this.scene.start('EndScene', {score: temp});
        }
        
        
    }
}