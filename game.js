let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let number = Math.random() * 10;
  let computerChoice;
  if (number < 3.33) {
    computerChoice = "ROCK";
  } else if (number >= 3.33 && number < 6.66) {
    computerChoice = "PAPER";
  } else {
    computerChoice = "SCISSORS";
  }
  return computerChoice;
}

function getPlayerChoice() {
  let choice = prompt("Make your choice, type rock, paper or scissors");
  choice = choice.toUpperCase();
  if (choice === "ROCK" || choice === "PAPER" || choice === "SCISSORS") {
    return choice;
  } else {
    getPlayerChoice();
  }
}
function scoreWriter() {
  console.log(
    "Player's Score: " + humanScore + " Computer's Score: " + computerScore
  );
}

function playRound() {
  const humanChoice = getPlayerChoice();
  const computerChoice = getComputerChoice();
  if (humanChoice === "ROCK" && computerChoice === "PAPER") {
    computerScore++;
    console.log("You lose! Paper beats Rock");
  }
  if (humanChoice === "ROCK" && computerChoice === "SCISSORS") {
    humanScore++;
    console.log("You win! Rock beats scissors");
  }
  if (humanChoice === "PAPER" && computerChoice === "SCISSORS") {
    computerScore++;
    console.log("You lose! Scissors beats paper");
  }
  if (humanChoice === "PAPER" && computerChoice === "ROCK") {
    humanScore++;
    console.log("You win! Paper beats rock");
  }
  if (humanChoice === "SCISSORS" && computerChoice === "ROCK") {
    humanScore++;
    console.log("You win! Rock beats scissors");
  }
  if (humanChoice === "SCISSORS" && computerChoice === "PAPER") {
    computerScore++;
    console.log("You lose! Scissors beats paper");
  } else {
    console.log("It's a tie");
  }
  console.log(humanChoice, computerChoice);
  scoreWriter();
}

function playGame() {
  playRound();
  playRound();
  playRound();
  playRound();
  playRound();
  humanScore = 0;
  computerScore = 0;
}
playGame();
