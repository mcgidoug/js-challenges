// a simple function that creates an object and logs how many times the number occurs

let arr = [1,1,1,2,3,4,3,3,4,5,5,5,6,6,7,8,9,8,8,8];

function numCounterObj(arr) {
    const count = {};
    arr.forEach((num)=>{
        count[num] = (count[num] || 0) +1;
    });
    return count; 
}

console.log(numCounterObj(arr))

// {1: 3, 2: 1, 3: 3, 4: 2, 5: 3, 6: 2, 7: 1, 8: 4, 9: 1}