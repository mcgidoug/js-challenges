function numberLines(arr) {
  let result = {};
  for (let i = 0; i < arr.length; i++) {
    result[i + 1] = arr[i];
  }
  return result;
}

console.log(numberLines(["a", "b", "c"]));
// {1: 'a', 2: 'b', 3: 'c'}
