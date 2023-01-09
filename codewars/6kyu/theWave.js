// should return: ["Hello", "hEllo", "heLlo", "helLo", "hellO"]

function wave(str) {
  let result = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      result.push(str.slice(0, i) + str[i].toUpperCase() + str.slice(i + 1));
    }
  }
  return result;
}

console.log(wave("hello"));

// ["Hello", "hEllo", "heLlo", "helLo", "hellO"]
