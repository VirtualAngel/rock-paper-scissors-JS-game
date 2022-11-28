const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')

let userChoice
let computerChoice
let result

possibleChoices.forEach(buttonChoice => buttonChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1
    console.log(randomNumber)

    if (randomNumber === 1) {
        computerChoice = 'Rock'
    }
    if (randomNumber === 2) {
        computerChoice = 'Paper'
    }
    if (randomNumber === 3) {
        computerChoice = 'Scissors'
    }

    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
    if (computerChoice === userChoice) {
        result='You\'ve tied with the computer!'
    }
    if (computerChoice === 'Rock' && userChoice === 'Paper') {
        result='You win!'
    }
    if (computerChoice === 'Rock' && userChoice === 'Scissors') {
        result='You Lose!'
    }
    if (computerChoice === 'Paper' && userChoice === 'Rock') {
        result='You lose!'
    }
    if (computerChoice === 'Paper' && userChoice === 'Scissors') {
        result='You win!'
    }
    if (computerChoice === 'Scissors' && userChoice === 'Rock') {
        result='You win!'
    }
    if (computerChoice === 'Scissors' && userChoice === 'Paper') {
        result='You lose!'
    }
    resultDisplay.innerHTML = result
}