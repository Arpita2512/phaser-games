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
        
 
        const logo_sprite = this.add.sprite(400, 180, 'logo');
        this.anims.create({
            key: 'logo_anim',
            frames: this.anims.generateFrameNames('logo', {start:0, end:20}),
            frameRate: 15,
            repeat: -1
        });
        logo_sprite.anims.play('logo_anim', true);
        
        this.add.text(270, 420, 'Click to play!', {
            fontFamily: 'Lucida Console',
            fontStyle: 'bold',
            fontSize: '28px'
        });
        this.input.on('pointerup', () => {
            this.scene.stop('StartScene');
            this.scene.start('HelpScene');
        });
    }
    
}