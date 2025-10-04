// first function
const myFirst = ()=>{
    console.log("Hello")
}
myFirst();
// second function
const mySecond = (phase3)=>{
    console.log(phase3)

}
// mySecond("Phase 3, where are you? I need you more than my morning coffee!")

// third function
const myThird = (phase3)=>{
    return mySecond(phase3);

}
myThird("Phase 3, where are you? I need you more than my morning coffee!")

// fourth function
const myFourth = (arr)=>{
    let len = arr.length;
    console.log(arr[len-1])

}
myFourth(["js",12,29,16,19,27,6,7,8,11]);

// fifth function
const myFifth = (a)=>{
    let sum = a[0] + a[1];
    console.log(sum);

}
myFifth([5, 10]);



// Create a function that takes an array containing only TWO numbers as a parameter and returns
// a value that is 3 times the first element of the array.

const threeTimesFirst = (arr) => {
    console.log(arr[0] * 3);
}
threeTimesFirst([10, 5]);



// Create a function that takes an integer and returns true if it's divisible by 100, otherwise
// return false.
const isDivisibleBy100 = (num) => {
    if (num % 100 == 0) {
        return true;
    } else {
        return false;
    }
}


// Create a function that takes a number as an argument and returns "even" for even numbers
// and "odd" for odd numbers.
const evenOrOdd = (num) => {
    if (num % 2 == 0) {
        return "even";
    } else {
        return "odd";
    }
}




// ● Create a function that returns
// ○ “Invalid score” if score is above 100 or score is a negative number
// ○ “Grade A” when score is between 90 and 100 (both 90 and 100 included)
// ○ “Grade B” when score is between 80 and 89 (both 80 and 89 included)
// ○ “Grade C” for any score below 79

const gradeCalculate = (score) =>{
    if (score < 0 || score > 100){
        console.log("Invalid score");
    }
    else if (score >= 90 )
    {
        console.log("Grade A");
    }
    else if (score >= 80 )
    {
        console.log("Grade B");
    }
    else
    {
        console.log("Grade C");
    }
}
// gradeCalculate(105);
// gradeCalculate(95);
gradeCalculate(89.5);
// gradeCalculate(75);
// gradeCalculate(-5);
