function toWeirdCase(str) {
    return str.split(' ').map(word => {
      return word.split('').map((char, i) => {
        return i % 2 === 0 ? char.toUpperCase() : char.toLowerCase();
      }).join('');
    }).join(' ');
  }
  
  const str = 'Hello, world!';
  console.log(toWeirdCase(str)); // 'HeLlO, WoRlD!'
  
//   This function first splits the input string into an array of words using the String.split() method. It then uses the Array.map() method to iterate over the array of words and split each word into an array of characters. For each character, it uses the modulo operator (%) to determine if the index is even or odd. If the index is even, it upper-cases the character using the String.toUpperCase() method, otherwise it lower-cases the character using the String.toLowerCase() method. Finally, it uses the Array.join() method to join the characters back into a string and returns the result.

// The time complexity of this function is O(n), where n is the length of the input string, because it requires one pass through the string to transform the characters. It has a space complexity of O(n), because it stores a copy of the input string in an array.