// count by x

function countBy(x, n) {
    let z = [];
  
    for (var i = 1; i <= n; i++) {
      z.push(x * i);
    }
  
  return z;
  }
  
  console.log(countBy(3, 5));
  
  // [3, 6, 9, 12, 15]