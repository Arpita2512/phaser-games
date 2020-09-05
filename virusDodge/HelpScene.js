class HelpScene extends Phaser.Scene{
    constructor(){
        super({key: 'HelpScene'});
    }
    preload(){
        this.load.image('virus1', 'assets/virus1.png');
        this.load.image('virus2', 'assets/virus2.png');
        this.load.image('sanitiser', 'assets/sanitiser.png');
        this.load.image('mask', 'assets/mask.png');
        this.load.image('sickBoy', 'assets/sickBoy.png');
        this.load.image('sickGirl', 'assets/sickGirl.png');
        this.load.image('player', 'assets/player.png');
    }
    create(){
        this.add.text(120, 60, 'Protect yourself\n from the virus!', {
            fontFamily: 'Comic Sans MS',
            fontStyle: 'bold',
            fontSize: '20px',
            color: '#DBFEE7', //'#f0903c',
            stroke: '#000000',
            strokeThickness: 7
        });
        this.add.image(330, 80, 'player').setScale(.4);

        this.add.text(80, 180, '1. Avoid the virus\n   & infected people', {
            fontFamily: 'Comic Sans MS',
            fontStyle: 'bold',
            fontSize: '20px',
            color: '#DBFEE7', //'#f0903c',
            stroke: '#000000',
            strokeThickness: 7
        });
        this.add.image(300, 200, 'virus1').setScale(.7);
        this.add.image(360, 200, 'virus2').setScale(.7);
        this.add.image(420, 200, 'sickGirl').setScale(.8);
        this.add.image(480, 200, 'sickBoy').setScale(.8);

        this.add.text(80, 280, '2. Collect masks\n   & sanitisers for\n   bonus points', {
            fontFamily: 'Comic Sans MS',
            fontStyle: 'bold',
            fontSize: '20px',
            color: '#DBFEE7', //'#f0903c',
            stroke: '#000000',
            strokeThickness: 7
        });
        this.add.image(300, 320, 'mask').setScale(.7);
        this.add.image(360, 320, 'sanitiser').setScale(.7);

        this.add.text(100, 420, 'Use arrow keys to move your character', {
            fontFamily: 'Comic Sans MS',
            fontStyle: 'bold',
            fontSize: '20px',
            color: '#DBFEE7', //'#f0903c',
            stroke: '#000000',
            strokeThickness: 7
        });

        this.add.text(180, 480, 'Click to begin game!', {
            fontFamily: 'Comic Sans MS',
            fontStyle: 'bold',
            fontSize: '20px',
            color: '#DBFEE7', //'#f0903c',
            stroke: '#000000',
            strokeThickness: 7
        });

        this.input.on('pointerup', () => {
            this.scene.stop('HelpScene');
            this.scene.start('GameScene');
        });
    }
}
