const Phaser = require("phaser");

// Create a ReflectionScene class that extends Phaser.Scene for the Reflection mini-game
class ReflectionScene extends Phaser.Scene {
  constructor() {
    super("ReflectionScene");
  }

  preload() {
    // Preload the image for the Reflection scene
    this.load.image(
      "background_reflection",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz2z34hXGjdX0uZt3p4ynU_hx9FCAtXwKCsg&usqp=CAU"
    );
  }

  create() {
    // Add the background image
    const backgroundImage = this.add
      .image(0, 0, "background_reflection")
      .setOrigin(0);

    // Adjust the scale of the background image to cover the entire game canvas
    backgroundImage.setScale(
      this.cameras.main.width / backgroundImage.width,
      this.cameras.main.height / backgroundImage.height
    );

    // Initialize game variables
    this.currentQuestion = 0;
    this.questions = [
      {
        question: "Question 1",
        options: ["Option A", "Option B"],
        correctOption: 1, // Index of the correct option (1 or 2)
      },
      {
        question: "Question 2",
        options: ["Option X", "Option Y"],
        correctOption: 2,
      },
      {
        question: "Question 3",
        options: ["Option X", "Option Y"],
        correctOption: 2,
      },
      {
        question: "Question 4",
        options: ["Option X", "Option Y"],
        correctOption: 2,
      },
      {
        question: "Question 5",
        options: ["Option X", "Option Y"],
        correctOption: 2,
      },
      {
        question: "Question 6",
        options: ["Option X", "Option Y"],
        correctOption: 2,
      },
      {
        question: "Question 7",
        options: ["Option X", "Option Y"],
        correctOption: 2,
      },
    ];
    this.timeRemaining = 60;
    this.timerText = this.add.text(16, 16, `Time: ${this.timeRemaining}`, {
      fontFamily: "Arial",
      fontSize: "24px",
      color: "#ffffff",
    });

    // Show the first question
    this.showQuestion();

    // Start the timer
    this.timer = this.time.addEvent({
      delay: 1000,
      callback: this.updateTimer,
      callbackScope: this,
      loop: true,
    });
  }

  showQuestion() {
    if (this.currentQuestion >= this.questions.length) {
      // All questions have been answered, end the mini-game or handle accordingly
      this.endMiniGame(true);
      return;
    }

    // Clear previous question if any
    if (this.questionText) {
      this.questionText.destroy();
    }

    // Display the current question
    this.questionText = this.add
      .text(
        this.cameras.main.width / 2,
        this.cameras.main.height / 2,
        this.questions[this.currentQuestion].question,
        {
          fontFamily: "Arial",
          fontSize: "32px",
          color: "#ffffff",
          align: "center",
          wordWrap: { width: 600, useAdvancedWrap: true },
        }
      )
      .setOrigin(0.5);

    // Display the answer options as buttons with colorful backgrounds
    const answerOptions = this.questions[this.currentQuestion].options;

    const button1 = this.add
      .rectangle(
        this.cameras.main.width / 2,
        this.cameras.main.height / 2 + 100,
        300,
        50,
        0x8bc34a
      )
      .setInteractive();

    const button2 = this.add
      .rectangle(
        this.cameras.main.width / 2,
        this.cameras.main.height / 2 + 150,
        300,
        50,
        0xff5722
      )
      .setInteractive();

    const buttonText1 = this.add
      .text(button1.x, button1.y, answerOptions[0], {
        fontFamily: "Arial",
        fontSize: "24px",
        color: "#ffffff",
      })
      .setOrigin(0.5);

    const buttonText2 = this.add
      .text(button2.x, button2.y, answerOptions[1], {
        fontFamily: "Arial",
        fontSize: "24px",
        color: "#ffffff",
      })
      .setOrigin(0.5);

    button1.on("pointerdown", () => {
      this.handleAnswer(1);
    });

    button2.on("pointerdown", () => {
      this.handleAnswer(2);
    });
  }

  handleAnswer(selectedOption) {
    const currentQuestion = this.questions[this.currentQuestion];
    const correctOption = currentQuestion.correctOption;

    if (selectedOption === correctOption) {
      // Correct answer, proceed to the next question
      this.currentQuestion++;
      this.showQuestion();
    } else {
      // Wrong answer, end the game and display "Thua rồi" popup
      this.endMiniGame(false);
    }
  }

  updateTimer() {
    this.timeRemaining--;
    this.timerText.setText(`Time: ${this.timeRemaining}`);

    if (this.timeRemaining <= 0) {
      // Time's up, end the mini-game or handle accordingly
      this.endMiniGame(false);
    }
  }

  endMiniGame(isWin) {
    // Reset game variables and transition to the next scene
    this.currentQuestion = 0;
    this.timeRemaining = 60;
    if (isWin) {
      this.scene.start("MenuScene");
    } else {
      this.scene.start("LoseScene");
    }
  }
}

export default ReflectionScene;
