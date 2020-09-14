class StartScene extends Phaser.Scene{
    constructor(){
        super({key: 'StartScene'});
    }
    
    preload(){
        this.load.spritesheet('logo', 'assets/logo_spritesheet.png', {frameWidth: 563, frameHeight: 186});
        this.load.audio('bgMusic', 'assets/bgm.mp3');
    }
    create(){
        var music = this.sound.add('bgMusic');
        
        music.play({
            loop: true,
            volume: 0.3
        });
        
        const screenCenterX = this.cameras.main.worldView.x + this.cameras.main.width / 2;
        const logo_sprite = this.add.sprite(screenCenterX, 180, 'logo').setOrigin(0.5);
        
        this.anims.create({
            key: 'logo_anim',
            frames: this.anims.generateFrameNames('logo', {start:0, end:20}),
            frameRate: 15,
            repeat: -1
        });
        logo_sprite.anims.play('logo_anim', true);
        
        this.add.text(screenCenterX, 420, 'Click to play!', {
            fontFamily: 'Lucida Console',
            fontStyle: 'bold',
            fontSize: '28px'
        }).setOrigin(0.5);
        
        this.input.on('pointerup', () => {
            this.scene.stop('StartScene');
            this.scene.start('HelpScene');
        });
    }
    
}
