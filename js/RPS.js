'use strict';
const computerScore = document.getElementById('computerScore');
const playersScore = document.getElementById('playerScore');
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const displayer = document.getElementById('display-win');
const computer = document.querySelector('.computer');
console.log(computer);


const guesses = ['rock', 'paper', 'scissors'];

let compScore = 0;
let userScore = 0;
let compChoice = ''

const Choice = function(yourChoice) {
    let compChoice = guesses[Math.floor(Math.random() * guesses.length)];
    computer.classList = "fa-regular fa-hand-" + compChoice
    checkWin(yourChoice, compChoice)
}
// Choice()

const checkWin = function (yourChoice, compChoice) {
    if ((yourChoice === 'rock' && compChoice === 'paper') || (yourChoice === 'paper' && compChoice === 'scissors') || (yourChoice === 'scissors' && compChoice === 'rock')) {
        displayResult('You lose');
        displayer.style.color = 'red';
        compScore += 1
    } else { 
        if (yourChoice === compChoice) {
            displayResult('Draw');
            displayer.style.color = '#000'
        } else {
            displayResult('You win');
            displayer.style.color = 'green';
            userScore += 1;
        }
    }
    scoreCount(userScore, compScore);
    checkHigherScore(userScore, compScore)
    computerCss(computer)
}

// Display if win or loss 
const displayResult = function (result) {
    displayer.innerText = result
}

const scoreCount = function (userScore, compScore) {
    playersScore.innerHTML= userScore;
    computerScore.innerHTML = compScore;
}

const checkHigherScore = function (userScore, compScore) {
    if (userScore > compScore) {
        playersScore.style.color = 'green';
        computerScore.style.color = 'red';
    } else if (userScore === compScore) {
        playersScore.style.color = '#000';
        computerScore.style.color = '#000';
    } else {
        playersScore.style.color = 'red';
        computerScore.style.color = 'green';
    }
}

const computerCss = function(computer) {
    computer.style.fontSize = '20px'
}