function digitize(n){
    // `Number` is built in js func that converts val to a num
    return n.toString().split("").map(Number).reverse();
}

console.log(digitize(12345))