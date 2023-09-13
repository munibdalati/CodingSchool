// ---------------1---------------
function getDays(x, y) {
  let days = (y - x) / 1000 / 60 / 60 / 24;
  return days;
}
console.log(
  `Task 1/a: ${getDays(
    new Date("June 14, 2019"),
    new Date("June 20, 2019")
  )} days`
);

console.log(
  `Task 1/b: ${getDays(
    new Date("December 29, 2018"),
    new Date("January 1, 2019")
  )} days`
);

// ---------------2---------------
function containsOnlyNumbers(str) {
  return Boolean(str.match(/\d/));
}

function numInStr(array) {
  let newArray = [];
  for (i = 0; i < array.length; i++) {
    if (containsOnlyNumbers(array[i]) === true) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
console.log(`Task 2/a: ${numInStr(["1a", "a", "2b", "b"])}`);
console.log(`Task 2/a: ${numInStr(["a", "b", "b"])}`);

// ---------------3---------------

function reverseOdd(sentence) {
  let newArray = sentence.split(" ");
  for (i = 0; i < newArray.length; i++) {
    if (newArray[i].length % 2 !== 0) {
        newArray[i] = newArray[i].split("").reverse().join("");    }
  }
  console.log(newArray)
}
let sentence = "One Two Three Four Five Six";
console.log(`Task 3: ${reverseOdd(sentence)}`);

// ---------------4---------------
function isPandigital(number) {
    // Convert the number to a string
    const numStr = number.toString();
  
    // Create an array to keep track of the digits 0 to 9
    const digitCount = Array(10).fill(0);
  
    // Iterate through each character in the string
    for (let i = 0; i < numStr.length; i++) {
      const digit = parseInt(numStr[i]);
  
      // Check if the digit is within the valid range (0 to 9)
      if (digit >= 0 && digit <= 9) {
        // Mark the digit as seen
        digitCount[digit] = 1;
      } else {
        // If any non-digit character is encountered, return false
        return false;
      }
    }
    // Check if all digits from 0 to 9 have been seen at least once
    return digitCount.every((count) => count === 1);
  }
    const number1 = 1234567890;
  const number2 = 987653210;
  
  console.log(`Task 4/a: ${isPandigital(number1)}`);
  console.log(`Task 4/b: ${isPandigital(number2)}`);

 