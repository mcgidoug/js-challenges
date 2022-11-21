let numbers = [5, 8, 12, 19, 22];

function sumTwoSmallestNumbers(numbers) {
  let sortedNumbers = numbers.sort(function (a, b) {
    return a - b;
  });

  for (let i = 0; i < sortedNumbers.length; i++) {
    return sortedNumbers[0] + sortedNumbers[1];
  }
}

console.log(sumTwoSmallestNumbers(numbers));

// expected 13
// adds two lowest numbers
