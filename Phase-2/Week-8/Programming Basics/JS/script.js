// ##########################Question 1###################
// A. 
console.log(24 > 3);

// B. 
console.log(2 < "12");

// C. 
console.log(0 == 2);

// D. 
console.log(2.0 === 2);

// E. 
console.log(2.0 == "2");

// F. 
console.log(2 < "John");

// G. 
console.log(2 > "John");

// H. 
console.log("2" < "2");

// I. 
console.log("2" > "12");

// J. 
console.log(1 == 1 || 3 == 2 || 3 == 7)

// K. 
console.log(1 == 1 && 2 == 2 && 3 == 7)
// false

// L. 
console.log(1 == 1 || 2 == 2 && 3 == 7)

// M. 
console.log(1 == true && 0 > true || "31" > "9" || 10 > 5 || !("2" == "two" || 1 == "1"))



// ##########################Question 2###################

// 1. Which expression returns true?
// A/ ‘1’ === 1
// B/ 1 == 1
// C/ 1 === 1
// D/ B and C from above
// the answer is D coz for choice B  they have equal value, and choice C they have equal value as well as same data type

// 2. What is the value of x in this statement?
// let x = (1 == true);
// A/ 1
// B/ true
// C/ false
// D/ undefined
// the answer is B coz xthe variable x is assign for boolean not for number


// 3. What is the value of y from the following statements?
// let x = 10;
// let y = (x > 5) && (x < 15)
// A/ 10
// B/ 5
// C/ 15
// D/ true
// the answer is  D coz it has a boolean value




// 4. What is the value of x from the following statements?
// let x = 5;
// x += 3;
// A/ 3
// B/ 8
// C/ 15
// D/ 5
// the answer is B coz x += 3 means x = x + 3, since x=5




// 5. What is the value of y from the following statements?
// let x = 10;
// let y = x++;
// A/ 10
// B/ 11
// C/ 12
// D/ 13
// the answer is A coz the increament is postfix




// 6. What is the value of y in the following statements?
// let x = 1;
// let y = (x !== 2);
// A/ 1
// B/ 2
// C/ false
// D/ true
// the answer is D coz the number is not equal even if they have same data type

// 7. What is the output of (+”2”+2)?
//the answer is 4 coz the plus sign before the string 2 makes convert to number 2 , since it is unary
console.log(+"2" + 2)

// 8. What is the output of (7 % 3)?
//the answer is 1 coz modulo describes the reminder of the result 
console.log(7%3)

// 9. What is the output of (2+true)?
// the answer is 3 coz the true word means the number 1
console.log(2 + true)



// ##########################Question 3###################
// ● Write a simple script that adds 1 and 2 and displays the result on the console
// ● Use variables a, b & c
// ● Use "let" to declare the variables
// ● Use the formula c = a + b
// ● Display the value of c on console
let a = 1;
let b = 2
let c = a + b
console.log(c) //or console.log(1 + 2)


// ##########################Question 4###################

// ● Create a variable to hold your first name
// ● Create another variable to hold your last name
// ● Create a third variable to hold your full name
// ● Assign the value of your first name and last name to the first two variable
// ● Use "+" to concatenate your first name and last name to assign the result to your last name's
// variable
// ● Don't forget to include space between your first and last name
// ● Display the value of your full name on the console
let fn = "Mulugeta"
let ln = "Abeje"
let fulln = fn + " " + ln
console.log(fulln)
