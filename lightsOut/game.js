const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: "#000000",
    scene: [StartScene, HelpScene, GameScene, EndScene]
  };
  
  const game = new Phaser.Game(config);
  