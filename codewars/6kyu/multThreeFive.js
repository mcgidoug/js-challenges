let number = 4;

function solution(number) {
  let total = [];
  let array = [];
  let final = 0;

  if (number <= 0) {
    return parseInt(0);
  }
  // makes a new array that separates number into all numbers counting up to number
  for (let i = 0; i < number; i++) {
    total.push(i);
  }
  // evaluates if number is divisible by 3 or 5
  for (let j = 0; j <= total.length; j++) {
    if (total[j] % 3 == 0 || total[j] % 5 == 0) {
      array.push(total[j]);
    }
  }
  // sums numbers that are div by 3 or 5
  for (let q = 0; q < array.length; q++) {
    final = final + array[q];
  }
  return final;
}

console.log(solution(number));
