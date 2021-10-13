// Nav Links Styles
const navLinks = document.querySelector(".navLinks ul");
const toggle = document.querySelector(".toggle");

toggle.addEventListener("click", function (e) {
  if (navLinks.style.display === "none") navLinks.style.display = "flex";
  else navLinks.style.display = "none";
});

// Section TTT
const statusDisplay = document.querySelector(".game-status");

let gameActive = true;

let currentPlayer = "X";

let gameState = ["", "", "", "", "", "", "", "", ""];

const winningMessage = () => `Player ${currentPlayer} has won!`;
const drawMessage = () => `Game ended in a draw`;
const currentPlayerTurn = () => `It's ${currentPlayer}'s turn'`;

statusDisplay.innerHTML = currentPlayerTurn();

function handleCellPlayer(clickedCell, clickedCellIndex) {
  gameState[clickedCellIndex] = currentPlayer;
  clickedCell.innerHTML = currentPlayer;
}

function handlePlayerChange() {
  currentPlayer = currentPlayer === "X" ? "O" : "X";
  statusDisplay.innerHTML = currentPlayerTurn();
}

const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function handleResultValidation() {
  let roundWon = false;
  for (let i = 0; i <= 7; i++) {
    const winCondition = winningConditions[i];
    let a = gameState[winCondition[0]];
    let b = gameState[winCondition[1]];
    let c = gameState[winCondition[2]];

    if (a === "" || b === "" || c === "") {
      continue;
    }
    if (a === b && b === c) {
      roundWon = true;
      break;
    }
  }
  if (roundWon) {
    statusDisplay.innerHTML = winningMessage();
    gameActive = false;
    return;
  }

  let roundDraw = !gameState.includes("");
  if (roundDraw) {
    statusDisplay.innerHTML = drawMessage();
    gameActive = false;
    return;
  }

  handlePlayerChange();
}

function handleCellClick(clickedCellEvent) {
  const clickedCell = clickedCellEvent.target;

  const clickedCellIndex = parseInt(
    clickedCell.getAttribute("data-cell-index")
  );

  if (gameState[clickedCellIndex] !== "" || !gameActive) {
    return;
  }

  handleCellPlayer(clickedCell, clickedCellIndex);
  handleResultValidation();
}

function handleRestartGame() {
  gameActive = true;
  currentPlayer = "X";
  gameState = ["", "", "", "", "", "", "", "", ""];
  statusDisplay.innerHTML = currentPlayerTurn();
  document.querySelectorAll(".cell").forEach((cell) => (cell.innerHTML = ""));
}

document
  .querySelectorAll(".cell")
  .forEach((cell) => cell.addEventListener("click", handleCellClick));
document
  .querySelector(".game-restart")
  .addEventListener("click", handleRestartGame);

// Hour
// If hour is between 6am and 12pm: Good Morning!
// If it is between 12pm and 6am: Good Afternoon!
// Otherwise: Good Evening!

// let hour = 20;

// if (hour >= 6 && hour < 12) console.log("Good Morning!");
// else if (hour >= 12 && hour < 18) console.log("Good Afternoon!");
// else console.log("Good Evening!");

// let role = "guest";
// switch (role) {
//   case "guest":
//     console.log("Guest User");
//     break;

//   case "moderator":
//     console.log("Moderator User");
//     break;

//   default:
//     console.log("Unknown User");
// }

// // Or

// if (role === "guest") console.log("Guest User");
// else if (role === "moderator") console.log("Moderator User");
// else console.log("Unknown User");

// For Loops
// for (let i = 1; i <= 5; i++) {
//   if (i % 2 !== 0) console.log(i);
// }

// While Loops
// let i = 0;
// while (i <= 5) {
//   if (i % 2 !== 0) console.log(i);
//   i++;
// }

// Do...While Loops
// let i = 9;
// do {
//   if (i % 2 !== 0) console.log(i);
//   i++;
// } while (i <= 5);

// Infinite Loops
// let i = 0;
// while (i < 5) {
//   console.log(i);
//   i++;
// }

// For..In Loops
// const person = {
//   name: "Mosh",
//   age: 30,
// };
// for (let key in person) console.log(key, person[key]);

// const colors = ["red", "green", "blue"];

// for (let index in colors) console.log(index, colors[index]);

//For...Of Loops
// const colors = ["red", "green", "blue"];

// for (let color of colors) console.log(color);

// Breaks and Continue
// let i = 0;
// while (i <= 10) {
//   if (i === 5) break;
//   if (i % 2 === 0) {
//     i++;
//     continue;
//   }

//   console.log(i);
//   i++;
// }

// Functions that takes two numbers
// let number = max(5, 10);
// console.log(number);

// function max(a, b) {
//   //   if (a > b) return a;
//   //   return b;
//   return a > b ? a : b;
// }

// Excercise 2
// console.log(isLandScape(300, 500));

// function isLandScape(width, height) {
//   return width > height;
// }

// Exercise 3, Popularly known for an Interview Question
// Divisible by 3 => fizz
// Divisible by 5 => buzz
// Divisible by both 3 and 5 => fizzBuzz
// Not divisible by either 3 or 5 => same input
// Not a number => Not a number

// const output = fizzBuzz(false);
// console.log(output);

// function fizzBuzz(input) {
//   if (typeof input !== "number") return "Not a number ";

//   if (input % 3 === 0 && input % 5 === 0) return "fizzBuzz";

//   if (input % 3 === 0) return "Fizz";

//   if (input % 5 === 0) return "Buzz";

//   return input;
// }

// Function Speed Limit
// checkSpeed(72);

// function checkSpeed(speed) {
//   const speedLimit = 70;
//   const kmPerPoint = 5;

//   if (speed <= speedLimit + kmPerPoint) console.log("Ok");
//   else {
//     let points = Math.floor((speed - speedLimit) / kmPerPoint);
//     if (points >= 12) console.log("License Suspended");
//     else console.log("Points", points);
//   }
// }

// Exercise Show Number
// showNumbers(10);

// function showNumbers(limit) {
//   for (let i = 0; i <= limit; i++) {
//     const message = i % 2 === 0 ? "Even" : "ODD";
//     console.log(i, message);
//   }
// }

// Interview Question2 (A nested loop)
// showStars(5);

// function showStars(rows) {
//   for (let row = 1; row <= rows; row++) {
//     let pattern = "";

//     for (let i = 0; i < row; i++) pattern += "*";
//     console.log(pattern);
//   }
// }

// Prime Number of 20
// showPrimes(20);

// function showPrimes(limit) {
//   for (let number = 2; number <= limit; number++) {
//     let isPrime = true;
//     for (let factor = 2; factor < number; factor++) {
//       if (number % factor === 0) {
//         isPrime = false;
//         break;
//       }
//     }

//     if (isPrime) console.log(number);
//   }
// }

// Date Object
// const now = new Date();
// const date1 = new Date("May 11 2018 9:00");
// const date2 = new Date(2018, 4, 11, 9);

// now.setFullYear(2017);
