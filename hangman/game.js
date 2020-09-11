const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: [StartScene, GameScene, WinScene, LoseScene]
  };
  
  const game = new Phaser.Game(config);
  