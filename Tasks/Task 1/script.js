// --------------1---------------
function minConverter(minutes) {
  let seconds = minutes * 60;
  return seconds;
}
console.log(`Task 1: ${minConverter(6)}`);

// --------------2---------------
function increment(num) {
  let result = num + 1;
  return result;
}
console.log(`Task 2: ${increment(10)}`);

// --------------3---------------
function firstElement(array) {
  return array[0];
}
console.log(`Task 3: ${firstElement([1, 2, 3, 4, 5])}`);

// --------------4---------------
function triangleArea(base, height) {
  area = (base * height) / 2;
  return area;
}

console.log(`Task 4: ${triangleArea(6, 6)}`);

// --------------5---------------
function evenNumberEvenIndex(array) {
  let newArray = [];
  for (i = 0; i < array.length; i += 2) {
    if (array[i] % 2 === 0) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
var nums = [5, 2, 2, 1, 8, 66, 55, 77, 34, 9, 55, 1];
console.log(`Task 5: ${evenNumberEvenIndex(nums)}`);

// --------------6---------------
function evenIndexOddLength(array) {
  let newArray = [];
  for (i = 0; i < array.length; i++) {
    if (array[i].length % 2 !== 0) {
      newArray.push(array[i]);
    }
  }
  for (i = 0; i < newArray.length; i++) {
    if (newArray.indexOf([i]) % 2 !== 0) {
      newArray.pop(array[i]);
    }
  }
  return newArray;
}
var strings = ["alex", "mercer", "madrasa", "rashed2", "emad", "hala"];
console.log(`Task 6: ${evenIndexOddLength(strings)}`);

// --------------7---------------
function powerElementIndex(array) {
  let newArray = [];
  for (i = 0; i < array.length; i++) {
    let result = array[i] ** i;
    newArray.push(result);
  }
  return newArray;
}
var nums = [44, 5, 4, 3, 2, 10];

console.log(`Task 7: ${powerElementIndex(nums)}`);

// --------------8---------------
function multiplication2(x, y) {
  let result = 0;
  for (var i = 0; i < y; i++) {
    result += x;
  }
  return result;
}
console.log(`Task 8: ${multiplication2(2, 8)}`);

// --------------9---------------
function multi2(start, end) {
  let result = 1;
  for (let i = start; i <= end; i++) {
    result *= i;
  }
  return result;
}
console.log(`Task 9: ${multi2(4, 5)}, ${multi2(3, 6)}`);

// --------------10---------------
function aveArray(array) {
  let sum = 0;
  for (i = 0; i < array.length; i++) {
    sum += array[i];
  }
  let average = sum / array.length;
  return average;
}
var nums = [1, 2, 3, 8, 9];
console.log(`Task 10: ${aveArray(nums)}`);
