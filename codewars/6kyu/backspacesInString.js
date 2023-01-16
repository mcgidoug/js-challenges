function processString(str) {
  var stack = [];
  for (var i = 0; i < str.length; i++) {
    if (str[i] === "#") {
      stack.pop();
    } else {
      stack.push(str[i]);
    }
  }
  return stack.join("");
}

console.log("abc#d##c");

// expected ac

// abc pushed in => abc
// # removes c => ab
// d pushed in => abd
// # removes d => ab
// # removes b => a
// c pushed in => ac
