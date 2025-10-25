// Q3

import myMultiplier1 from "./myFirst.js";
import myMultiplier2 from "./mySecond.js";
import fs from "fs/promises";

// const value = myMultiplier1(5);
// const value2 = myMultiplier2(5);
// console.log(value);
// console.log(value2);

// // Q4
// // a
// const otherv = myMultiplier1(14);
// console.log(otherv);
// const res1 = `the value of 14 when passed through the mymultiplier functioon is (${otherv}).\n`;
// fs.writeFileSync('results.txt', res1, "utf-8")

// // b
// const otherv2 = myMultiplier2(14);
// console.log(otherv2);
// const res2 = `the value of 14 when passed through the mymultiplier2 functioon is (${otherv2}).\n`;
// fs.appendFileSync('results.txt', res2, "utf-8")

// ==================by using asynchronously file system module=========================

async function main() {
  try {
    // Q3
    const value = myMultiplier1(5);
    const value2 = myMultiplier2(5);
    console.log(value);
    console.log(value2);

    // Q4
    const otherv = myMultiplier1(14);
    console.log(otherv);
    const res1 = `The value of 14 when passed through the myMultiplier function is (${otherv}).\n`;
    await fs.writeFile("results.txt", res1, { encoding: "utf8" });

    // Q4 b
    const otherv2 = myMultiplier2(14);
    console.log(otherv2);
    const res2 = `The value of 14 when passed through the myMultiplier2 function is (${otherv2}).\n`;
    await fs.appendFile("results.txt", res2, { encoding: "utf8" });

    console.log("eesults written to results.txt asynchronously");
  } catch (err) {
    console.error("Error writing to file:", err);
  }

  //   if we wanna read the text file
  await fs
    .readFile("results.txt", { encoding: "utf8" })
    .then((data) => {
      console.log("contents of results.txt file are");
      console.log(data);
    })
    .catch((err) => {
      console.error("Error reading file:", err);
    });
}

// ruun the async functiion
main();
