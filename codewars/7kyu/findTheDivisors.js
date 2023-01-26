// will return the divisors of a number if the number is not prime

function divisors(n) {
  let divisors = [];

  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      divisors.push(i);
    }
  }

  if (divisors.length === 0) {
    return `${n} is prime`;
  } else {
    return divisors.sort((a, b) => a - b);
  }
}

console.log(divisors(24)); // [ 2, 3, 4, 6, 8, 12 ]
console.log(divisors(11)); // 11 is prime
