const words = ['dog', 'cat', 'apple', 'banana'];

function alphabetizeWords(words) {
    return words.sort((a, b) => {
      if (a < b) return -1;
      if (a > b) return 1;
      return 0;
    });
  }

  console.log(alphabetizeWords(words)); 
  
  // outputs ['apple', 'banana', 'cat', 'dog']
  
//   ========== or ==========

function alphabetizeWords(words) {
    let alphabetizedWords = [];
    for (let word of words) {
        alphabetizedWords.push(word);
    }
    alphabetizedWords.sort();
    return alphabetizedWords;
}

console.log(alphabetizeWords(words));

// outputs ['apple', 'banana', 'cat', 'dog']
