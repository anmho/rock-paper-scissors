const moves = {
  0: "rock",
  1: "paper",
  2: "scissor",
}

function getMove() {
  const playerMove = document.getElementById('enterMove').value.toLowerCase();

  if (playerMove == "")
    alert("Name must be filled out");
  else if (!Object.values(moves).includes(playerMove))
    alert("Sorry that isn't a valid move");
  else {
    return (playerMove);
  }
}

function computerPlay() {  
  const move = Math.floor(Math.random() * 3); // generate random number from 1-3  
  return moves[move]; // return rock, paper or scissors
}

function playRound() {
  let playerMove = getMove();
  let computerMove = computerPlay();


  console.log(playerSelection);
}



const playButton = document.getElementById('playButton');

playButton.addEventListener('click', playRound);