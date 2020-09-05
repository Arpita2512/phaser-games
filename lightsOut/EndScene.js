let score;

class EndScene extends Phaser.Scene{
    constructor(){
        super({key: 'EndScene'});
    }
    init(data){
        score = data.score;
    }
    create(){
        this.add.text(270, 150, 'Game Over!', {
            fontFamily: 'Lucida Console',
            fontStyle: 'bold',
            fontSize: '40px'
        });
        
        this.add.text(300, 300, `Score: ${score}`, {
            fontFamily: 'Lucida Console',
            fontStyle: 'bold',
            fontSize: '28px'
        });

        let again = this.add.text(200, 400, 'Click Here to Try Again!', {
            fontFamily: 'Lucida Console',
            fontStyle: 'bold',
            fontSize: '28px',
        });
        again.setInteractive();
        again.on('pointerup', () => {
            this.scene.stop('EndScene');
            this.scene.start('GameScene');
        });
        
    }
}