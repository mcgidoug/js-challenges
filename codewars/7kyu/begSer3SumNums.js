function getSum(start, end) {
  if (start == end) {
    return start;
  }

  if (start > end) {
    var arr = new Array(start - end + 1);
    for (var i = 0; i < arr.length; i++, start--) {
      arr[i] = start;
    }
    let sum = arr.reduce((accum, currVal) => {
      return accum + currVal;
    }, 0);

    return sum;
  }

  if (end > start) {
    var arro = new Array(end - start + 1);
    for (var j = 0; j < arro.length; j++, start++) {
      arro[j] = start;
    }
    let sum = arro.reduce((accum, currVal) => {
      return accum + currVal;
    }, 0);

    return sum;
  }
}

console.log(getSum(9, 1));
