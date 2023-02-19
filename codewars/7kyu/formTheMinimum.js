let values = [1, 3, 1];

function minValue(values) {
  let sorted = values.sort();
  let unique = [...new Set(sorted)];
  return parseInt(unique.join(""));
}

console.log(minValue(values));
// 13
