function addBinary(a, b) {
  if (typeof a === "undefined") {
    return (b >>> 0).toString(2);
  }

  if (typeof b === "undefined") {
    return (a >>> 0).toString(2);
  }

  const sum = a + b;

  const sum2bin = (sum >>> 0).toString(2);

  return `${sum2bin}`;
}

console.log(addBinary(51));

// will not pass one random test...
