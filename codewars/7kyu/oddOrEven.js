const numbers = [1, -1, 2, 3, 1];

function oddOrEven(numbers) {
  const sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);

  if (sum % 2 == 0) {
    return `${sum} is even`;
  } else {
    return `${sum} is odd`;
  }
}

console.log(oddOrEven(numbers));
