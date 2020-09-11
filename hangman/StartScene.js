class StartScene extends Phaser.Scene{
    constructor(){
        super({key: 'StartScene'});
    }
    preload(){
        //this.load.audio('bgMusic', 'assets/bgm.mp3');
        this.load.image('bg_img', 'assets/bg.jpg');
    }
    create(){
        this.bg = this.add.image(0, 0, 'bg_img').setScale(0.49, 0.63).setOrigin(0, 0);
        /*
        var music = this.sound.add('bgMusic');
        
        music.play({
            loop: true,
            volume: 0.3
        });
        */
        this.add.text(180, 120, 'Hangman', {
        fontFamily: 'font1',
        fontSize: '120px'
        });      
        this.add.text(290, 420, 'Click to play!', {
            fontFamily: 'font1',
            fontSize: '40px'
        });
        
        this.input.on('pointerup', () => {
            this.scene.stop('StartScene');
            this.scene.start('GameScene');
        });
        
    }
    
}