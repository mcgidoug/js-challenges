let d = 7;

function rentalCarCost(d) {
  if (d < 3) {
    return d * 40;
  }
  if (d >= 3 && d < 7) {
    return d * 40 - 20;
  }

  if (d >= 7) {
    return d * 40 - 50;
  }
}

console.log(rentalCarCost(d));
