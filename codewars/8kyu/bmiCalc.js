function bmi(weight, height) {
  if (weight / Math.pow(height, 2) <= 18.5) {
    return "Underweight";
  }
  if (weight / Math.pow(height, 2) <= 25) {
    return "Normal";
  }
  if (weight / Math.pow(height, 2) <= 30) {
    return "Overweight";
  }
  if (weight / Math.pow(height, 2) > 30) {
    return "Obese";
  }
}

console.log(bmi(80, 1.8));
