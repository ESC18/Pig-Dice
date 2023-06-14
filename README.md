# Pig-Dice

## Technologies Used

## Description

## Setup

## Known Bugs 

## License

<!-- PROGRAM STRUCTURE -->

-- game: Pig Dice
- On a player's turn:
    1. Roll a die => rollDie()
    2. Add number from die to score => updateScore()
      If number is 1, add nothing to score and switch to other player
      If number is 2+, add number to score
    3. Repeat step 1 or switch players
    - End of turn: Check a player's score
      If player's score is 100+, announce player as winner

-- UI structure
- player1: total score
- player2: total score
- die
- roll button
- hold button

-- UI logic
- Display die
- Update player's total score
- Announce winner

-- game memory

Controller
Purpose: An object that keeps track of the game and players
- {Player} active player
- {Player} players
- rollDie()
- holdDie()

Player
Purpose: An object that keeps track of a player's current score and their roll history
- {Number} score

<!-- TESTS -->

Describe: rollDie()

Purpse: Roll a die
- generate a random number
- return the random number

Test: It will create a random number.
Code: rollDie();
Expected Output: A number between 1 and 6.

Describe: updateScore()

Purpose: Update score
- get current score
- add number from die to current score
- report|return current score

What if the array is [] => [*]
What if the array has [1] => [1, *]
What if the array has [1, 2] => [1, 2, *]
Test: 
Code:
    'hello'
    console.log('hello')
Expected result: hello

Test:

Test: 

Test: It will save rollDie() output in an empty array.
Code: let newArray = [];
console.log(newArray.length)
Expected result:








