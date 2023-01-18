// function will return string where each character is 13 characters ahead of the original input string

function rot13(str) {
  const alpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const output = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM";

  let index = (x) => alpha.indexOf(x);
  let translate = (x) => {
    let rot13Char = output[index(x)];
    if (x.toUpperCase() === x && rot13Char) {
      return rot13Char.toUpperCase();
    } else if (rot13Char) {
      return rot13Char;
    }
    return x;
  };
  return str.split("").map(translate).join("");
}

console.log(rot13("heLlo"));
// expected: urYyb
console.log(rot13("AAaaaaayayayaya"));
// expected: NNnnnnnlnlnlnln
