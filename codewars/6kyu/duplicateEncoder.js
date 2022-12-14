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
console.log(duplicateEncode("Hello World")); // "(()))(()()("
console.log(duplicateEncode("ooldd world")); // ")))))(()())"
console.log(duplicateEncode("Success")); // ")())())"

// note: here is what the object looks like before sorting and returning parenthesis

function duplicateEncode(word) {
  const charCount = {};
  word
    .toLowerCase()
    .split("")
    .forEach((char) => {
      charCount[char] = (charCount[char] || 0) + 1;
    });

  return charCount;
}

console.log(duplicateEncode("hello"));

// {h: 1, e: 1, l: 2, o: 1}
