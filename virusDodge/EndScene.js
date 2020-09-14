let score;

class EndScene extends Phaser.Scene{
    constructor(){
        super({key: 'EndScene'});
    }
    init(data){
        score = data.score;
    }
    preload(){
        this.load.image('gameOver', 'assets/gameOver.png');
    }
    create(){
        const screenCenterX = this.cameras.main.worldView.x + this.cameras.main.width / 2;
        this.add.image(screenCenterX, 180, 'gameOver').setScale(.8).setOrigin(0.5);
        
        this.add.text(screenCenterX, 320, `Game Over!\n\nScore: ${score}`, {
            fontFamily: 'Comic Sans MS',
            fontStyle: 'bold',
            fontSize: '24px',
            color: '#DBFEE7',
            stroke: '#000000',
            strokeThickness: 7
        }).setOrigin(0.5);
        
        this.add.text(screenCenterX, 480, 'Click to restart!', {
            fontFamily: 'Comic Sans MS',
            fontStyle: 'bold',
            fontSize: '24px',
            color: '#DBFEE7',
            stroke: '#000000',
            strokeThickness: 7
        }).setOrigin(0.5);
        
        this.input.on('pointerup', () => {
            this.scene.stop('EndScene');
            this.scene.start('GameScene');
        });
    }
}
