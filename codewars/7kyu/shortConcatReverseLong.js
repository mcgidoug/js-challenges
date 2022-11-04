let a = "first";
let b = "abcde";

function shorter_reverse_longer(a, b) {
  let arr = [];
  arr.push(a, b);
  let sortedArr = [];

  if (a.length > b.length) {
    sortedArr.push(b);
    sortedArr.push(a.split("").reverse().join().replace(/,/g, ""));
    sortedArr.push(b);
  }

  if (b.length > a.length) {
    sortedArr.push(a);
    sortedArr.push(b.split("").reverse().join().replace(/,/g, ""));
    sortedArr.push(a);
  }

  if (a.length == b.length) {
    sortedArr.push(b);
    sortedArr.push(a.split("").reverse().join().replace(/,/g, ""));
    sortedArr.push(b);
  }

  return sortedArr.join().replace(/,/g, "");
}

console.log(shorter_reverse_longer(a, b));
