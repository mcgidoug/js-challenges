let str = "oh yes i can see it now";

function toJadenCase(str) {
  let splitStr = str.split(" ");

  for (let i = 0; i < splitStr.length; i++) {
    splitStr[i] = splitStr[i][0].toUpperCase() + splitStr[i].substr(1);
  }

  return splitStr;
}

console.log(toJadenCase(str));

// this one failed the test bc of syntax erros but i like this solution more
