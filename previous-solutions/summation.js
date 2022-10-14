// add all numbers up to number given

function numberSum(N) {
  var total = 0;

  for (let i = 1; i <= N; i++) {
    total += i;
  }

  return total;
}

console.log(numberSum(8));
