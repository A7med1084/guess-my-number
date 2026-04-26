"use strict";

// select elements
const button = document.querySelector(".btn");
const input = document.querySelector(".num");
const restart = document.querySelector(".restart");
const hint = document.querySelector(".hint");
const score = document.querySelector(".score");
const body = document.querySelector("body");
const correctNumber = document.querySelector(".number");
const bestScore = document.querySelector(".highscore");

// variables
let number = Math.trunc(Math.random() * 100) + 1;
let count = 20;
let highscore = 0;

input.focus();

// end game
const endGame = function () {
  button.disabled = true;
  input.disabled = true;
  button.style.cursor = "not-allowed";
};
// reset input
const resetInput = function () {
  input.disabled = false;
  input.value = "";
  input.focus();
};
// restart button
restart.addEventListener("click", function () {
  number = Math.trunc(Math.random() * 100) + 1;
  count = 20;
  resetInput();
  button.disabled = false;
  button.style.cursor = "pointer";
  hint.textContent = "Start guessing...";
  score.textContent = count;
  body.style.backgroundColor = "#222";
  correctNumber.textContent = "?";
});
// clicked button
button.addEventListener("click", function () {
  const guess = Number(input.value);
  if (!guess || guess < 1 || guess > 100) {
    hint.textContent = "Please enter a number between 1 and 100!";
    input.value = "";
  } else if (guess === number) {
    correctNumber.textContent = guess;
    hint.textContent = "Congratulations! You guessed the number!";
    if (highscore < count) {
      highscore = count;
      bestScore.textContent = highscore;
    }
    body.style.backgroundColor = "#60b347";
    endGame();
  } else {
    hint.textContent = guess > number ? "Too high!" : "Too low!";
    count--;
    if (count <= 0) {
      hint.textContent = "Game over! You've used all your attempts.";
      // Disable the button to prevent further guesses
      input.value = "";
      endGame();
      body.style.backgroundColor = "red";
      correctNumber.textContent = number;
    }
    // Update score display
    score.textContent = count;
  }
});
