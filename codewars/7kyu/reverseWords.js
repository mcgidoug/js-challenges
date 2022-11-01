str = "This is an example!";

function reverseWords(str) {
  let reverseStr = str
    .split("")
    .reverse()
    .join("")
    .split(" ")
    .reverse()
    .join(" ");

  return reverseStr;
}

console.log(reverseWords(str));
