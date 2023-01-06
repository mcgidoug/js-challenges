// The string has the following conditions to be alphanumeric:

// At least one character ("" is not valid)
// Allowed characters are uppercase / lowercase latin letters and digits from 0 to 9
// No whitespaces / underscore

function alphanumeric(string) {
    // +$ means string must consist of one or more char from the char class (regex statement) - must not contain any other char
    const regex = /^[a-zA-Z0-9]+$/;
    // test() method tests if string matches regex 
    return regex.test(string);
  }
  
console.log(alphanumeric('abc123')); // true
console.log(alphanumeric('Abc123')); // true
console.log(alphanumeric('abc 123')); // false
console.log(alphanumeric('abc_123')); // false
console.log(alphanumeric('')); // false
