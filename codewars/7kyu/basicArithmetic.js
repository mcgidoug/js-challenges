function arithmetic(a, b, operator){
    switch (operator) {
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "*":
            return a * b;
        case "/":
            return a / b;
        default: 
            throw new Error("Invalid Operator");
    }
  }

  console.log(arithmetic(5,3,"+"))