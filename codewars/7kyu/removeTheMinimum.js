let numbers = [104, 31, 11, 11, 66, 235];

function removeSmallest(numbers) {
  // makes copy of original array (not to be manipulated)
  let numbersCopy = [...numbers];
  // finds smallest number
  let min = Math.min.apply(null, numbersCopy);
  // returns empty array if original empty
  if (numbersCopy.length <= 0) {
    return numbersCopy;
  }
  // removes smallest number
  for (i = 0; i < numbersCopy.length; i++) {
    if (numbersCopy[i] == min) {
      numbersCopy.splice(i, 1);
      return numbersCopy;
    }
  }
}

console.log(removeSmallest(numbers));

// expected [104, 31, 11, 66, 235]
// will only remove the first smallest
