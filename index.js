// Nav Links Styles
const navLinks = document.querySelector(".navLinks");
const links = document.querySelector("#links");

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
