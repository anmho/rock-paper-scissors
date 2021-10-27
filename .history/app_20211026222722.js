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

const playButton = document.getElementById('playButton');

playButton.addEventListener('click', getMove);

function getMove() {
  const playerMove = document.getElementById('enterMove').value;

  if (playerMove == "")
    alert("Name must be filled out");

  for (let move in moves)
    if (playerMove !)
  
  console.log(playerMove);



  // for (let move in moves) {

  // }


}


