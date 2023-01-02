function duplicateEncode(word) {
  const charCount = {};
  word
    .toLowerCase()
    .split("")
    .forEach((char) => {
      charCount[char] = (charCount[char] || 0) + 1;
    });
  return word
    .toLowerCase()
    .split("")
    .map((char) => {
      return charCount[char] > 1 ? ")" : "(";
    })
    .join("");
}

console.log(duplicateEncode("recede")); // "()()()"
console.log(duplicateEncode("(( @")); // "))(("
console.log(duplicateEncode("din")); // "((("
// still a bit lost on the following 3...
console.log(duplicateEncode("Success")); // ")()))()"
console.log(duplicateEncode("Hello World")); // "(()))(()()("
console.log(duplicateEncode("ooldd world")); // ")))))(()())"
