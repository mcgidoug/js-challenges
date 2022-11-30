let a = [1,2,3,4]
let b = [2,4]

function arrayDiff(a, b) {
  let filter = a.filter(item => !b.includes(item))
  return filter;
}

console.log(arrayDiff(a,b))

// filters out b items from a