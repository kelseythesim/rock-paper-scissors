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
      return "Rock";
      break;
    case 1:
      return "Paper";
      break;
    case 2:
      return "Scissors";
      break;
  }
};

const determineWinner = (computerChoice, userChoice) => {
    if (computerChoice === userChoice) {
        return "It's a tie!";
    };
    
};
