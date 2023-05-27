// Import the Phaser library
import Phaser from "phaser";

// Create a LoseScene class that extends Phaser.Scene
class LoseScene extends Phaser.Scene {
  constructor() {
    super("LoseScene");
  }

  create() {
    // Add a background image or any other visuals you want

    // Add the lose message
    this.add
      .text(
        this.cameras.main.width / 2,
        this.cameras.main.height / 2,
        "Thua rồi",
        {
          fontFamily: "Arial",
          fontSize: "48px",
          color: "#ffffff"
        }
      )
      .setOrigin(0.5);

    // Make the scene interactive
    this.input.on("pointerdown", () => {
      this.scene.start("MenuScene"); // Replace 'NextScene' with the actual scene for the next mini-game
    });
  }
}

export default LoseScene;
