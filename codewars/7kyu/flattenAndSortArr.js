let array = [
  [3, 2, 1],
  [4, 5, 6],
  [9, 7, 8],
];

function flattenAndSort(array) {
  return array.flat().sort((a, b) => a - b);
}

console.log(flattenAndSort(array));
