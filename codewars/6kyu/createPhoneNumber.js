let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

function createPhoneNumber(numbers) {
  let numbersStr = numbers.join("");
  return `(${numbersStr.substr(0, 3)}) ${numbersStr.substr(
    3,
    3
  )}-${numbersStr.substr(6, 4)}`;
}

console.log(createPhoneNumber(numbers));
// expected: (123) 456-7890
