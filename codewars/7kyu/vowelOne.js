let word = "adeio";

function vowelOne(word) {
  let wordSplit = word.toLowerCase().split("");
  let binary = [];

  for (let i = 0; i < wordSplit.length; i++) {
    if (
      wordSplit[i] === "a" ||
      wordSplit[i] === "e" ||
      wordSplit[i] === "i" ||
      wordSplit[i] === "o" ||
      wordSplit[i] === "u"
    ) {
      binary.push(1);
    } else {
      binary.push(0);
    }
  }
  return binary.join().replace(/,/g, "");
}

console.log(vowelOne(word));
