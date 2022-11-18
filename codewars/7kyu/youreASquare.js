let n = 16;

var isSquare = function (n) {
  // % 1 returns ANY remainder
  //   mod operator looks at decimal
  if (Math.sqrt(n) % 1 === 0) {
    return true;
  } else {
    return false;
  }
};

console.log(isSquare(n));
