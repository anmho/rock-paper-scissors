const moves = {
  0: "rock",
  1: "paper",
  2: "scissor",
}



const playButton = document.getElementById('playButton');
playButton.addEventListener('click', getMove);

function getMove() {
  const playerMove = document.getElementById('enterMove').value.toLowerCase();

  if (playerMove == "")
    alert("Name must be filled out");
  else if (!Object.values(moves).includes(playerMove))
    alert("Sorry that isn't a valid move");
  else {
    console.log(playerMove);
  }
}


