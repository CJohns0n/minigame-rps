let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const generateTarget = function() {
  return Math.floor(Math.random() * 10);
};

// Determines which player (human or computer) wins based on which guess is closest to the target. If both players are tied, the human user should win.
const compareGuesses = function(humanGuess, cpuGuess, targetGuess) {
  const humanDifference = Math.abs(targetGuess - humanGuess)
  const computerDifference = Math.abs(targetGuess - cpuGuess)
  return humanDifference <= computerDifference;
};
// This function will be used to correctly increase the winner’s score after each round.
const updateScore = function(winner) {
  if (winner === 'human') {
    humanScore++;
  } else if (winner === 'computer') {
    computerScore++;
  }
};
// This function will be used to update the round number after each round.
const advanceRound = function() {
  return currentRoundNumber++;
};