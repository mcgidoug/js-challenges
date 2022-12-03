let collection = [3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3]

function mostFrequentItemCount(collection) {
    if (collection.length === 0) return 0;
    
    let count = Object.create(null);
    
    collection.forEach( item => {
      count[item] = (count[item] || 0) + 1;
    });

    let mostFreq = Math.max(...Object.values(count));
    
    return `The most frequent item appears ${mostFreq} times.`;
  }

console.log(mostFrequentItemCount(collection))

// count will return {2: 2, 3: 4, 4: 1, 9: 1, -1: 5}

// https://www.codewars.com/kata/56582133c932d8239900002e