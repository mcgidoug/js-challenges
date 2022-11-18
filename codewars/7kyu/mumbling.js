let s = "abcdU";

function accum(s) {
  let arr = s.split("");
  let newArr = [];
  let capArr = [];

  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i].repeat(i + 1));
  }

  for (let i = 0; i < newArr.length; i++) {
    capArr.push(
      newArr[i].charAt(0).toUpperCase() + newArr[i].substr(1).toLowerCase()
    );
  }

  return capArr.join("-");
}

console.log(accum(s));

// expected: A-Bb-Ccc-Dddd-Uuuuu
