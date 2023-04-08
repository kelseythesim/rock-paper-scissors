//need to make rock paper scissors game

/* 
Sub problems


2. Create a conditional statement that will decide the winner.
    a. Needs to be correct. How can I do this the shortest way with best practices?
3. Create a function that will run the game and output the winner.*/


// Problem 1

const myArray = ['Rock', 'Paper', 'Scissors']

function getComputerChoice () {
    let result = myArray[Math.floor(Math.random() * myArray.length)];
    return result;
};

function playGame (computerSelection, playerSelection) {
    if (computerSelection = "rock" && playerSelection === "scissors") {
        return "You lose. Rock beats scissors!"
    } else if (computerSelection === "scissors" && playerSelection === "rock") {
        return "You win! Rock beats scissors!"
    } else if (computerSelection === "paper" && playerSelection === "rock") {
        return "You lose! Paper beats rock!"
    } else if (computerSelection === "rock" && playerSelection === "paper") {
        return "You win! Paper beats rock!"
    } else if (computerSelection === "paper" && playerSelection === "scissors") {
        return "You win! Scissors beats paper!"
    } else if (computerSelection === "scissors" && playerSelection === "rock") {
        return "You lose! Scissors beats paper!"
    } else {
        return "It's a tie! Try again."
    }
}