arr = [1, 4, 2, 6, 5, 2];

function squareSum(arr) {
  let squaredNumbers = [];
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    squaredNumbers.push(Math.pow(arr[i], 2));
    sum = sum + squaredNumbers[i];
  }
  return sum;
}

console.log(squareSum(arr));

// expected squared 1, 16, 4, 36, 25, 4
// expected sum 86
