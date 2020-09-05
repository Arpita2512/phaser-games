const config = {
    type: Phaser.AUTO,
    width: 550,
    height: 600,
    backgroundColor: "#FFFFAB", //""#DBFEE7", 
    physics: {
		default: 'arcade',
		arcade: {
			gravity: {y: 100},
			enableBody: true,
			debug: false,
		}
	},
    scene: [StartScene, HelpScene, GameScene, EndScene]
  };
  
  const game = new Phaser.Game(config);
  