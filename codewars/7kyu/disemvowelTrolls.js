let s = "aediodu";

function vowelTest(s) {
  let noVowels = s.replace(/[aeiou]/gi, "");
  return noVowels;
}

console.log(vowelTest(s));

// expected: dd
