function strCount(str, letter){  
    let count = 0;
    str.split('').forEach(x => x == letter ? count++ : null)
    // loops over each character in array and adds to counter
    return count; 
  }

  console.log(strCount("hello", "l"))

//   count how many times 'l' appears in 'hello'