function expandedForm(num) {
  const digits = num.toString().split("").reverse();
  let expanded = [];

  for (let i = 0; i < digits.length; i++) {
    if (digits[i] !== "0") {
      // repeat() adds zeros for the remaining i's
      expanded.push(digits[i] + "0".repeat(i));
    }
  }

  return expanded.reverse().join(" + ");
}

console.log(expandedForm(12)); // '10 + 2'
console.log(expandedForm(42)); // '40 + 2'
console.log(expandedForm(70304)); // '70000 + 300 + 4'
