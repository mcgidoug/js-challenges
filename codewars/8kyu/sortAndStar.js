// DOES NOT PASS IN CODEWARS... (LAST ONE DOES)

let s = [
  "bitcoin",
  "take",
  "over",
  "the",
  "world",
  "maybe",
  "who",
  "knows",
  "perhaps",
];

function twoSort(s) {
  let sorted = s.sort((a, b) => a.localeCompare(b));
  return sorted[0].split("").join("***");
}

console.log(twoSort(s));

// ==============================================================================================

// from chat gpt (ALSO DOES NOT PASS IN CODEWARS LOL)

function sortMe(arr) {
  // Sort the array in ascending order
  arr.sort((a, b) => a.localeCompare(b));

  // Get the first string in the array
  let firstString = arr[0];

  // Insert "***" between each letter of the string
  return firstString.split("").join("***");
}

console.log(sortMe(["bitcoin", "ethereum", "ripple", "monero"])); // "b***i***t***c***o***i***n"
console.log(sortMe(["apple", "banana", "cherry", "date"])); // "a***p***p***l***e"
console.log(sortMe(["elderberry", "fig", "grape", "honeydew"])); // "e***l***d***e***r***b***e***r***r***y"

// ==============================================================================================

// PASSED VERSION:

twoSort = (s) => s.sort()[0].split("").join("***");
