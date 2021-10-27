// const moves = {
//   ROCK: 0,
//   PAPER: 1,
//   SCISSORS: 2,
// }

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




