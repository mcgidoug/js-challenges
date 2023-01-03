// PASSED 
function findUniq(arr) {
    let repeated = arr.filter((item, index) => arr.indexOf(item) !== index)
    return arr.filter((item)=> item !== repeated[0])[0]
  }

// =========================================================
// FAILED IN CODEWARS 

function findUniq(arr) {
    // Initialize a count object for each element in the array
    const count = arr.reduce((counts, element) => {
      counts[element] = (counts[element] || 0) + 1;
      return counts;
    }, {});
  
    // Find the element that appears only once
    for (const element in count) {
      if (count[element] === 1) {
        return element;
      }
    }
  }
  
  // Example usage
  console.log(findUniq([1, 1, 1, 2, 1, 1])); // 2
  console.log(findUniq([0, 0, 0.55, 0, 0])); // 0.55
  console.log(findUniq([-1, -1, -1, 2, -1, -1])); // 2
  
  // =========================================================
  // object explained in code above

  const arr = [1, 1, 1, 2, 1, 1];
const count = arr.reduce((counts, element) => {
  counts[element] = (counts[element] || 0) + 1;
  return counts;
}, {});

console.log(count); // { 1: 5, 2: 1 }

