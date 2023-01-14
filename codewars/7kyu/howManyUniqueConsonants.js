function countUniqueConsonants(str) {
    var uniqueConsonants = "";
    str = str.toLowerCase();
    for (var i = 0; i < str.length; i++) {
        // -1 checks if [i] is NOT present in uniqueConsonants string
      if (str[i].match(/[bcdfghjklmnpqrstvwxyz]/) && uniqueConsonants.indexOf(str[i]) === -1) {
        uniqueConsonants += str[i];
      }
    }
    return uniqueConsonants.length;
  }

  console.log("hello")
  // expected 2 (counts consonants - BUT NOT DUPLICATES)