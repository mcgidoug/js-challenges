// count how many pos
// sum neg
arr = [1, 2, 1, 1, 5, 6, -1, -2, -3, -4, -5, -6];

function countPositivesSumNegatives(arr) {
  let countOfPos = 0;
  let sumOfNeg = 0;

  if (arr === null || arr.length === 0) {
    return [];
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      countOfPos++;
    }

    if (arr[i] < 0) {
      sumOfNeg = sumOfNeg + arr[i];
    }
  }
  return [countOfPos, sumOfNeg];
}

console.log(countPositivesSumNegatives(arr));

// EXPECTED: newArr > [6, -21]

// SECOND SOLUTION:

// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];

function countAndAdd(arr) {
  let neg = [];
  let pos = [];

  for (let i = 0; i < arr.length; i++) {
    if (Math.sign(arr[i]) === -1) {
      neg.push(arr[i]);
    }
    if (Math.sign(arr[i]) === 1) {
      pos.push(arr[i]);
    }
  }
  //   first part done
  let posCount = pos.length;

  //   second part done
  let adder = 0;
  for (let i = 0; i < neg.length; i++) {
    adder += neg[i];
  }
  let finalAnswer = [posCount, adder];
  return finalAnswer;
}

console.log(countAndAdd(arr));
