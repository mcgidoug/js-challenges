function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

// if n is mult of both 3 & 5, pring FizzBuzz
// if n is mult of 3 (but not 5), print Fizz
// if n is mult of 5 (but not 3), print Buzz
// if n is not mult of 3 or 5, print val of n
