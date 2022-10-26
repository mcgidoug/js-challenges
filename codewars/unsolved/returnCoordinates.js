const input = [
  ["o", "o", "o", "o", "o", "o", "o", "o"],
  ["o", "o", "o", "o", "o", "o", "o", "o"],
  ["o", "o", "o", "o", "o", "o", "o", "o"],
  ["o", "o", "o", "o", "o", "o", "o", "o"],
  ["o", "o", "o", "o", "o", "o", "x", "o"],
  ["o", "o", "o", "o", "o", "o", "o", "o"],
];

//   EXPECTED : Return [4,6] for the example above => [4, 6]

// console.log(i, j, input[i][j]);
function findCoordinates(input) {
  let coordinates = [];
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input[i].length; j++) {
      if (input[i][j] == "x") {
        coordinates.push(input[i][j]);
      }
    }
  }
  return coordinates;
}

console.log(findCoordinates(input));
