let score;

class EndScene extends Phaser.Scene{
    constructor(){
        super({key: 'EndScene'});
    }
    init(data){
        score = data.score;
    }
    create(){
        const screenCenterX = this.cameras.main.worldView.x + this.cameras.main.width / 2;
        
        this.add.text(screenCenterX, 150, 'Game Over!', {
            fontFamily: 'Lucida Console',
            fontStyle: 'bold',
            fontSize: '40px'
        }).setOrigin(0.5);
        
        this.add.text(screenCenterX, 300, `Score: ${score}`, {
            fontFamily: 'Lucida Console',
            fontStyle: 'bold',
            fontSize: '28px'
        }).setOrigin(0.5);

        let again = this.add.text(screenCenterX, 400, 'Click Here to Try Again!', {
            fontFamily: 'Lucida Console',
            fontStyle: 'bold',
            fontSize: '28px',
        }).setOrigin(0.5);
        
        again.setInteractive();
        again.on('pointerup', () => {
            this.scene.stop('EndScene');
            this.scene.start('GameScene');
        });
        
    }
}
