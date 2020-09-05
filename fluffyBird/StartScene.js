class StartScene extends Phaser.Scene{
    constructor(){
        super({key: 'StartScene'});
    }
    
    preload(){
        this.load.image('bg_img', 'assets/background.png');
        this.load.image('logo', 'assets/logo.png');
        this.load.audio('bgMusic', 'assets/golucky.mp3');
    }
    create(){
        //this.bg = this.add.image(0, 0, 'bg_img').setScale(1.2, 1.5).setOrigin(0, 0);
        this.bg = this.add.tileSprite(400, 240, 800, 480, 'bg_img').setScale(1.2, 1.5);
        //this.grass = this.add.tileSprite
        
        var music = this.sound.add('bgMusic');
        
        music.play({
            loop: true
        });
               
        this.add.text(290, 400, 'Click to play!', {
            fontFamily: 'Comic Sans MS',
            fontStyle: 'bold',
            fontSize: '32px',
            //color: '#000000',
            stroke: '#000000',
            strokeThickness: 10
        });
        this.add.image(420, 200, 'logo');
        this.input.on('pointerup', () => {
            this.scene.stop('StartScene');
            this.scene.start('GameScene');
        });
    }
    update(){
        this.bg.tilePositionX += 2;
    }
    
}