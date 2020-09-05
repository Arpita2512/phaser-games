const gameState = {
    score: 0
};

class GameScene extends Phaser.Scene{
    constructor(){
        super({key: 'GameScene'});

        this.locations = [
            {
                key: '0',
                x: 180,
                y: 180
            },
            {
                key: '1',
                x: 180,
                y: 330
            },
            {
                key: '2',
                x: 180,
                y: 480
            },
            {
                key: '3',
                x: 330,
                y: 180
            },
            {
                key: '4',
                x: 330,
                y: 330
            },
            {
                key: '5',
                x: 330,
                y: 480
            },
            {
                key: '6',
                x: 480,
                y: 180
            },
            {
                key: '7',
                x: 480,
                y: 330
            },
            {
                key: '8',
                x: 480,
                y: 480
            },
            {
                key: '9',
                x: 630,
                y: 180
            },
            {
                key: '10',
                x: 630,
                y: 330
            },
            {
                key: '11',
                x: 630,
                y: 480
            }
        ];
    }

    preload(){
        this.load.spritesheet('character', 'assets/character_spritesheet.png', {frameWidth: 80, frameHeight: 110});
        this.load.audio('switch', 'assets/switch27.ogg');
        this.load.audio('error', 'assets/sfx_sounds_negative1.wav');
    }

    create(){

        gameState.rooms = [];
        for(var room of this.locations){
            var rect = this.add.rectangle(room.x, room.y, 150, 150, 0x221971);
            rect.setStrokeStyle(8, 0xD8DAC9);
            rect.setInteractive();
            gameState.rooms.push(rect);
        }

        gameState.time = 30;
        gameState.timerText = this.add.text(450, 50, `Time: ${gameState.time}`, {
            fontFamily: 'Lucida Console',
            fontStyle: 'bold',
            fontSize: '28px'
        });
        const updateTimer = () => {
            gameState.time -= 1;
            gameState.timerText.setText(`Time: ${gameState.time}`);
        }
        gameState.timer = this.time.addEvent({
            delay: 1000,
            callback: updateTimer,
            loop: true
        });
        
        const lightUpRooms = () => {
            for( var i = 0; i < 3; i++){
                var startRoom = this.getRandomRoom();
                gameState.rooms[startRoom.key].fillColor = 0xEFFE2F;
            }
        }
        const lightUpRoomsLoop = this.time.addEvent({
            delay: 2000,
            callback: lightUpRooms,
            loop: true
        });
     
        gameState.scoreText = this.add.text(200, 50, `Score: ${gameState.score}`, {
            fontFamily: 'Lucida Console',
            fontStyle: 'bold',
            fontSize: '28px'
        });

        var switch_sound = this.sound.add('switch');
        var error_sound = this.sound.add('error');
        var mainCam = this.cameras.main;

        gameState.rooms[0].on('pointerup', () => {
            if(gameState.rooms[0].fillColor == 0xEFFE2F){
                gameState.rooms[0].fillColor = 0x221971;
                gameState.score += 10;
                gameState.scoreText.setText(`Score: ${gameState.score}`);
            }
            if(gameState.currentRoom == 0){
                error_sound.play();
                gameState.score -= 25;
                gameState.scoreText.setText(`Score: ${gameState.score}`);
                mainCam.shake(500, 0.003);
            }
            else{
                switch_sound.play();
            }
        });
        gameState.rooms[1].on('pointerup', () => {
            if(gameState.rooms[1].fillColor == 0xEFFE2F){
                gameState.rooms[1].fillColor = 0x221971;
                gameState.score += 10;
                gameState.scoreText.setText(`Score: ${gameState.score}`);
            }
            if(gameState.currentRoom == 1){
                error_sound.play();
                gameState.score -= 25;
                gameState.scoreText.setText(`Score: ${gameState.score}`);
                mainCam.shake(500, 0.003);
            }
            else{
                switch_sound.play();
            }
        });
        gameState.rooms[2].on('pointerup', () => {
            if(gameState.rooms[2].fillColor == 0xEFFE2F){
                gameState.rooms[2].fillColor = 0x221971;
                gameState.score += 10;
                gameState.scoreText.setText(`Score: ${gameState.score}`);
            }
            if(gameState.currentRoom == 2){
                error_sound.play();
                gameState.score -= 25;
                gameState.scoreText.setText(`Score: ${gameState.score}`);
                mainCam.shake(500, 0.003);
            }
            else{
                switch_sound.play();
            }         
        });
        gameState.rooms[3].on('pointerup', () => {
            if(gameState.rooms[3].fillColor == 0xEFFE2F){
                gameState.rooms[3].fillColor = 0x221971;
                gameState.score += 10;
                gameState.scoreText.setText(`Score: ${gameState.score}`);
            }
            if(gameState.currentRoom == 3){
                error_sound.play();
                gameState.score -= 25;
                gameState.scoreText.setText(`Score: ${gameState.score}`);
                mainCam.shake(500, 0.003);
            }
            else{
                switch_sound.play();
            }
        });
        gameState.rooms[4].on('pointerup', () => {
            if(gameState.rooms[4].fillColor == 0xEFFE2F){
                gameState.rooms[4].fillColor = 0x221971;
                gameState.score += 10;
                gameState.scoreText.setText(`Score: ${gameState.score}`);
            }
            if(gameState.currentRoom == 4){
                error_sound.play();
                gameState.score -= 25;
                gameState.scoreText.setText(`Score: ${gameState.score}`);
                mainCam.shake(500, 0.003);
            }
            else{
                switch_sound.play();
            }
        });
        gameState.rooms[5].on('pointerup', () => {
            if(gameState.rooms[5].fillColor == 0xEFFE2F){
                gameState.rooms[5].fillColor = 0x221971;
                gameState.score += 10;
                gameState.scoreText.setText(`Score: ${gameState.score}`);
            }
            if(gameState.currentRoom == 5){
                error_sound.play();
                gameState.score -= 25;
                gameState.scoreText.setText(`Score: ${gameState.score}`);
                mainCam.shake(500, 0.003);
            }
            else{
                switch_sound.play();
            }
        });
        gameState.rooms[6].on('pointerup', () => {
            if(gameState.rooms[6].fillColor == 0xEFFE2F){
                gameState.rooms[6].fillColor = 0x221971;
                gameState.score += 10;
                gameState.scoreText.setText(`Score: ${gameState.score}`);
            }
            if(gameState.currentRoom == 6){
                error_sound.play();
                gameState.score -= 25;
                gameState.scoreText.setText(`Score: ${gameState.score}`);
                mainCam.shake(500, 0.003);
            }
            else{
                switch_sound.play();
            }
        });
        gameState.rooms[7].on('pointerup', () => {
            if(gameState.rooms[7].fillColor == 0xEFFE2F){
                gameState.rooms[7].fillColor = 0x221971;
                gameState.score += 10;
                gameState.scoreText.setText(`Score: ${gameState.score}`);
            }
            if(gameState.currentRoom == 7){
                error_sound.play();
                gameState.score -= 25;
                gameState.scoreText.setText(`Score: ${gameState.score}`);
                mainCam.shake(500, 0.003);
            }
            else{
                switch_sound.play();
            }
        });
        gameState.rooms[8].on('pointerup', () => {
            if(gameState.rooms[8].fillColor == 0xEFFE2F){
                gameState.rooms[8].fillColor = 0x221971;
                gameState.score += 10;
                gameState.scoreText.setText(`Score: ${gameState.score}`);
            }
            if(gameState.currentRoom == 8){
                error_sound.play();
                gameState.score -= 25;
                gameState.scoreText.setText(`Score: ${gameState.score}`);
                mainCam.shake(500, 0.003);
            }
            else{
                switch_sound.play();
            }
        });
        gameState.rooms[9].on('pointerup', () => {
            if(gameState.rooms[9].fillColor == 0xEFFE2F){
                gameState.rooms[9].fillColor = 0x221971;
                gameState.score += 10;
                gameState.scoreText.setText(`Score: ${gameState.score}`);
            }
            if(gameState.currentRoom == 9){
                error_sound.play();
                gameState.score -= 25;
                gameState.scoreText.setText(`Score: ${gameState.score}`);
                mainCam.shake(500, 0.003);
            }
            else{
                switch_sound.play();
            }
        });
        gameState.rooms[10].on('pointerup', () => {
            if(gameState.rooms[10].fillColor == 0xEFFE2F){
                gameState.rooms[10].fillColor = 0x221971;
                gameState.score += 10;
                gameState.scoreText.setText(`Score: ${gameState.score}`);
            }
            if(gameState.currentRoom == 10){
                error_sound.play();
                gameState.score -= 25;
                gameState.scoreText.setText(`Score: ${gameState.score}`);
                mainCam.shake(500, 0.003);
            }
            else{
                switch_sound.play();
            }
        });
        gameState.rooms[11].on('pointerup', () => {
            if(gameState.rooms[11].fillColor == 0xEFFE2F){
                gameState.rooms[11].fillColor = 0x221971;
                gameState.score += 10;
                gameState.scoreText.setText(`Score: ${gameState.score}`);
            }
            if(gameState.currentRoom == 11){
                error_sound.play();
                gameState.score -= 25;
                gameState.scoreText.setText(`Score: ${gameState.score}`);
                mainCam.shake(500, 0.003);
            }
            else{
                switch_sound.play();
            }
        });
        
        this.initializeAnimations();
        this.createCharacter();   
        
    }

    initializeAnimations(){
        this.anims.create({
            key: 'appear',
            frames: this.anims.generateFrameNumbers('character', { frames: [1,3,7,9,11,14,16,19,20] }),
            frameRate: 4
        });
    }

    createCharacter(){
        gameState.character_sprite = this.add.sprite(0, 0, 'character').setScale(.8);

        this.updateRoom();
        gameState.character_sprite.on('animationcomplete-appear', () => {
            this.updateRoom();
        });
        //gameState.character_sprite.anims.play('appear');

    }

    getRandomRoom(){
        return Phaser.Utils.Array.GetRandom(this.locations);
    }

    updateRoom(){
        const randomRoom = this.getRandomRoom();
        gameState.character_sprite.setPosition(randomRoom.x, randomRoom.y);
        gameState.rooms[randomRoom.key].fillColor = 0xEFFE2F;
        gameState.character_sprite.anims.play('appear');
        gameState.currentRoom = randomRoom.key;
        //console.log(gameState.currentRoom);
    }

    update(){
        if(gameState.time === 0){
            let temp = gameState.score;
            gameState.score = 0;
            gameState.time = 30;
            this.scene.stop('GameScene');
            this.scene.start('EndScene', {score:temp});
        }
    }
}