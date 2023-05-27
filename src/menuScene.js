// Import the Phaser library
import Phaser from "phaser";

// Create a MenuScene class that extends Phaser.Scene
class MenuScene extends Phaser.Scene {
  constructor() {
    super("MenuScene");
  }

  preload() {
    // Preload the background image
    this.load.image(
      "background",
      "https://vtv1.mediacdn.vn/thumb_w/640/2021/9/1/3-16304823045561332638143.png"
    );
  }

  create() {
    // Add a background image
    const backgroundImage = this.add.image(0, 0, "background").setOrigin(0);

    // Set the scale of the background image to cover the entire game canvas
    backgroundImage.setScale(
      this.cameras.main.width / backgroundImage.width,
      this.cameras.main.height / backgroundImage.height
    );

    // Add a play button with enhanced styling
    const playButton = this.add
      .text(
        this.cameras.main.width / 2,
        this.cameras.main.height / 2,
        "Chơi nào", // Updated text: "Chơi nào"
        {
          fontFamily: "Arial",
          fontSize: "32px",
          color: "#ffffff",
          backgroundColor: "#ff6f00", // Set a background color
          padding: {
            x: 20,
            y: 10
          },
          borderRadius: 10, // Add border radius for a rounded button appearance
          stroke: "#000000", // Add stroke color
          strokeThickness: 2, // Add stroke thickness
          shadow: {
            offsetX: 2,
            offsetY: 2,
            color: "#000000",
            blur: 4,
            fill: true
          }
        }
      )
      .setOrigin(0.5);

    // Make the play button interactive
    playButton.setInteractive();

    // Add hover and click effects
    playButton.on("pointerover", () => {
      playButton.setAlpha(0.8); // Reduce opacity on hover
    });

    playButton.on("pointerout", () => {
      playButton.setAlpha(1); // Restore opacity on pointerout
    });

    playButton.on("pointerdown", () => {
      playButton.setScale(0.95); // Scale down on click
    });

    playButton.on("pointerup", () => {
      playButton.setScale(1); // Restore scale on pointerup
      // Start the Reflection mini-game scene
      this.scene.start("ReflectionScene");
    });
  }
}

export default MenuScene;
