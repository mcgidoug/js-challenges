let x = [1, 2, 3, 4];

function grow(x) {
  const min = x.reduce((a, b) => a * b);
  return min;
}

console.log(grow(x));

//  multiply the prev num by the next
// expected 24
// 1*2*3*4
