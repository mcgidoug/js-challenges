const input = [
  ["o", "o", "o", "o", "o", "o", "o", "o"],
  ["o", "o", "o", "o", "o", "o", "o", "o"],
  ["o", "o", "o", "o", "o", "o", "o", "o"],
  ["o", "o", "o", "o", "o", "o", "o", "o"],
  ["o", "o", "o", "o", "o", "o", "x", "o"],
  ["o", "o", "o", "o", "o", "o", "o", "o"],
];

let coordinates = [0, 0];

for (i = 0; i < input.length; i++) {
  if (input[i].includes("x")) {
    coordinates = [i, input[i].indexOf("x")];
  }
}

console.log(coordinates);
