'use strict';
const computerScore = document.getElementById('computerScore');
const playersScore = document.getElementById('playerScore');
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const displayer = document.getElementById('display-win');
const computer = document.querySelector('.computer');
const resetBtn = document.getElementById('resetBtn');


const guesses = ['rock', 'paper', 'scissors'];

let compScore = 0;
let userScore = 0;
let compChoice = ''

const Choice = function(yourChoice) {
    let compChoice = guesses[Math.floor(Math.random() * guesses.length)];
    computer.className = "computer fa-regular fa-hand-" + compChoice
    checkWin(yourChoice, compChoice)
}
// Choice()

const checkWin = function (yourChoice, compChoice) {
    if ((yourChoice === 'rock' && compChoice === 'paper') || (yourChoice === 'paper' && compChoice === 'scissors') || (yourChoice === 'scissors' && compChoice === 'rock')) {
        displayResult('You lost');
        displayer.style.color = 'red';
        compScore += 1
    } else { 
        if (yourChoice === compChoice) {
            displayResult('Draw');
            displayer.style.color = '#000'
        } else {
            displayResult('You won');
            displayer.style.color = 'green';
            userScore += 1;
        }
    }
    scoreCount(userScore, compScore);
    checkHigherScore(userScore, compScore)
    // computerCss(computer)
    // updateWinner(userScore, compScore)
}

// Display if win or loss 
const displayResult = function (result) {
    displayer.innerText = result
}

const scoreCount = function (userScore, compScore) {
    playersScore.innerHTML= userScore;
    computerScore.innerHTML = compScore;
}

// Update on high score
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

// Update winner 
// const updateWinner = function(userScore, compScore) {
//     if (userScore >= 3) {
//         displayResult('You won the game 🎉!')
//         checkWin(userScore, compScore) = false
//     } else if (compScore >= 3){
//         displayResult('You lost the game 😪')
//     }

// }
// updateWinner(userScore, compScore)


// Reset Game
const reset = function() {
    playersScore.innerHTML= userScore = 0;
    computerScore.innerHTML = compScore = 0;

    if (userScore === compScore) {
        playersScore.style.color = '#000';
        computerScore.style.color = '#000';
    }

    displayResult('Play again!');
    displayer.style.color = 'blueviolet';

}
// reset()


resetBtn.addEventListener('click', reset);

// function factorial(n) {
//     if (n === 0) {
//         return 1
//     } else {
//         return n * factorial(n - 1)
//     }
// }
// const result = factorial(8)
// console.log(result);