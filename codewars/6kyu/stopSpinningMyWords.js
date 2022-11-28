let string = "Hey fellow warriors my name is douglas";

function spinWords(string) {
  let arr = string.split(" ");
  let arr2 = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length <= 4) {
      arr2.push(arr[i]);
    }

    if (arr[i].length >= 5) {
      arr2.push(arr[i].split("").reverse().join(""));
    }
  }

  return arr2.join(" ");
}

console.log(spinWords(string));
