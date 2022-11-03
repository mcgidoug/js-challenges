let grades = [80, 56, 78, 98, 92, 56, 77, 78];
// 615 / 8 = 76.875
let yourPoints = [88];

function betterThanAverage(grades, yourPoints) {
  let total = 0;

  for (let i = 0; i < grades.length; i++) {
    total += grades[i];
  }
  let gradesAvg = total / grades.length;

  if (yourPoints > gradesAvg) {
    return true;
  } else {
    return false;
  }
}

console.log(betterThanAverage(grades, yourPoints));
