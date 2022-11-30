// upper
// lower
// numbers
// specials
// MUST COUNT NUMBER OF OCCURRENCES OF ALL CHAR ABOVE
let s = "*'&ABCDabcde12345";

function solve(s) {
  let upper = (s.match(/[A-Z]/g) || []).length;
  let lower = (s.match(/[a-z]/g) || []).length;
  let numbers = (s.match(/[0-9]/g) || []).length;
  let specials = (s.match(/[^A-Z0-9]/gi) || []).length;

  return [upper, lower, numbers, specials];
}

console.log(solve(s));
