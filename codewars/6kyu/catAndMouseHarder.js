// https://www.codewars.com/kata/57ee2a1b7b45efcf700001bf/train/javascript

let x = ".c....d...m";
let j = 4;

function catMouse(x, j) {
  let arr = x.toLowerCase().split("");
  let dog = arr.indexOf("d");
  let cat = arr.indexOf("c");
  let mouse = arr.indexOf("m");
  let game = Math.abs(cat - mouse) - 1;

  //   if game does not contain dog
  if (!x.includes("d")) {
    if (j >= game) {
      return "Caught!";
    } else {
      return "Escaped!";
    }
  }

  // if dog between cat and mouse
  if ((dog > mouse && dog < cat) || (dog < mouse && dog > cat)) {
    return dog;
  }

  //   if dog outside of cat and mouse
  else {
    let filterDog = arr.filter((animal) => animal != "d");
    let cat = filterDog.indexOf("c");
    let mouse = filterDog.indexOf("m");
    let game = Math.abs(cat - mouse) - 1;
    if (j >= game) {
      return "Caught!";
    } else {
      return "Escaped!";
    }
  }
}

console.log(catMouse(x, j));
