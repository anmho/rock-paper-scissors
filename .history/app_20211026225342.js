const moves = {
  0: "rock",
  1: "paper",
  2: "scissor",
}

function getPlayerMove() {
  const playerMove = document.getElementById('enterMove').value.toLowerCase();

  if (playerMove == "")
    alert("Name must be filled out");
  
  else if (!Object.values(moves).includes(playerMove)) {
    alert("Sorry that isn't a valid move");
  }
  else {
    return playerMove;
  }
  this.value = "";
}

let winConditions = {
  "rock": "scissors",
  "paper": "rock",
  "scissors": "paper",
}

function computerPlay() {
  const move = Math.floor(Math.random() * 3); // generate random number from 1-3  
  return moves[move]; // return rock, paper or scissors
}

function playRound() {
  let playerMove = getPlayerMove();
  if (!playerMove)
    return;
  let computerMove = computerPlay();
  console.log(playerMove, computerMove);

  let result = "";
  if (winConditions[playerMove] === computerMove)
    result = 'You win';
  else if (playerMove === computerMove)
    result = 'You tied';
  else
    result = 'You lose';

  const recap = document.createElement('p');
  recap.innerHTML = `${result} -> You: ${playerMove}, CPU: ${computerMove}`;
  document.getElementById('results').appendChild(recap);
}

document.getElementById('playButton').addEventListener('click', playRound);