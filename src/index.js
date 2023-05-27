// Import the Phaser library
import Phaser from "phaser";
import LoseScene from "./loseScene";

// Import the MenuScene and ReflectionScene from their respective files
import MenuScene from "./menuScene";
import ReflectionScene from "./reflectionScene";

// Create a new Phaser game configuration
const config = {
  type: Phaser.AUTO,
  width: 900,
  height: 600,
  scene: [MenuScene, ReflectionScene, LoseScene] // Add ReflectionScene to the scenes
};

// Create a new Phaser game instance
const game = new Phaser.Game(config);
