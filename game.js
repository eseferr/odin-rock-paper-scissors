let humanScore = 0;
let computerScore = 0;
result = document.querySelector(".result");
let buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    result.textContent = "";
    if (event.target.className === "btn-rock") {
      playGame("🪨");
    }
    if (event.target.className === "btn-paper") {
      playGame("📄");
    }
    if (event.target.className === "btn-scissors") {
      playGame("✂️");
    }
  });
});

function getComputerChoice() {
  let number = Math.random() * 10;
  let computerChoice;
  if (number < 3.33) {
    computerChoice = "🪨";
  } else if (number >= 3.33 && number < 6.66) {
    computerChoice = "📄";
  } else {
    computerChoice = "✂️";
  }
  return computerChoice;
}

function scoreWriter() {
  let score = document.querySelector(".score");
  score.textContent =
    "Player's Score: " + humanScore + " Computer's Score: " + computerScore;
}

function playRound(humanChoice) {
  const computerChoice = getComputerChoice();
  let state = document.querySelector(".state");
  if (humanChoice === "🪨" && computerChoice === "📄") {
    computerScore++;
  }
  if (humanChoice === "🪨" && computerChoice === "✂️") {
    state.textContent = "Player: 🪨 Computer: ✂️ Human Wins! ";
    humanScore++;
  }
  if (humanChoice === "📄" && computerChoice === "✂️") {
    state.textContent = "Player: 📄 Computer: ✂️ Computer Wins! ";
    computerScore++;
  }
  if (humanChoice === "📄" && computerChoice === "🪨") {
    state.textContent = "Player: 📄 Computer: 🪨 Human Wins! ";
    humanScore++;
  }
  if (humanChoice === "✂️" && computerChoice === "🪨") {
    state.textContent = "Player: ✂️ Computer: 🪨 Human Wins! ";
    humanScore++;
  }
  if (humanChoice === "✂️" && computerChoice === "📄") {
    state.textContent = "Player: ✂️ Computer: 📄 Computer Wins!";
    computerScore++;
  } else if (humanChoice === computerChoice) {
    state.textContent =
      " Player: " + humanChoice + " Computer: " + computerChoice + "      Tie!";
  }
  scoreWriter();
}

function playGame(humanChoice) {
  playRound(humanChoice);
  if (humanScore == 5 || computerScore == 5) {
    if (humanScore > computerScore) {
      result.textContent = "Congratulations! You won the game!";
    } else if (humanScore < computerScore) {
      result.textContent = "Sorry! The computer won the game.";
    } else {
      result.textContent = "The game is a tie!";
    }
    humanScore = 0;
    computerScore = 0;
    scoreWriter();
  }
}
