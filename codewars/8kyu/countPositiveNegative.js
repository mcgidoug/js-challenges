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
