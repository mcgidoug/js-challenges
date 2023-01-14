// 8kyu reversed words

let str = "hello my name is"

function reverseWords(str) {
  let words = str.split(" ");
  let reversedWords = [];
  for (let i = words.length - 1; i >= 0; i--) {
    reversedWords.push(words[i]);
  }
  return reversedWords.join(" ");
}

console.log(reverseWords(str))
// expected "is name my hello"