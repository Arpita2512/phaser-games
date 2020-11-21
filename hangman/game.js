const config = {
    type: Phaser.AUTO,
    width: 1000,
    height: 600,
    scene: [StartScene, GameScene, WinScene, LoseScene]
  };
  
  const game = new Phaser.Game(config);
  