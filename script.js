"use strict";

const button = document.querySelector(".btn");
const input = document.querySelector(".num");
const restart = document.querySelector(".restart");

let number = Math.trunc(Math.random() * 20) + 1;
let count = 20;

restart.addEventListener("click", function () {
  number = Math.trunc(Math.random() * 20) + 1;
  count = 20;
  button.disabled = false;
  document.querySelector(".hint").textContent = "Start guessing...";
  document.querySelector(".score").textContent = count;
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").textContent = "?";
  input.value = "";
});
button.addEventListener("click", function () {
  const guess = Number(input.value);
  if (guess === 0 || guess < 1 || guess > 20) {
    alert("Please enter a number between 1 and 20");
  } else if (guess === number) {
    document.querySelector(".number").textContent = guess;
    document.querySelector(".hint").textContent =
      "Congratulations! You guessed the number!";
    document.querySelector(".highscore").textContent = count;
    document.querySelector("body").style.backgroundColor = "#60b347";
    button.disabled = true;
  } else if (guess > number) {
    document.querySelector(".hint").textContent = "Too high!";
    count--;
    if (count === 0) {
      document.querySelector(".hint").textContent =
        "Game over! You've used all your attempts.";
      button.disabled = true;
    }
    document.querySelector(".score").textContent = count;
  } else if (guess < number) {
    document.querySelector(".hint").textContent = "Too low!";
    count--;
    if (count === 0) {
      document.querySelector(".hint").textContent =
        "Game over! You've used all your attempts.";
      button.disabled = true;
    }
    document.querySelector(".score").textContent = count;
  }
});
