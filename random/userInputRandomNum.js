function random_number(a, b) {
  return Math.floor(Math.random() * (b - a + 1)) + a;
}

console.log(random_number(1, 1000));

// generates a random number between two parameters given by user (a , b)
