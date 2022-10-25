// make the number negative... if negative, do not change

function makeNegative(num) {
  // if NOT negative number
  if (Math.sign(num) === 1) {
    return -Math.abs(num);
  } else {
    return num;
  }
}
