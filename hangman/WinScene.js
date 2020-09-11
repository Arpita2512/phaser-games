class WinScene extends Phaser.Scene{
    constructor(){
        super({key: 'WinScene'});
    }
    create(){
        const screenCenterX = this.cameras.main.worldView.x + this.cameras.main.width / 2;

        this.add.text(screenCenterX, 150, 'You Win!', {
            fontFamily: 'font1',
            fontSize: '60px'
        }).setOrigin(0.5);
        
        this.add.text(screenCenterX, 450, 'Click to play again!', {
            fontFamily: 'font1',
            fontSize: '40px',
        }).setOrigin(0.5);

        this.input.on('pointerup', () => {
            this.scene.stop('WinScene');
            this.scene.start('GameScene');
        });        
    }
}