class Dictionary {
  constructor(words) {
    this.words = words;
  }

  getMatchingWords(pattern) {
    let matchingWords = [];
    for (let word of this.words) {
      if (this.matchWordToPattern(word, pattern)) {
        matchingWords.push(word);
      }
    }
    return matchingWords;
  }

  matchWordToPattern(word, pattern) {
    if (word.length !== pattern.length) {
      return false;
    }
    for (let i = 0; i < word.length; i++) {
      if (pattern[i] !== "?" && pattern[i] !== word[i]) {
        return false;
      }
    }
    return true;
  }
}

var fruits = new Dictionary(["banana", "apple", "papaya", "cherry"]);
console.log(fruits.getMatchingWords("lemon")); // must return []
console.log(fruits.getMatchingWords("cherr??")); // must return []
console.log(fruits.getMatchingWords("?a?a?a")); // must return ['banana', 'papaya']
console.log(fruits.getMatchingWords("??????")); // must return ['banana', 'papaya', 'cherry']
