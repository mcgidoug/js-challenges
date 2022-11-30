// let integers = [2, 4, 0, 100, 4, 11, 2602, 36];
let integers = [160, 3, 1719, 19, 11, 13, -21]

function findOutlier(integers) {
    let evens = integers.filter(number => number % 2 == 0);
    let odds = integers.filter(number => number % 2 != 0);
    if (evens.length === 1) {
        return evens[0];
    } else if (odds.length === 1) {
        return odds[0];
    }
}

console.log(findOutlier(integers))