let word = "CodEWaRs";

var capitals = function (word) {
  let arr = [];
  let regex = /[A-Z]/;
  for (let i = 0; i < word.length; i++) {
    if (regex.test(word[i])) {
      arr.push(i);
    }
  }
  return arr;
};

console.log(capitals(word));
// [0, 3, 4, 6]
