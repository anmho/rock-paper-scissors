const moves = {
  0: "rock",
  1: "paper",
  2: "scissor",
}

function getPlayerMove() {
  const playerMove = document.getElementById('enterMove').value.toLowerCase();

  if (playerMove == "")
    alert("Name must be filled out");
  else if (!Object.values(moves).includes(playerMove))
    alert("Sorry that isn't a valid move");
  else {
    return playerMove;
  }
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
  let computerMove = computerPlay();
  console.log(playerMove, computerMove);

  const gameResult = document.createElement()
  document.getElementById('game').appendChild()

  if (winConditions[playerMove] === computerMove)
    alert('You win');
  else if (playerMove === computerMove)
    alert('You tied');
  else
    alert('You lose');
}

document.getElementById('playButton').addEventListener('click', playRound);