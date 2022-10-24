// TEST: aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz
// EXPECTED: "3/56"
// INVALID CHAR = "n o p q r s t u v w x y z"

const input = "aanxxaabbfgujnbcxc";

function printerError(input) {
  let errorCount = 0;

  for (let i = 0; i < input.length; i++) {
    if (input[i] === "n") {
      errorCount++;
    }
    if (input[i] === "o") {
      errorCount++;
    }
    if (input[i] === "p") {
      errorCount++;
    }
    if (input[i] === "q") {
      errorCount++;
    }
    if (input[i] === "r") {
      errorCount++;
    }
    if (input[i] === "s") {
      errorCount++;
    }
    if (input[i] === "t") {
      errorCount++;
    }
    if (input[i] === "u") {
      errorCount++;
    }
    if (input[i] === "v") {
      errorCount++;
    }
    if (input[i] === "w") {
      errorCount++;
    }
    if (input[i] === "x") {
      errorCount++;
    }
    if (input[i] === "y") {
      errorCount++;
    }
    if (input[i] === "z") {
      errorCount++;
    }
  }
  return errorCount + "/" + input.length;
}

console.log(printerError(input).toString());
