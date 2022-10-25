// function takes in 3 arguments - should do simple math depending on 2 numbers and operator input

function basicOp(operation, value1, value2) {
  if (operation == "+") return value1 + value2;

  if (operation == "-") return value1 - value2;

  if (operation == "*") return value1 * value2;

  if (operation == "/") return value1 / value2;
}

console.log(basicOp("-", 6, 2).toString());
