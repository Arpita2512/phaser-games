const gameState = {
    score: 0,
    flag: true,
};

class GameScene extends Phaser.Scene{
    constructor(){
        super({key: 'GameScene'});
    }

    preload(){
        this.load.image('bg_img', 'assets/background.png');
        this.load.image('bird', 'assets/birdy.png');
        this.load.image('obstacleBottom', 'assets/pipeGreen_25.png');
        this.load.image('obstacleTop', 'assets/pipeGreen_25.png');
        this.load.audio('jump', 'assets/sfx_movement_jump14.wav');
        this.load.audio('explode', 'assets/sfx_exp_short_hard14.wav');
    }

    create(){
        gameState.score = 0;
        gameState.flag = true;
        this.bg = this.add.tileSprite(400, 240, 800, 480, 'bg_img').setScale(1.2, 1.5);
        gameState.bird = this.physics.add.sprite(400, 300, 'bird').setScale(0.13, 0.13);

        var jumpSound = this.sound.add('jump');
        var explosionSound = this.sound.add('explode');
               
        gameState.obstacleList = [];
        const obstacleGen = () => {
            const yTopCoord = Math.random()*100;
            const yBottomCoord = yTopCoord + 550;
            const o1 = this.physics.add.sprite(820, yTopCoord, 'obstacleTop').setScale(0.8, 1.5);
            o1.body.allowGravity = false;
            const o2 = this.physics.add.sprite(820, yBottomCoord, 'obstacleBottom').setScale(0.8, 1.5);
            o2.body.allowGravity = false;
            gameState.obstacleList.push(o1);
            gameState.obstacleList.push(o2);
            gameState.score += 1;
        };
        
        const obstacleGenLoop = this.time.addEvent({
            delay: 1500,
            callback: obstacleGen,
            loop: true,
        });

        this.physics.add.collider(gameState.bird, gameState.obstacleList, function(bird, obs){
            gameState.flag = false;
            explosionSound.play();
        });
        
        this.input.on('pointerup', () => {
            //if(gameState.flag)
            gameState.bird.body.velocity.y = -120;
            jumpSound.play();
        });
        
    }

    update(){
        if(gameState.flag && gameState.bird.y < 600){
            this.bg.tilePositionX += 2;
            for(let i = 0; i < gameState.obstacleList.length; i++){
                if(gameState.obstacleList[i].x < -50){
                    gameState.obstacleList[i].destroy();
                }
                else{
                    gameState.obstacleList[i].x -= 2;
                }
            }
        }
        else{
            //this.scene.pause();
            let temp = gameState.score;
            this.scene.stop('GameScene');
            this.scene.start('EndScene', {score: temp});
        }
        //gameState.o1.x -= 2;
        //gameState.o2.x -= 2;
    }
}