let str = "oooxXXm";

function XO(str) {
  let lowerStr = str.toLowerCase();
  let countX = 0;
  let countO = 0;

  for (let i = 0; i < str.length; i++) {
    if (lowerStr[i] === "x") {
      countX++;
    }
    if (lowerStr[i] === "o") {
      countO++;
    }
  }

  if (countX === countO) {
    return true;
  } else {
    return false;
  }
}

console.log(XO(str));
