let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

function generateTarget() {
  return Math.floor(Math.random() * 10);
};
function compareGuesses (humanGuess, computerGuess, targetGuess) {
  const humanDifference = Math.abs(targetGuess - humanGuess);
  const computerDifference = Math.abs(targetGuess - computerGuess);
  if(humanDifference <= computerDifference){
    return true;
  } else{
    return false;
  }
};
function updateScore (winner) {
  if (winner == 'human') {
    humanScore++;
  } else if (winner == 'computer') {
    computerScore++;
  }
};
function advanceRound() {
  currentRoundNumber++;
};

