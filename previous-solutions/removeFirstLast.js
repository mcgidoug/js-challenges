// remove first and last letters of string if string is greater than 2 char

let str1 = "hello";

function removeChar(str) {
  if (str1.length >= 2) {
    return str1.substring(1).slice(0, -1);
  } else {
    return str1;
  }
}

console.log(removeChar(str1).toString());
