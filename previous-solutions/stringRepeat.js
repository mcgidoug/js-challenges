// Write a function that accepts an integer `n` and a string `s` as parameters, and returns a string of `s` repeated exactly `n` times.

// ex:
// 6, "I"     -> "IIIIII"
// 5, "Hello" -> "HelloHelloHelloHelloHello"

function repeatStr(numberOfRepeats, str) {
  let starterString = "";

  for (let i = 0; i < numberOfRepeats; i++) {
    starterString = starterString + str;
  }

  return starterString;
}

console.log(repeatStr(3, "hi").toString());
