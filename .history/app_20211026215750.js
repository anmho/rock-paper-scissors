// const moves = {
//   ROCK: 0,
//   PAPER: 1,
//   SCISSORS: 2,
// }

const moves = {
  1: "rock",
  2: "paper",
  3: "scissor",
}

function computerPlay() {
  // generate random number from 1-3
  const move = Math.floor(Math.random() * 3) + 1;

  // return rock, paper or scissors
  return moves[move];
}


for (let i = 0; i < )
console.log(computerPlay());