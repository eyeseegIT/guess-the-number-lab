const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  prevGuesses: [],
  play: function() {
    this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
    do {
      let typedNum = prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}`)
      playerGuess = parseInt(typedNum)
      this.getGuess() 
    } while (playerGuess !== this.secretNum)
  },
  getGuess: function() {
    if (isNaN(playerGuess) || playerGuess < this.smallestNum || playerGuess > this.biggestNum) {
      alert(`Please enter a number between ${this.smallestNum} and ${this.biggestNum}.`)
    } else {
        if (playerGuess < this.secretNum) {
          this.prevGuesses.push(playerGuess)
          // console.log(this.prevGuesses)
          alert(`Your guess is too low. Your previous guesses include: ${this.prevGuesses}.`)
        } else if (playerGuess > this.secretNum) {
          this.prevGuesses.push(playerGuess)
          // console.log(this.prevGuesses)
          alert(`Your guess is too high. Your previous guesses include: ${this.prevGuesses}.`)
        } else {
          alert(`Congrats! You guessed the number in ${this.prevGuesses.length } guesses!`)
        }
      } 
  } 
}

game.play()

