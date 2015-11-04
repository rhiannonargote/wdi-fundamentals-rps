////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    if (move == null) {
        return getInput();
    } else {
        return playerMove;
    }
}

function getComputerMove(move) {
    if (move == null) {
        return randomPlay();
    } else {
        return computerMove
    }
}

function getWinner(playerMove,computerMove) {
    var winner;

    if (playerMove === computerMove) {
        winner = 'tie';
    } else if (playerMove === 'scissors' && computerMove === 'paper') {
        winner = 'player';
    } else if (playerMove === 'scissors' && computerMove === 'rock') {
        winner = 'computer'; 
    { else if (playerMove === 'paper' && computerMove === 'scissors') {
        winner = 'computer';
    } else if (playerMove === 'paper' && computerMove === 'rocks') {
        winner = 'player';
    } else if (playerMove === 'rock' && computerMove === 'paper') {
        winner = 'computer';
    } else 
        winner = null;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;

    while (playerWins < 5 || computerWins < 5) {
        var playerMove = getPlayerMove();
        var computerMove = getComputerMove();
        var winner = getWinner(playerMove,computerMove);
        if (winner === 'player') {
            playerWins += 1;
        } else if ( winner === 'computer') {
            computerWins += 1;
        } else (playerMove === computerMove) 
            console.log("It's a tie!")
        }
        console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
        console.log('The score is currently ' + playerWins + ' to ' + computerWins);
    
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    return [playerWins, computerWins];
}

