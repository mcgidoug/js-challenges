let nums = "8 3 -5 42 -1 0 0 -9 4 7 4 -4";

function highAndLow(nums){
    let numbers = nums.split(" ");
    let max = Math.max(...numbers);
    let min = Math.min(...numbers);
    return `${max} ${min}`;
    
}

console.log(highAndLow(nums));