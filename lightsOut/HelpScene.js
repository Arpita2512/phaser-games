class HelpScene extends Phaser.Scene{
    constructor(){
        super({key: 'HelpScene'});
    }
    create(){
        const screenCenterX = this.cameras.main.worldView.x + this.cameras.main.width / 2;
        
        this.add.text(screenCenterX, 120, "Jojo is a very naughty boy!", {
            fontFamily: 'Lucida Console',
            fontStyle: 'bold',
            fontSize: '28px'
        }).setOrigin(0.5);
        
        this.add.text(screenCenterX, 160, " He is playing in all the rooms, \nbut isn't switching off the lights \n         when he leaves.", {
            fontFamily: 'Lucida Console',
            fontStyle: 'bold',
            fontSize: '28px'
        }).setOrigin(0.5);
        
        this.add.text(screenCenterX, 320, " Switch off all the extra lights,\nbut don't turn off the light in\n          Jojo's room!", {
            fontFamily: 'Lucida Console',
            fontStyle: 'bold',
            fontSize: '28px'
        }).setOrigin(0.5);

        this.add.text(screenCenterX, 500, "Click to begin!", {
            fontFamily: 'Lucida Console',
            fontStyle: 'bold',
            fontSize: '20px'
        }).setOrigin(0.5);

        this.input.on('pointerup', () => {
            this.scene.stop('HelpScene');
            this.scene.start('GameScene');
        });
    }
}
