// write func that replaces one element in arr with user input

function replaceElementInArray(arr, index, newValue) {
  // replaces ONE val
  return arr.splice(index, 1, newValue), arr;
}

console.log(replaceElementInArray([1, 2, 3, 4], 0, "hello"));
// expected: ['hello', 2, 3, 4]
