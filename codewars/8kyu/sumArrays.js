const numbers = [1, 5.2, 4, 0, -1];

function sum (numbers) {
const initialValue = 0;

const sumWithInitial = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue) 

return sumWithInitial;
}

console.log(sum(numbers))