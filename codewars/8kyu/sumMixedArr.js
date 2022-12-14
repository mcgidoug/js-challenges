let x = [9, 3, '7', '3']

function sumMix(x){
    // map over > turn to int
    let xInt = x.map(function(n) {
        return parseInt(n)
    })

    // add all numbers in arr
    const initialValue = 0;

    const sumWithInitial = xInt.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      initialValue
    );

    return sumWithInitial;
}

console.log(sumMix(x))
// expect 22