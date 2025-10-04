//1. Write a function that prints the first 10 integers on the console starting from the number 1 using
// the JavaScript for loop.

const First10Integers = () => {
  for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
};
First10Integers();

//2. Write a function that takes a single number as an argument and prints the next 5 numbers in the
// console. Note: each output should be displayed on a new line.
// ○ Test case: If you give 7 to the function, output should look like this:
// 8
// 9
// 10
// 11
// 12
const Next5Numbers = (num) => {
  for (let i = num + 1; i <= num + 5; i++) {
    console.log(i);
  }
};
Next5Numbers(10);

//3. Write a function that takes a single number and prints the sum of the next 10 numbers after the
// given number.
// ○ Test case: If you give 7 to the function, output should be: 125 - because (8 + 9 + 10+
// 11+ 12+ 13+ 14+ 15+ 16+ 17 = 125)

const SumofNext10Num = (num) => {
  let sum = 0;
  for (let i = num + 1; i <= num + 10; i++) {
    sum += i;
  }
  console.log(sum);
};
SumofNext10Num(2);

//4. Write a function that takes an array as an argument and prints every element of the array on the
// console.
// ○ Test case: given the array a = [1, "Hello", 8, 44], output should look like this:
// 1
// Hello
// 8
// 44

const PrintArrayElements = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
};
PrintArrayElements([1, "Hello", 8, 44]);

//5. Write a function that takes an array as an argument and prints the total number of elements
// found in the array. Hint: use a property of the Array object to solve this question.
// ○ Test case 1: Given the array a = [1, "Hello", 8, 44], output should be: 4
// ○ Test case 2: Given the array a = ["world", 13], output should be: 2
const CountArrayElements = (arr) => {
  console.log(arr.length);
};
CountArrayElements([1, "Hello", 8, 44]);
CountArrayElements(["world", 13]);

//6. Write a function that takes an array of numbers as a parameter and logs in the console the sum of
// all the numbers in the array.
// ○ Test case 1: If you give this array, [5, 6, 99, 8, 76, 4, 68, 44], to the function, output
// should be: 310 because 5 + 6 + 99 + 8 + 76 + 4 + 68 + 44
// ○ Test case 2: If you give this array, [3, 0], to the function, output should be: 3 because
// 3 + 0

const SumOfArrayNumbers = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log(sum);
};
SumOfArrayNumbers([5, 6, 99, 8, 76, 4, 68, 44]);
SumOfArrayNumbers([3, 0]);

//7. Write a function that takes an array of all numbers as a parameter, subtracts the total sum of all
// odd numbers of the array from the total sum of all even numbers and logs the result in the
// console.
// ○ Test case: If you give these array, [5, 6, 99, 8, 76, 4, 68, 44], to the function, output
// should be: 102
// ■ Sum of odd numbers: 5 + 99 = 104
// ■ Sum of even numbers: 6 + 8 + 76 + 4 + 68 + 44 = 206
// ■ Difference between total even and total odd numbers: 206 - 104 = 102

const evenOddDiffer = (arr) => {
  if (!Array.isArray(arr)) {
    return "Input must be an array";
  }
  let evenSum = 0;
  let oddSum = 0;

  for (let num of arr) {
    if (typeof num !== "number") {
      return "Array must contain only numbers";
    }
    if (num % 2 === 0) {
      evenSum += num;
    } else {
      oddSum += num;
    }
  }
  let difference = evenSum - oddSum;
  return difference;
};
console.log(evenOddDiffer([5, 6, 99, 8, 76, 4, 68, 44]));
// console.log(evenOddDiffer([3, 0])

//8. Write a function that takes an array as a parameter and logs in the console the elements that have
// even indexes only. Notice: this question is not asking you to log elements with even value, but
// elements that are located on even indexes)
// ○ Test case 1: If you give this array to the function [5, 6, 99, 8, 76, 4, 68, 44], toutput
// should be:
// 5
// 99
// 76
// 68
// ○ Test case 2: If you give this array to the function [11, “Sam”, 3, 7, “car”], output should
// be:
// 11
// 3
// car

const EvenIndexElements = (arr) => {
  if (!Array.isArray(arr)) {
    return "Input must be an array";
  }
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 == 0) {
      return arr[i];
    }
  }
};
console.log(EvenIndexElements(4, [5, 6, 99, 8, 76, 4, 68, 44]));
console.log(EvenIndexElements([11, "muller", 3, 7, "car"]));

// Questions 9 and 10 are dependent on the sampleArray provided below:
// let sampleArray = [5, 6, 99, 8, 76, 4, 68, 44];
// Question 9
// 9.Write a function that takes the sampleArray as a parameter, removes the last element from the array,
// adds a new value of "32" to the array and prints the new array on the console. Hint: use an array method

let sampleArray = [5, 6, 99, 8, 76, 4, 68, 44];
const ModifyArray = (arr) => {
  if (!Array.isArray(sampleArray)) {
    return "Input must be an array";
  }
  arr.pop();
  arr.push(32);
  return arr;
};
console.log(ModifyArray(sampleArray));

// 10.Write a function that takes the sampleArray as an argument, sorts the array in ascending order
// and prints the sorted array on the console
// // Use the sort method. Make sure you understand just using the sort() method alphabetically.
// You should use this sorting syntax - sort(function(a, b){return a-b});

const SortArray = (arr) => {
  arr.sort((a, b) => {
    return a - b;
  });
  console.log(arr);
};
SortArray(sampleArray);

// The questions below ( questions 11 to 14) are based on the "evangadiClass" object provided below.
// let evangadiClass = {
// lengthOfCourse: "1 Month",
// website: "https://www.evangadi.com/",
// isChallenging: false,
// topicsCovered: ["HTML", "CSS", "Media Query", "JavaScript"],
// students: [
// {
// name: "Abebe",
// age: 34,
// sex: "M"
// },
// {
// name: "Kebede",
// age: 44,
// sex: "M"
// },
// {
// name: "Almaz",
// age: 27,
// sex: "F"
// },
// {
// name: "Challa",
// age: 22,
// sex: "M"
// },
// {
// name: "Chaltu",
// age: 19,
// sex: "F"
// }
// ]
// }

// Question 11
// ● Change the lengthOfCourse property of the object to "5 Month" and print the new object on the
// console
// ○ // Use the dot notation "." to call the property you want to change

let evangadiClass = {
  lengthOfCourse: "1 Month",
  website: "https://www.evangadi.com/",
  isChallenging: false,
  topicsCovered: ["HTML", "CSS", "Media Query", "JavaScript"],
  students: [
    { name: "Abebe", age: 34, sex: "M",},
    { name: "Kebede", age: 44, sex: "M",},
    { name: "Almaz", age: 27, sex: "F",},
    { name: "Challa", age: 22, sex: "M",},
    { name: "Chaltu", age: 19, sex: "F",},
  ],
};

// updated the length of course
// const UpdateCourseLength = (obj) => {
//   obj.lengthOfCourse = "5 Month";
//   return obj;
// }
// console.log(UpdateCourseLength(evangadiClass));
evangadiClass.lengthOfCourse = "5 Month";
console.log(evangadiClass);

evangadiClass.students.push({ name: "Muller", age: 23, sex: "M" });
console.log(evangadiClass);

// Question 12
// ● Add "Bootstrap" at the end of the topicsCovered property and print the new object on the
// console
// ○ // Use an array method

const AddTopic = (obj) => {
  obj.topicsCovered.push("Bootstrap");
  // obj.topicsCovered.splice(1,0,"React")
  return obj;
};
console.log(AddTopic(evangadiClass));

// Question 13
// ● Write a function that takes the "evangadiClass" object as an argument and calculates the average
// age of the class. Print the result on the console

const AverageAge = (obj) => {
  let totalAge = 0;
  let numberOfStud = obj.students.length;

  for (let student of obj.students) {
    totalAge += student.age;
  }
  let averageAge = totalAge / numberOfStud;
  return averageAge;
};
console.log(AverageAge(evangadiClass));

// Question 14
// ● Write a function that takes the "evangadiClass" object as an argument and calculates the
// percentage of male students in the class. Print the result on the console

const MalePercentage = (obj) => {
  let totalStud = obj.students.length;
  let maleStud = 0;

  for (let student of obj.students) {
    if (student.sex === "M") {
      maleStud++;
    }
  }
  let percentage = (maleStud / totalStud) * 100;
  return percentage;
};
console.log(MalePercentage(evangadiClass));

// Question 15: Test the divisors of three
// ● Write a function that takes 2 parameters: a low and high number. Your goal is to print all
// numbers (on the console) between low and high, and for each of these numbers print
// whether or not the number is divisible by 3. If the number is divisible by 3, print the word
// "div3" directly after the number.

const DivisorsOf3 = (low, high) => {
  for (let i = low + 1; i < high; i++) {
    if (i % 3 === 0) {
      console.log(i + " divisible by 3");
    } else {
      console.log(i);
    }
  }
};
DivisorsOf3(10, 20);

// Question 16: The famous coding interview question (FizzBuzz)
// ● Write a function that prints in the console the numbers from 1 to 100. But for multiples of
// three print “Fizz” instead of the number and for the multiples of five print “Buzz” and for
// numbers which are multiples of both three and five print "FizzBuzz".

const FizzBuzz = () => {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
};
FizzBuzz();

// Question 17: Evens number
// ● An Evens number is an integer whose digits are all even. For example 2426 is an Evens
// number but 3224 is not. Write a function named isEvens that prints on the console 1 if its
// integer argument is an Evens number. The function prints 0 otherwise.

const isEvens = (num) => {
  let digits = num.toString();
  for (let char of digits) {
    if (parseInt(char) % 2 !== 0) {
      return 0;
    }
  }
  return 1;
};
console.log(isEvens(2426));
console.log(isEvens(3224));
