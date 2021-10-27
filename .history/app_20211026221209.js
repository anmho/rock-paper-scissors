const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});



const moves = {
  0: "rock",
  1: "paper",
  2: "scissor",
}

function computerPlay() {
  // generate random number from 1-3
  const move = Math.floor(Math.random() * 3);

  // return rock, paper or scissors
  return moves[move];
}

function playRound(playerSelection, computerSelection) {

  console.log(playerSelection);
}

function getMove() {
  document.getElementById('move');
  
  for move in moves


}

const playerSelection = readline.question('Select a move: ');
playRound(playerSelection, 0);