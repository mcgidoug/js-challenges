let x = "C...m";

function catMouse(x) {
  let arr = x.toLowerCase().split("");
  if (arr.indexOf("m") - (arr.indexOf("c") + 1) <= 3) {
    return "Caught!";
  } else {
    return "Escaped!";
  }
}

console.log(catMouse(x));
