// detect if string contains every letter of the alphabet
function isPangram(string){
    const alpha = "abcdefghijklmnopqrstuvwxyz";
    // every method checks if every element in array passes a given test
    return alpha.split("").every(letter => string.toLowerCase().includes(letter));
  }


  console.log(isPangram("hello my name is"))
  // false
  console.log(isPangram("The quick brown fox jumps over the lazy dog"))
  // true