let grades = [80, 56, 78, 98, 92, 56, 77, 78];
// 615 / 8 = 76.875
let yourPoints = [45];

function betterThanAverage(grades, yourPoints) {
  const avg = grades.reduce((accumulator, currentValue) => {
    return accumulator + currentValue / grades.length;
  }, 0);

  if (yourPoints > avg) {
    return true;
  } else {
    return false;
  }
}

console.log(betterThanAverage(grades, yourPoints));
