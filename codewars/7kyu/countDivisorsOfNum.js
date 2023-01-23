function divisors(n) {
  let divisors = [];
  //iterates through all the integers from 1 to n
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      divisors.push(i);
    }
  }
  return divisors.length;
}

console.log(divisors(4)); // Output: [1, 2, 4] => 3
console.log(divisors(5)); // Output: [1, 5] => 2
console.log(divisors(12)); // Output: [1, 2, 3, 4, 6, 12] => 6
console.log(divisors(30)); // Output: [1, 2, 3, 5, 6, 10, 15, 30] => 8
