let s = "handbnanna";

function getMiddle(s) {
  let position;
  let length;

  if (s.length % 2 == 1) {
    position = s.length / 2;
    length = 1;
  } else {
    position = s.length / 2 - 1;
    length = 2;
  }

  return s.substring(position, position + length);
}

console.log(getMiddle(s));
