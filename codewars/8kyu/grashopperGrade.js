function getGrade(s1, s2, s3) {
  let avg = (s1 + s2 + s3) / 3;

  if (avg >= 90 && avg <= 100) {
    return "A";
  }
  if (avg >= 80 && avg <= 89.9) {
    return "B";
  }
  if (avg >= 70 && avg <= 79.9) {
    return "C";
  }
  if (avg >= 60 && avg <= 69.9) {
    return "D";
  }
  if (avg >= 0 && avg <= 59.9) {
    return "F";
  }
}
