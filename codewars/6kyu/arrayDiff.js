let a = [1,2,3,4]
let b = [2,4]

function arrayDiff(a, b) {
  // creates a new array that contains all elements of a that are NOT in b
  let filter = a.filter(item => !b.includes(item))
  return filter;
}

console.log(arrayDiff(a,b))

// filters out b items from a