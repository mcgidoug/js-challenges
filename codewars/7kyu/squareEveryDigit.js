let num = 2112;

function squareDigits(num) {
  let arrOfDigits = Array.from(num.toString()).map(Number);
  let newArr = [];
  for (let i = 0; i < arrOfDigits.length; i++) {
    newArr.push(arrOfDigits[i] * arrOfDigits[i]);
  }
  return parseInt(newArr.join().replace(/,/g, ""));
}

console.log(squareDigits(num));
