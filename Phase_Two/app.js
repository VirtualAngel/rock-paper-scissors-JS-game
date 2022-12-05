// Computer Choice, User Choice, and Result
const computerChoiceDisplay_span = document.getElementById('computer-choice');
const userChoiceDisplay_span = document.getElementById('user-choice');
const resultDisplay_span = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');

let userChoice;
let computerChoice;
let result;

// Scoreboard
let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById('user-score');
const userComputer_span = document.getElementById('computer-score');
const scoreBoard_section = document.querySelector('.scoreboard');



possibleChoices.forEach(buttonChoice => buttonChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay_span.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}))

function win() {
    userScore++;
    console.log("Win");
    console.log(userScore);
}

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    console.log(randomNumber)

    if (randomNumber === 0) {
        computerChoice = 'Rock'
    }
    if (randomNumber === 1) {
        computerChoice = 'Paper'
    }
    if (randomNumber === 2) {
        computerChoice = 'Scissors'
    }

    computerChoiceDisplay_span.innerHTML = computerChoice
};

function getResult() {
    if (computerChoice === userChoice) {
        result='You\'ve tied with the computer!'
    }
    if (computerChoice === 'Rock' && userChoice === 'Paper') {
        win();
        result='You win!'
    }
    if (computerChoice === 'Rock' && userChoice === 'Scissors') {
        result='You Lose!'
    }
    if (computerChoice === 'Paper' && userChoice === 'Rock') {
        result='You lose!'
    }
    if (computerChoice === 'Paper' && userChoice === 'Scissors') {
        win();
        result='You win!'
    }
    if (computerChoice === 'Scissors' && userChoice === 'Rock') {
        win();
        result='You win!'
    }
    if (computerChoice === 'Scissors' && userChoice === 'Paper') {
        result='You lose!'
    }
    resultDisplay_span.innerHTML = result
};