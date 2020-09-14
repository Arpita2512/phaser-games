class StartScene extends Phaser.Scene{
    constructor(){
        super({key: 'StartScene'});
    }
    preload(){
        this.load.image('bg_img', 'assets/bg.jpg');
    }
    create(){
        this.bg = this.add.image(0, 0, 'bg_img').setScale(0.49, 0.63).setOrigin(0, 0);
        
        const screenCenterX = this.cameras.main.worldView.x + this.cameras.main.width / 2;
        
        this.add.text(screenCenterX, 120, 'Hangman', {
        fontFamily: 'font1',
        fontSize: '120px'
        });      
        this.add.text(screenCenterX, 420, 'Click to play!', {
            fontFamily: 'font1',
            fontSize: '40px'
        });
        
        this.input.on('pointerup', () => {
            this.scene.stop('StartScene');
            this.scene.start('GameScene');
        });
        
    }
    
}
