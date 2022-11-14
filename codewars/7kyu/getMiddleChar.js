let s = "helllo";

function getMiddle(s) {
  let position;
  let length;

  //   if odd
  if (s.length % 2 == 1) {
    position = s.length / 2;
    length = 1;
  }

  //   if even
  else {
    position = s.length / 2 - 1;
    length = 2;
  }

  return s.substring(position, position + length);
}

console.log(getMiddle(s));

// hello returns l
// helllo returns ll
