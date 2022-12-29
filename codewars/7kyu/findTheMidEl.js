let triplet = [2, 3, 1];

function gimme(triplet) {
  let tripletCopy = [...triplet];
  let sortArr = tripletCopy.sort((a, b) => a - b);
  let medianNumber = sortArr[1];
  return triplet.indexOf(medianNumber);
}

console.log(gimme(triplet));
