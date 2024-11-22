//  // Welcome message
// console.log("Welcome to Rock, Paper, Scissors! 🪨📄✂️");

// // Function to get the computer's choice
// function getComputerChoice() {
//   const choices = ["Rock", "Paper", "Scissors"];
//   const randomIndex = Math.floor(Math.random() * choices.length);
//   return choices[randomIndex];
// }

// // Function to determine the winner
// function determineWinner(playerChoice, computerChoice) {
//   if (playerChoice === computerChoice) {
//     return "It's a tie!";
//   } else if (
//     (playerChoice === "Rock" && computerChoice === "Scissors") ||
//     (playerChoice === "Paper" && computerChoice === "Rock") ||
//     (playerChoice === "Scissors" && computerChoice === "Paper")
//   ) {
//     return "You win! 🎉";
//   } else {
//     return "Computer wins! 🤖";
//   }
// }

// // Main game function
// function playGame() {
//   let playAgain = true;

//   while (playAgain) {
//     // Get the player's choice
//     const playerChoice = prompt("Choose Rock, Paper, or Scissors (or type 'exit' to quit):");

//     if (!playerChoice || playerChoice.toLowerCase() === "exit") {
//       console.log("Thanks for playing! Goodbye! 👋");
//       playAgain = false;
//       break;
//     }

//     // Capitalize the player's choice for consistency
//     const formattedChoice = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1).toLowerCase();

//     // Check for valid input
//     if (!["Rock", "Paper", "Scissors"].includes(formattedChoice)) {
//       console.log("Invalid choice! Please select Rock, Paper, or Scissors.");
//       continue;
//     }

//     // Get the computer's choice
//     const computerChoice = getComputerChoice();

//     // Display choices
//     console.log(`You chose: ${formattedChoice}`);
//     console.log(`Computer chose: ${computerChoice}`);

//     // Determine and display the winner
//     const result = determineWinner(formattedChoice, computerChoice);
//     console.log(result);

//     // Ask if the player wants to play again
//     const replay = prompt("Do you want to play again? (yes or no):");
//     playAgain = replay.toLowerCase() === "yes";
//   }
// }

// // Start the game
// playGame();
