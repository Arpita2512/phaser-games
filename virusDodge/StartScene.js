class StartScene extends Phaser.Scene{
    constructor(){
        super({key: 'StartScene'});
    }
    
    preload(){
        this.load.image('logo', 'assets/logo.png');
        this.load.image('virus1', 'assets/virus1.png');
        this.load.image('virus2', 'assets/virus2.png');
        this.load.audio('music', 'assets/bgMusic.mp3');
    }
    create(){
        let music = this.sound.add('music');
        music.play({loop: true});

        this.add.image(280, 180, 'logo');
        
        const screenCenterX = this.cameras.main.worldView.x + this.cameras.main.width / 2;
        this.add.text(screenCenterX, 420, 'Click to continue!', {
            fontFamily: 'Comic Sans MS',
            fontStyle: 'bold',
            fontSize: '24px',
            color: '#DBFEE7',
            stroke: '#000000',
            strokeThickness: 7
        }).setOrigin(0.5);
        
        this.add.image(220, 80, 'virus2').setScale(.6);
        this.add.image(430, 255, 'virus1').setScale(.6);

        this.input.on('pointerup', () => {
            this.scene.stop('StartScene');
            this.scene.start('HelpScene');
        });
    }
    
}
