let str = "doG";

// isogram = word with NO REPEATING characters

function isIsogram(str) {
  let lowerStr = str.toLowerCase();

  for (let i = 0; i <= lowerStr.length; i++) {
    for (let j = i + 1; j <= lowerStr.length; j++) {
      if (lowerStr[j] == lowerStr[i]) {
        return false;
      }
    }
  }
  return true;
}

console.log(isIsogram(str));
