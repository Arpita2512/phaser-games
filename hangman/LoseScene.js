let movieName;

class LoseScene extends Phaser.Scene{
    constructor(){
        super({key: 'LoseScene'});
    }
    init(data){
        movieName = data.name;
    }
    create(){
        const screenCenterX = this.cameras.main.worldView.x + this.cameras.main.width / 2;

        this.add.text(screenCenterX, 150, 'You Lose!', {
            fontFamily: 'font1',
            fontSize: '60px'
        }).setOrigin(0.5);
        
        this.add.text(screenCenterX, 280, `Movie: ${movieName}`, {
            fontFamily: 'font1',
            fontSize: '40px'
        }).setOrigin(0.5);

        this.add.text(screenCenterX, 450, 'Click to play again!', {
            fontFamily: 'font1',
            fontSize: '40px',
        }).setOrigin(0.5);

        this.input.on('pointerup', () => {
            this.scene.stop('LoseScene');
            this.scene.start('GameScene');
        });
    }
}