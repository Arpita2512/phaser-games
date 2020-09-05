let score;

class EndScene extends Phaser.Scene{
    constructor(){
        super({key: 'EndScene'});
    }
    init(data){
        score = data.score;
    }
    preload(){
        this.load.image('bg_img', 'assets/background.png');
        this.load.image('gameover', 'assets/gameover.png');
    }
    create(){
        this.bg = this.add.tileSprite(400, 240, 800, 480, 'bg_img').setScale(1.2, 1.5);
        this.add.image(410, 200, 'gameover');

        if(score >= 2)
            score -= 2;

        this.add.text(330, 300, `Score: ${score}`, {
            fontFamily: 'Comic Sans MS',
            fontStyle: 'bold',
            fontSize: '32px',
            stroke: '#000000',
            strokeThickness: 10
        });

        let again = this.add.text(200, 400, 'Click Here to Try Again!', {
            fontFamily: 'Comic Sans MS',
            fontStyle: 'bold',
            fontSize: '32px',
            stroke: '#000000',
            strokeThickness: 10
        });
        again.setInteractive();
        again.on('pointerup', () => {
            this.scene.stop('EndScene');
            this.scene.start('GameScene');
        });
        
    }
    update(){
        this.bg.tilePositionX += 2;
    }
}