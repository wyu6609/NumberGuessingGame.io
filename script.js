'use strict';
//  guess number between 1 - 20
//      1. randomNumber = randomly generate number by pc
//      2. input = user inputs value
//             a) ensure input is in range of 1-20 -
//                  a(1) if input is out of range --> 'number is out of range, please enter number between 1-20;
//                    a(2) if input lower than randomNumber --> 'Toolow!'
//                     a(3) if input higher than randomNumber --> 'Toohigh!'
//                      a(4) input =
//  calculates a score
//      1. score starts at 20
//      2. every input attempt decreases score by 1 unit

//  logs high score
//      1. logs first first highscore let highScore
//        2. if Score < highScore , then highScore = highScore
//          if score > highscore, then highscore = score

// again button - resets everything except high score

// console.log(document.querySelector('.message'));

// // create random whole number between 1-20:
// const randomNumber = Math.round(Math.random() * 20);
// console.log(randomNumber);

// // request user to input a number:
// let guess = Number(prompt('Guess a number between 1-20: '));

// //create game function with top conditions

// const game = function () {
//   if (randomNumber == guess) {
//     console.log('You guessed the correct number!');
//   } else if (randomNumber >= 1 && randomNumber <= 20 && randomNumber > guess) {
//     console.log('too low! try again');
//   } else if (randomNumber >= 1 && randomNumber <= 20 && randomNumber < guess) {
//     console.log('too high! try again');
//   } else console.log('please choose a number between 1-20;');
// };

// document.querySelector('.guess').textContent = '';
// document.querySelector('.message').textContent = ' Correct Number! ';
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
let randomNumber = Math.ceil(Math.random() * 20);
console.log(randomNumber);
let score = 20;
let highscore = 0;

document.querySelector('.again').addEventListener('click', function () {
  randomNumber = Math.ceil(Math.random() * 20);
  console.log(`random Number = ${randomNumber}`);

  console.log('again pressed');
  score = 20;
  document.querySelector('.message').textContent = 'start guessing';
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
});

document.querySelector('.check').addEventListener('click', function () {
  console.log('check! pressed');

  let input = document.querySelector('.guess').value;

  //guess is too low
  if (input >= 1 && input <= 20 && input < randomNumber) {
    console.log(randomNumber);

    document.querySelector('.message').textContent = 'go higher ☝';
    score = score - 1;
    document.querySelector('.score').textContent = score;
    // guess is too high
  } else if (input >= 1 && input <= 20 && input > randomNumber) {
    document.querySelector('.message').textContent = 'go lower👇';
    score = score - 1;
    document.querySelector('.score').textContent = score;
    // guess is correct
  } else if (input == randomNumber) {
    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.message').textContent = 'RIGHT ON THE MONEY 🎯';
    document.querySelector('.number').textContent = randomNumber;

    if (highscore < score) {
      let highscore = score;
      document.querySelector('.highscore').textContent = score;
    }

    //guess is out range
  } else {
    document.querySelector('.message').textContent =
      'PLEASE CHOOSE A VALUE IN THE SPECIFIED RANGE ❌';
  }

  if (score <= 0) {
    document.querySelector('.message').textContent = 'sorry you have lost';
    document.querySelector('.score').textContent = '0';
  }
});
