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