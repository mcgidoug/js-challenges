let text = "hello my name is...";

function alphabetPosition(text) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  return text
    .toLowerCase()
    .split("")
    .filter((char) => alphabet.includes(char))
    .map((char) => {
      const index = alphabet.indexOf(char) + 1;
      return index > 0 ? index : "";
    })
    .join(" ");
}

console.log(alphabetPosition(text));
// expected 8 5 12 12 15 13 25 14 1 13 5 9 19
