//  lost without a map
//  given an array of integers - return a new array with each value doubled
arr = [1, 2, 3, 4];

function maps(arr) {
  doubledArr = [];

  for (let i = 0; i < arr.length; i++) {
    doubledArr = doubledArr + arr[i] * 2;
  }
  return doubledArr.split();
}

console.log(maps(arr).toString());
