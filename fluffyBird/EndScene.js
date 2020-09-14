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
        
        if(score >= 2)
            score -= 2;
        
        const screenCenterX = this.cameras.main.worldView.x + this.cameras.main.width / 2;
        this.add.image(screenCenterX, 200, 'gameover').setOrigin(0.5);
        
        this.add.text(screenCenterX, 300, `Score: ${score}`, {
            fontFamily: 'Comic Sans MS',
            fontStyle: 'bold',
            fontSize: '32px',
            stroke: '#000000',
            strokeThickness: 10
        }).setOrigin(0.5);

        let again = this.add.text(screenCenterX, 400, 'Click Here to Try Again!', {
            fontFamily: 'Comic Sans MS',
            fontStyle: 'bold',
            fontSize: '32px',
            stroke: '#000000',
            strokeThickness: 10
        }).setOrigin(0.5);
        
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
