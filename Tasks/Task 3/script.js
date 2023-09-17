// --------------1---------------
function Add(n) {
  let num = -30;
  let result = num + n;
  return result;
}
console.log(`Task 1: ${Add(80)}`);

// --------------2---------------
function removeLeadingTrailing(numberString) {
  let number = parseFloat(numberString);
  let string = number.toString();
  return string;
}
console.log(`Task 2/a: ${removeLeadingTrailing("230.000")}`);
console.log(`Task 2/b: ${removeLeadingTrailing("00402")}`);
console.log(`Task 2/c: ${removeLeadingTrailing("03.1400")}`);
console.log(`Task 2/d: ${removeLeadingTrailing("30")}`);

// --------------3---------------
function secondLargest(array) {
  let max = array[0];
  for (i = 0; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }
  let index = array.indexOf(max);
  array.splice(index, 1);

  let secondMax = array[0];
  for (i = 0; i < array.length; i++) {
    if (array[i] > secondMax) {
      secondMax = array[i];
    }
  }
  return secondMax;
}
console.log(`Task 3/a: ${secondLargest([10, 40, 30, 20, 50])} `);
console.log(`Task 3/b: ${secondLargest([25, 143, 89, 13, 105])} `);
console.log(`Task 3/c: ${secondLargest([54, 23, 11, 17, 10])} `);
// --------------4---------------
function isRepdigit(num) {
  if (num < 0) {
    return false;
  } else {
    let string = num.toString();
    for (let i = 1; i < string.length; i++) {
      if (string[i] !== string[0]) {
        return false;
      }
    }
    return true;
  }
}

console.log(`Task 4/a: ${isRepdigit(22)} `);
console.log(`Task 4/b: ${isRepdigit(55555555555555)} `);
console.log(`Task 4/c: ${isRepdigit(-9)} `);
// --------------5---------------
function reverseWords(string) {
  let array = string.split(" ").reverse().join(" ");

  return array;
}
console.log(`Task 5/a: ${reverseWords("the sky is blue")} `);
console.log(`Task 5/b: ${reverseWords("hello world!")} `);
console.log(`Task 5/c: ${reverseWords("a good example")} `);

// --------------6---------------
function sevenBoom(array) {
  for (let i = 0; i < array.length; i++) {
    let digits = array[i].toString().split("");
    for (let j = 0; j < digits.length; j++) {
      if (digits[j] === "7") {
        return "Boom!";
      }
    }
  }
  return "There is no 7";
}

console.log(`Task 6/a: ${sevenBoom([4, 2, 3, 4, 5, 6, 7])}`);
console.log(`Task 6/b: ${sevenBoom([8, 6, 33, 100])}`);
console.log(`Task 6/c: ${sevenBoom([2, 55, 60, 97, 86])}`);

// --------------7---------------
function insertWhitespace(str) {
  const result = str.split(/(?=[A-Z])/).join(" ");
  return result;
}
console.log(`Task 7: ${insertWhitespace("SheWalksToTheBeach")} `);

// --------------8---------------
function countTrue(array) {
  let count = 0;
  for (i = 0; i < array.length; i++) {
    if (array[i] === true) {
      count += 1;
    }
  }
  return count;
}
console.log(`Task 8/a: ${countTrue([true, false, false, true, false])}`);
console.log(`Task 8/b: ${countTrue([false, false, false, false])}`);

// --------------9---------------
function capToFront(word) {
  let array = word.split("");
  let newArray = [];
  for (i = 0; i < array.length; i++) {
    if (array[i] === array[i].toUpperCase()) {
      newArray.push(array[i]);
    }
  }
  for (i = 0; i < array.length; i++) {
    if (array[i] === array[i].toLowerCase()) {
      newArray.push(array[i]);
    }
  }
  let newestArray = newArray.join("");
  return newestArray;
}

console.log(`Task 9/a: ${capToFront("hApPy")}`);
console.log(`Task 9/b: ${capToFront("moveMENT")}`);
console.log(`Task 9/c: ${capToFront("shOrtCAKE")}`);

// --------------10---------------
function matchLastItem(array) {
  let result = "";
  for (i = 0; i < array.length - 1; i++) {
    result += array[i];
  }
  if (array[array.length - 1] === result) {
    return true;
  } else {
    return false;
  }
}
console.log(`Task 10/a: ${matchLastItem(["rsq", "6hi", "g", "rsq6hig"])} `);
console.log(`Task 10/b: ${matchLastItem([1, 1, 1, "11"])} `);
console.log(
  `Task 10/c: ${matchLastItem([8, "thunder", true, "8thundertrue"])} `
);

// --------------11---------------
function findNaN(array) {
  let result = "";
  for (i = 0; i < array.length; i++) {
    if (isNaN(array[i])) {
      return i;
    }
  }
  return -1;
}

console.log(`Task 11/a: ${findNaN([1, 2, NaN])} `);
console.log(`Task 11/b: ${findNaN([NaN, 1, 2, 3, 4])} `);
console.log(`Task 11/c: ${findNaN([1, 2, 3, 4])} `);

// --------------12---------------

function removeDups(array) {
  let uniqueArray = [];
  for (let i = 0; i < array.length; i++) {
    if (uniqueArray.indexOf(array[i]) === -1) {
      uniqueArray.push(array[i]);
    }
  }
  return uniqueArray;
}

console.log(`Task 12/a: ${removeDups([1, 2, 1])}`);
console.log(`Task 12/b: ${removeDups(["The", "big", "cat"])}`);
console.log(`Task 12/c: ${removeDups(["John", "Taylor", "John"])}`);

// --------------13---------------
function converTime(time) {
  let hour = parseInt(time[0] + time[1]);
  let hourType = time[8] + time[9];
  if (hourType === "PM" && hour < 12) {
    hour = hour + 12;
  }
  if (hourType === "AM" && hour === 12) {
    hour = "00";
  }
  let time24 = `${hour}:${time[3] + time[4]}:${time[6] + time[7]}`;
  return time24;
}

console.log(`Task 13/a: ${converTime("07:05:45PM")}`);
console.log(`Task 13/b: ${converTime("12:40:22AM")}`);
console.log(`Task 13/c: ${converTime("12:45:54PM")}`);

// --------------14---------------
function removeLastVowel(sentence) {
  let array = sentence.split(" ");
  let result = [];
  for (let i = 0; i < array.length; i++) {
    let word = array[i];
    let lastLetter = word[word.length - 1];
    if (
      lastLetter === "a" ||
      lastLetter === "o" ||
      lastLetter === "e" ||
      lastLetter === "u" ||
      lastLetter === "i"
    ) {
      word = word.slice(0, -1);
    }
    result.push(word);
  }

  return result.join(" ");
}

console.log(
  `Task 14/a: ${removeLastVowel(
    "Those who dare to fail miserably can achieve greatly"
  )}`
);

console.log(
  `Task 14/b: ${removeLastVowel(
    "Love is a serious mental disease"
  )}`
);

// --------------15---------------
function sumOfCubes(array){
let sum = 0;
for (i=0; i<array.length; i++){
  sum += array[i]**3
}
return sum
}


console.log(
  `Task 15/a: ${sumOfCubes([1, 5, 9])}`
);
console.log(
  `Task 15/b: ${sumOfCubes([3, 4, 5])}`
);
console.log(
  `Task 15/c: ${sumOfCubes([2])}`
);
console.log(
  `Task 15/d: ${sumOfCubes([0])}`
);
