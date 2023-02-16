let array = ["a", "b", "c"];

var number = function (array) {
  let newArr = [];
  for (let i = 0; i < array.length; i++) {
    newArr.push(`${i + 1}: ${array[i]}`);
  }
  return newArr;
};

console.log(number(array));
// ['1: a', '2: b', '3: c']
