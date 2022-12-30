let arr = [false,1,0,1,2,0,1,3,"a"];

function moveZeros(arr) {
    const result = [];
    // removes zeros and stores in result
    for (const x of arr) {
      if (x !== 0) {
        result.push(x);
      }
    }
    // Array(arr.filter line creates new array filled with specified num of zeros
    result.push(...Array(arr.filter(x => x === 0).length).fill(0));
    return result;
  }

  console.log(moveZeros(arr))

// also...

function moveZeros(arr) {
    const nonZeros = arr.filter(x => x !== 0);
    const zeros = Array(arr.filter(x => x === 0).length).fill(0);
    return nonZeros.concat(zeros);
  }
  