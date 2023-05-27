const Phaser = require("phaser");
const LoseScene = require("./loseScene");
const MenuScene = require("./menuScene");
const ReflectionScene = require("./reflectionScene");

// Create a new Phaser game configuration
const config = {
  type: Phaser.AUTO,
  width: 900,
  height: 600,
  scene: [MenuScene, ReflectionScene, LoseScene], // Add ReflectionScene to the scenes
};

// Create a new Phaser game instance
const game = new Phaser.Game(config);
