//Q1
// const sam1 = document.getElementById("sample1");
// console.log(sam1);

// console.log(sam1.innerText);//display only the text part
// console.log(sam1.innerHTML);//display the text part along with the html tags

// console.log(sam1.textContent);//display the text part

//Q2
// 2.1
// const tech = document.getElementById("techCompanies");
// console.log(tech)
// 2.2
// const techqury = document.querySelector("#techCompanies");
// console.log(techqury)
// 2.3
// const totCompany = document.querySelectorAll("#techCompanies li");
// console.log("total listof companies:", totCompany.length);

// 2.4
// const redQuery = document.querySelectorAll(".red");
// console.log(redQuery);

// const redClass = document.getElementsByClassName("red");
// console.log(redClass);

// 2.5
const newelemnt = document.createElement("li");
newelemnt.textContent = "Facebook";

// console.log(newelemnt);

// 2.6 add class blue to the new element
// newelemnt.classList.add("blue");
// console.log(newelemnt);

// 2.7 Append new element next to Sony
const sonyElement = document.querySelector("#techCompanies li:last-child");
sonyElement.insertAdjacentElement("afterend", newelemnt);
console.log("After adding new element:", sonyElement.parentElement.innerHTML);

// // 2.8 Count how many companies are labeled blue and display in #blueCompanies
const blueCompanies = document.querySelectorAll("#techCompanies .blue");
document.getElementById(
  "blueCompanies"
).innerHTML += `<p>Total blue companies: ${blueCompanies.length}</p>`;
console.log("total blue companies:", blueCompanies.length);

// Q3

// functio to add background color
function addBackground() {
  document.body.style.backgroundColor = "#99ecff";
}

// func to remove background color
function removeBackground() {
  document.body.style.backgroundColor = "";
}

// select the yes and no buttons
const yesButton = document.getElementById("yes");
const noButton = document.getElementById("No");

// bind click events
yesButton.addEventListener("click", addBackground);
noButton.addEventListener("click", removeBackground);

// Q4
document.getElementById("adder").addEventListener("submit", (e) => {
  e.preventDefault();

  // get both input values at once using querySelectorAll
  const [firstInput, secondInput] = document.querySelectorAll("#adder input");

  const num1 = parseInt(firstInput.value.trim());
  const num2 = parseInt(secondInput.value.trim());
  const res = document.getElementById("sum");

  // validate the inputs are numbers
  if ([num1, num2].some(isNaN)) {
    console.log("Please enter numerical values only");
    res.textContent = "Please enter numerical values only!";
    res.style.color = "red";
    return;
  }

  // calculate sum and average
  const sum = num1 + num2;
  const avg = sum / 2;

  // Display results
  console.log(`Sum: ${sum}, Average: ${avg}`);
  res.innerHTML = `Sum: ${sum} <br> Average: ${avg}`;

  // Clear the input fields after calculation
  firstInput.value = "";
  secondInput.value = "";
});


