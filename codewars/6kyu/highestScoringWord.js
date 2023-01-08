function high(x) {
    const words = x.split(' ');
    let maxScore = 0;
    let maxWord = '';
    
    // loops over words array
    for (const word of words) {
      let score = 0;
      // loops over characters in each word in array & adds to score
      for (const ch of word) {
        score += ch.charCodeAt(0) - 96;
      }
      // setting and resetting max score and max word based on input
      // maxScore 0 until looping over char in words is done
      if (score > maxScore) {
        maxScore = score;
        maxWord = word;
      }
    }
  
    return maxWord;
  }

  console.log(high("hello myyyyyy nane is"))
  // myyyyyy