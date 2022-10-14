// Write a function to split a string and convert it into an array of words

const str = "hello i am so happy";

function stringToArray(str) {
  const arr = str.split(" ");

  return arr;
}

console.log(stringToArray(str));
