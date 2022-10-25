const array = [1, -3, 6, 2, 3, -4];

function invert(array) {
  newArray = [];
  for (let i = 0; i < array.length; i++) {
    let inverts = array[i] * -1;
    newArray.push(inverts);
  }
  return newArray;
}

console.log(invert(array));
