let numbers = [17, 17, 3, 17, 17, 17, 17];

function stray(numbers) {
  return numbers.find((el) => numbers.indexOf(el) === numbers.lastIndexOf(el));
}

console.log(stray(numbers));

// or...

function stray(numbers) {
  for (var i in numbers) {
    if (numbers.indexOf(numbers[i]) === numbers.lastIndexOf(numbers[i])) {
      return numbers[i];
    }
  }
}

// or...

const stray = (nums) => nums.reduce((a, b) => a ^ b);
