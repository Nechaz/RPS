"use strict";

// * Pseudo code
// *First of all I need to make a function that returns computer choice.
// * After that the code need to compare user choice and computer choice. And return the result back.
//*  And for the final part, need to make the possibility to play BO5

let randomNumber = Math.floor(Math.random() * 3 + 1);
var computerChoice;
var playerChoice = prompt("Choose Rock Paper Scissors").toLowerCase();

function computer(number) {
  if (number === 1) {
    computerChoice = "paper";
  } else if (number === 2) {
    computerChoice = "scissors";
  } else {
    computerChoice = "rock";
  }
}
console.log(computer(randomNumber));
console.log("Computer Choice:" + computerChoice);
console.log("Player Choice:" + playerChoice);

function round(player, computer) {
  // * If player choice its better when computer choice when player win. So i need to write if else condition for every case
  if (player === computer) {
    console.log("Tie");
  } else if (
    (player === "rock" && computer === "scissors") ||
    (player === "paper" && computer === "rock") ||
    (player === "scissors" && computer === "paper")
  ) {
    console.log("Player Won");
  } else if (
    (computer === "rock" && player === "scissors") ||
    (computer === "paper" && player === "rock") ||
    (computer === "scissors" && player === "paper")
  ) {
    console.log("Computer Won");
  } else {
    console.log("Bug");
  }
}

console.log(round(playerChoice, computerChoice));
// player = player.toLowerCase();
// computer = computer.toLowerCase();
