function twoSum(numbers, target) {
  // loops over numbers arr
  for (let i = 0; i < numbers.length; i++) {
    // loops over numbers arr but sets counter to 1 after the first loop's index
    for (let j = i + 1; j < numbers.length; j++) {
      // if number indexes added === target then return
      if (numbers[i] + numbers[j] === target) {
        return [i, j];
      }
    }
  }
}

console.log(twoSum([1, 2, 3, 4], 4));
// will return [0,2] bc index 0 (1) + index 2 (3) = 4
