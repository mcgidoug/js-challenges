function findOdd(arr) {
  const count = {};
  arr.forEach((num) => {
    count[num] = (count[num] || 0) + 1;
  });
  for (const num in count) {
    if (count[num] % 2 === 1) {
      return Number(num);
    }
  }
}

console.log(findOdd([7])); // 7
console.log(findOdd([0])); // 0
console.log(findOdd([1, 1, 2])); // 2
console.log(findOdd([0, 1, 0, 1, 0])); // 0
console.log(findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1])); // 4
