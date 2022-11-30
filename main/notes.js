function arrayDiff(a, b) {
    let i = 0;
    while (i < a.length) {
      if (a[i] === b[i]) {
        a.splice(i, 1);
      } else {
        ++i;
      }
    }
    return a;
  }

  console.log(arrayDiff([1,2,2], [2]))