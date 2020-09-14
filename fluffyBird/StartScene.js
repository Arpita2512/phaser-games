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
        this.bg = this.add.tileSprite(400, 240, 800, 480, 'bg_img').setScale(1.2, 1.5);
        
        var music = this.sound.add('bgMusic');
        music.play({
            loop: true
        });
        
        const screenCenterX = this.cameras.main.worldView.x + this.cameras.main.width / 2;               
        this.add.text(screenCenterX, 400, 'Click to play!', {
            fontFamily: 'Comic Sans MS',
            fontStyle: 'bold',
            fontSize: '32px',
            stroke: '#000000',
            strokeThickness: 10
        }).setOrigin(0.5);
        
        this.add.image(screenCenterX, 200, 'logo').setOrigin(0.5);
        
        this.input.on('pointerup', () => {
            this.scene.stop('StartScene');
            this.scene.start('GameScene');
        });
    }
    update(){
        this.bg.tilePositionX += 2;
    }
    
}
