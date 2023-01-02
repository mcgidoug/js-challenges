function duplicateCount(str) {
  const charCount = {};
  str
    .toLowerCase()
    .split("")
    .forEach((char) => {
      charCount[char] = (charCount[char] || 0) + 1;
    });
  return Object.values(charCount).filter((count) => count > 1).length;
}

const str = "aabbccccccdddddde";
console.log(duplicateCount(str));

// expected 4 : a b c d repeat
