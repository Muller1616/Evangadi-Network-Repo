//Q1. Given an array of numbers, write a function that prints in the console another array
// which contains all the even numbers in the original array, which also have even indexes only.
// ○ Test 1: getOnlyEvens([1, 2, 3, 6, 4, 8]) prints [ 4]
// ○ Test 2: getOnlyEvens([0, 1, 2, 3, 4]) prints [0, 2, 4]

// pseudocode
// 1	Define a function getOnlyEvens that takes an array arr as input
// 2	Initialize an empty array evenarr to store results
// 3	Loop over each index i from 0 to the length of arr - 1
// 4	Check if both the element arr[i] is even and the index i is even
// 5	If both conditions are true, add arr[i] to evenarr
// 6	After the loop ends, return the evenarr array
// 7	Call the function with an array and display the result

// const getOnlyEvens = (arr) => {
//   let evenarr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 0 && i % 2 == 0) {
//       evenarr.push(arr[i]);
//     }
//   }
//   return evenarr;
// };

// console.log(getOnlyEvens([1, 2, 30, 4, 20, 6, 7, 8, 12, 10]));

// optimized approach

// const getOnlyEvens = (arr) => {
//   let incindex = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0 && i % 2 === 0) {
//       arr[incindex] = arr[i];
//       incindex++;
//     }
//   }

//   arr.length = incindex;
//   return arr;
// };
// console.log(getOnlyEvens([1, 2, 3, 6, 4, 8]));
// console.log(getOnlyEvens([0, 1, 2, 3, 4]));

// Q2.
// Create a function that takes a two-digit number as an parameter and prints "Ok" in
// the console if the given string is greater than its reversed digit version. If not, the
// function will print "Not ok"
// ○ Test 1: reverseCompare(72) prints "ok" because 72 > 27
// ○ reverseCompare(23) prints "Not ok", because 23 is not greater than 32

// const reverseCompare = (num) => {
//   let reversed = parseInt(num.toString().split("").reverse().join(""));
//   if (num > reversed) {
//     return "Ok";
//   }
//   return "Not Ok";
// };

// console.log(reverseCompare(23));
// console.log(reverseCompare(21));

// pseudocode
// 1	Define a function reverseCompare that takes a two-digit number num as input
// 2	Find the first digit fd by dividing num by 10 and taking the floor
// 3	Find the second digit sd by taking num modulo 10
// 4	Reverse the number: reversed = sd * 10 + fd
// 5	Compare the original number num with reversed
// 6	If num is greater than reversed, return "Ok"
// 7	Otherwise, return "Not Ok"
// 8	Call the function with a numbe and display the result

// or more optimized approach

const reverseCompare = (num) => {
  let fd = Math.floor(num / 10); 
  let sd = num % 10; sd=1
  let reversed = sd * 10 + fd; 

  if (num > reversed) {
    return "Ok";
  }
  return "Not Ok";
};
console.log(reverseCompare(23));
console.log(reverseCompare(21));

// or if the digit is not limited means it may be more than 2 digits

// const reverseCompare = (num) => {
//   let original = num;
//   let reversed = 0;

//   while (num > 0) {
//     let digit = num % 10;
//     reversed = reversed * 10 + digit;
//     num = Math.floor(num / 10);
//   }

//   if (original > reversed) {
//     return "Ok";
//   }
//   return "Not Ok";
// };

// console.log(reverseCompare(23));
// console.log(reverseCompare(21));
// console.log(reverseCompare(321));
// console.log(reverseCompare(45213574579));

// Q3.
// Write a function that takes a positive integer and returns the factorial of the number.
// Notes: The factorial of 0 is 1. Ex: factorial seven is : 1 × 2 × 3 × 4 × 5 × 6 × 7. The
// factorial of any positive integer x is x * (x - 1) * (x - 2) * . . . . . . * 1 (ex: factorial of 4 is
// 4 * 3 * 2 * 1 = 24)
// ○ Test 1: returnFactorial(5) outputs 120
// ○ Test 2: returnFactorial(6) outputs 720
// ○ Test 3: returnFactorial(0) outputs 1

// const fact = (n) => {
//   if (isNaN(n) || n < 0) {
//     return "the input is not a number or is negative, please take a valid number"
//   }
//   n = Number(n)

//   if (n === 0 || n === 1) {
//     return 1
//   }
//   return n * fact(n - 1)
// }

// console.log(fact("muller"))
// console.log(fact("55"))
// console.log(fact(-5))
// console.log(fact(5))

// optimized approach the space complexity of O(1)

// // pseudocode
// 1	Define a function fact that takes input n
// 2	Check if n is not a number or n is negative
// 3	If yes, return "the input is not a number or is negative, please take a valid number"
// 4	Convert n to a number (if it’s a string)
// 5	Initialize res = 1 to store the factorial result
// 6	Loop i from 2 to n
// 7	Multiply res by i in each iteration (res *= i)
// 8	After the loop, return res
// 9	Call the function with different inputs and display the results

// const fact = (n) => {
//   if (isNaN(n) || n < 0) {
//     return "the input is not a number or is negative, please take a valid number";
//   }
//   n = Number(n);
//   let res = 1;
//   for (let i = 2; i <= n; i++) {
//     res *= i;
//   }
//   return res;
// };
// console.log(fact("muller"));
// console.log(fact("55"));
// console.log(fact(-5));
// console.log(fact(5));

// Q4.

// A Meera array is defined to be an array containing only numbers as its elemements and for
// all n values in the array, the value n*2 is not in the array. So [3, 5, -2] is a Meera array
// because 3*2, 5*2 or 2*2 are not in the array. But [8, 3, 4] is not a Meera array because
// 2*4=8 and both 4 and 8 are elemements found in the array. Write a function that takes an
// array of numbered elemements and prints “I am a Meera array” in the console if its array
// does NOT contain n and also n*2 as value. Otherwise, the function prints “I am NOT a
// Meera array”
// ○ Test 1: checkMeera([10, 4, 0, 5]) outputs “I am NOT a Meera array” because 5 *
// 2 is 10
// ○ Test 2: checkMeera([7, 4, 9]) outputs “I am a Meera array”
// ○ Test 1: checkMeera([1, -6, 4, -3]) outputs “I am NOT a Meera array” because -3
// *2 is -6

// const checkMeera = (arr) => {
//   if (!Array.isArray(arr)) {
//     return "Please use an array as input";
//   }

//   for (let elem of arr) {
//     if (typeof elem !== "number" || isNaN(elem)) {
//       return "Please use only an array of numbers, all elements must be numbers";
//     }
//   }
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[j] === arr[i] * 2) {
//         return "I am NOT a Meera array";
//       }
//     }
//   }

//   return "I am a Meera array";
// };

// console.log(checkMeera([10, 4, 0, 5]));
// console.log(checkMeera([7, 4, 9]));
// console.log(checkMeera([1, -6, 4, -3]));
// console.log(checkMeera([3, 5, "2"]));
// console.log(checkMeera("muller"));

// optimized approach

// pseudocode

// 1	Define a function checkMeera that takes an input arr
// 2	Check if arr is not an array → if true, return "please use an array as input"
// 3	Loop through each element elem in arr
// 4	If elem is not a number or is NaN, return "please use only array of numbers, all elements must be numbers"
// 5	Create a set from the array (set = new Set(arr)) for fast look
// 6	Loop through each number n in arr
// 7	If set contains n * 2, return "I am NOT a Meera array"
// 8	If the loop finishes without finding such a pair, return "I am a Meera array"
// 9	Call the function with different test cases and display the result

// const checkMeera = (arr) => {
//   if (!Array.isArray(arr)) {
//     return "please use  an array as input";
//   }
//   for (let elem of arr) {
//     if (typeof elem !== "number" || isNaN(elem)) {
//       return "please use only array of numbers, all elemements must be numbers";
//     }
//   }
//   const set = new Set(arr);
//   for (let n of arr) {
//     if (set.has(n * 2)) {
//       return "I am NOT a Meera array";
//     }
//   }
//   return "I am a Meera array";
// };

// console.log(checkMeera([3, 5, "2"]));
// console.log(checkMeera([10, 4, 0, 5]));
// console.log(checkMeera([7, 4, 9]));
// console.log(checkMeera([1, -6, 4, -3]));
// console.log(checkMeera("muller"));

// Q5.

// ● Define a Dual array to be an array where every value occurs exactly twice. For example,
// {1, 2, 1, 3, 3, 2} is a dual array.The following arrays are not Dual arrays {2, 5, 2, 5, 5} (5
// occurs three times instead of two times) {3, 1, 1, 2, 2} (3 occurs once instead of two
// times) Write a function named isDual that returns 1 if its array argument is a Dual array.
// Otherwise it returns 0.
// ○ Test 1: isDual([3, 2, 3, 1, 1, 2]) outputs 1
// ○ Test 2: isDual([1, 2, 3, 4]) outputs 0
// ○ Test 3: isDual([1, 2, 2, 2, 3, 3]) outputs 0

// const isDual = (arr) => {
//   if (!Array.isArray(arr)) {
//     return "Please use an array as input";
//   }
//   for (let elem of arr) {
//     if (typeof elem !== "number" || isNaN(elem)) {
//       return "array must contain  numbers";
//     }
//   }

//   for (let i = 0; i < arr.length; i++) {
//     let count = 0;
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[i] === arr[j]) {
//         count++;
//       }
//     }
//     if (count !== 2) {
//       return 0;
//     }
//   }

//   return 1;
// };

// console.log(isDual([1, 2, 1, 3, 3, 2]));
// console.log(isDual([2, 5, 2, 5, 5]));
// console.log(isDual([3, 1, 1, 2, 2]));
// console.log(isDual([1, 2, "3", 4]));
// console.log(isDual("muller"));

// optimized approach

// pseudocode
// 1	Define a function isDual that takes an input arr
// 2	Check if arr is not an array → if true, return "please use an array as input"
// 3	Loop through each element elem in arr
// 4	If elem is not a number or is NaN, return "array must contain numbers"
// 5	Create an empty frequency object fr = {}
// 6	Loop through each number num in arr
// 7	If fr[num] is undefined, set fr[num] = 1; else increment fr[num] by 1
// 8	Loop through each key in fr
// 9	If fr[key] is not equal to 2, return 0 (not a dual array)
// 10	If the loop finishes without finding such a key, return 1 (it is a dual array)
// 11	Call the function with different test cases and display the result

// const isDual = (arr) => {
//   if (!Array.isArray(arr)) {
//     return "Please use an array as input";
//   }
//   for (let elem of arr) {
//     if (typeof elem !== "number" || isNaN(elem)) {
//       return "array must contain  numbers";
//     }
//   }

//   const fr = {};

//   for (let num of arr) {
//     if (fr[num] === undefined) {
//       fr[num] = 1;
//     } else {
//       fr[num] += 1;
//     }
//   }

//   for (let key in fr) {
//     if (fr[key] !== 2) {
//       return 0;
//     }
//   }

//   return 1;
// };

// console.log(isDual([3, 2, 3, 1, 1, 2]));
// console.log(isDual([1, 2, 3, 4]));
// console.log(isDual([1, 2, 2, 2, 3, 3]));
// console.log(isDual([1, 2, "3", 4]));
// console.log(isDual("muller"));

// Q6.
// Write a function that takes the number of seconds and returns the digital format clock
// time as a string. Time should be counted from 00:00:00.
// ○ Examples: digitalClock(5025) as "01:23:45" 5025 seconds is 1 hour, 23 mins, 45
// secs.
// ■ digitalClock(61201) as "17:00:01" No AM/PM. 24h format.
// ■ digitalClock(87000) as "00:10:00" It's 00:10 next day

// pseudocode
// 1	Define a function digitalClock that takes input seconds
// 2	Check if seconds is not a number or is negative → if true, return "Please use a valid positive number or only numbers not other value, coz the seconds must be a positive number"
// 3	Convert seconds to a number (if it’s a string)
// 4	Calculate hours hrs = floor((seconds / 3600) % 24)
// 5	Calculate minutes mins = floor((seconds % 3600) / 60)
// 6	Calculate seconds secs = seconds % 60
// 7	Format hrs, mins, secs to always have two digits (add leading zero if < 10)
// 8	Return the formatted string "HH:MM:SS"
// 9	Call the function with different test cases and display the result

// const digitalClock = (seconds) => {
//   if (isNaN(seconds) || seconds < 0) {
//     return "Please use a valid positive number or only numers not other value , coz the seconds must be a positive number";
//   }
//   seconds = Number(seconds);

//   let hrs = Math.floor(seconds / 3600) % 24;
//   let mins = Math.floor((seconds % 3600) / 60);
//   let secs = seconds % 60;
//   let dhrs = hrs < 10 ? "0" + hrs : "" + hrs;
//   let dmins = mins < 10 ? "0" + mins : "" + mins;
//   let dsecs = secs < 10 ? "0" + secs : "" + secs;
//   return dhrs + ":" + dmins + ":" + dsecs;
// };
// console.log(digitalClock(5025));
// console.log(digitalClock(61201))
// console.log(digitalClock(87000))
// console.log(digitalClock(-500))
// console.log(digitalClock("muller"))
