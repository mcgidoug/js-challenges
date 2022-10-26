const str = "";

function isItANum(str) {
  let num = str.replace(/\D/g, "");

  if (num == "") {
    return "Not a phone number";
  }

  for (let i = 0; i < num.length; i++) {
    if (num[0] == 0 && num.length == 11) {
      return num;
    } else {
      return "Not a phone number";
    }
  }
}

console.log(isItANum(str));
