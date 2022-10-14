let display = document.getElementById("display");

arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

function positiveSum(arr) {
  let sum = 0;

  let avg = 0;

  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }

  return sum / arr.length;
}

console.log(positiveSum(arr).toString());

display.innerText = positiveSum(arr).toString();

// expected result: 6 on doc && console
