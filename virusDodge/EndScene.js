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
        this.add.image(280, 180, 'gameOver').setScale(.8);
        this.add.text(200, 320, `Game Over!\n\nScore: ${score}`, {
            fontFamily: 'Comic Sans MS',
            fontStyle: 'bold',
            fontSize: '24px',
            color: '#DBFEE7',
            stroke: '#000000',
            strokeThickness: 7
        });
        this.add.text(180, 480, 'Click to restart!', {
            fontFamily: 'Comic Sans MS',
            fontStyle: 'bold',
            fontSize: '24px',
            color: '#DBFEE7',
            stroke: '#000000',
            strokeThickness: 7
        });
        this.input.on('pointerup', () => {
            this.scene.stop('EndScene');
            this.scene.start('GameScene');
        });
    }
}
