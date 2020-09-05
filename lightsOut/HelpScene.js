class HelpScene extends Phaser.Scene{
    constructor(){
        super({key: 'HelpScene'});
    }
    create(){
        this.add.text(170, 120, "Jojo is a very naughty boy!", {
            fontFamily: 'Lucida Console',
            fontStyle: 'bold',
            fontSize: '28px'
        });
        this.add.text(130, 160, " He is playing in all the rooms, \nbut isn't switching off the lights \n         when he leaves.", {
            fontFamily: 'Lucida Console',
            fontStyle: 'bold',
            fontSize: '28px'
        });
        this.add.text(130, 320, " Switch off all the extra lights,\nbut don't turn off the light in\n          Jojo's room!", {
            fontFamily: 'Lucida Console',
            fontStyle: 'bold',
            fontSize: '28px'
        });

        this.add.text(300, 500, "Click to begin!", {
            fontFamily: 'Lucida Console',
            fontStyle: 'bold',
            fontSize: '20px'
        });

        this.input.on('pointerup', () => {
            this.scene.stop('HelpScene');
            this.scene.start('GameScene');
        });
    }
}