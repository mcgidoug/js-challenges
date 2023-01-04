function validParentheses(parens) {
    let counter = 0;
  
    for (let i = 0; i < parens.length; i++) {
      const char = parens.charAt(i);
      if (char === '(') {
        counter++;
      } else if (char === ')') {
        counter--;
      }
  
      if (counter < 0) {
        return false;
      }
    }
  
    return counter === 0;
  }

  console.log(validParentheses("((())))()())))))"))
  
//   This function works by iterating over the characters in the input string, and using a counter variable to keep track of the balance of the parentheses. If the counter becomes negative at any point, it means that there are more closing parentheses than opening parentheses, which is not valid. The function returns true if the counter is 0 after the loop is completed, which indicates that the parentheses are balanced, and false otherwise.