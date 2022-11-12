let n = 0;

function descendingOrder(n) {
  if (n.length === 1) {
    return n;
  }
  const arrOfDigits = Array.from(String(n), Number);
  const descOrder = parseInt(arrOfDigits.sort().reverse().join(""));

  return descOrder;
}

console.log(descendingOrder(n));
