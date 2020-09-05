const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
      default: 'arcade',
      arcade: {
        gravity: {y: 200},
        enableBody: true,
        debug: false,
      }
    },
    scene: [StartScene, GameScene, EndScene]
  };
  
  const game = new Phaser.Game(config);
  