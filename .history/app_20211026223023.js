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
  else if (!Object.values(moves).includes(playerMove))
    alert("Sorry that isn't a valid move");
  else
    console.log(playerMove);
  // for (let move in moves) {

  // }


}


