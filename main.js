const getPlayerChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (
    userInput === "rock" ||
    userInput === "scissors" ||
    userInput === "paper"
  ) {
    return userInput;
  } else {
    return "Please put a valid choice: rock, paper, or scissors.";
  }
};

const getComputerChoice = () => {
  let randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
};

let computerChoice = getComputerChoice();

const playRound = (computerChoice, playerChoice) => {
  if (computerChoice === playerChoice) {
    return "It's a tie!";
  }
  if (playerChoice === "rock") {
    if (computerChoice === "paper") {
      return "You lost!";
    } else {
      return "You won!";
    }
  }
  if (playerChoice === "paper") {
    if (computerChoice === "scissors") {
      return "You lost!";
    } else {
      return "You won!";
    }
  }
  if (playerChoice === "scissors") {
    if (computerChoice === "rock") {
      return "You lost!";
    } else {
      return "You won!";
    }
  }
};

const game = () => {
  console.log(playRound(computerChoice, "paper"));
  console.log(playRound(computerChoice, "rock"));
  console.log(playRound(computerChoice, "scissors"));
  console.log(playRound(computerChoice, "paper"));
  console.log(playRound(computerChoice, "paper"));
}

game();