function guessingGame(guess) {
  const num = Math.floor(Math.random() * 100);
  let won;
  let count = 0;
  let game = false;

  return function game(guess) {
    if (!won && guess === num) {
      won = true;
      count++;
      return `You win! You found ${num} in ${count} guesses.`;
    } else if (guess < num) {
      count++;
      return `${guess} is too low!`;
    } else if (guess > num) {
      count++;
      return `${guess} is too high!`;
    } else {
      return "The game is over, you already won!";
    }
  };
}

module.exports = { guessingGame };
