function randomSentence() {
  const words = [
    "The",
    "quick",
    "brown",
    "fox",
    "jumps",
    "over",
    "the",
    "lazy",
    "dog",
  ];
  return Array(5)
    .fill(null)
    .map(() => words[Math.floor(Math.random() * words.length)])
    .join(" ");
}

console.log(randomSentence()); // e.g. 'The quick brown fox jumps'
console.log(randomSentence()); // e.g. 'The lazy dog jumps over'
console.log(randomSentence()); // e.g. 'The quick dog jumps over'

// This function defines an array of words and uses the Array.fill() method to create an array with 5 null elements. It then uses the Array.map() method to iterate over the array and replace each element with a random word from the words array.
