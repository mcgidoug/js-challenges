function isAnagram(test, original) {
  let a = test.toLowerCase().split("").sort().join("");
  let b = original.toLowerCase().split("").sort().join("");

  if (a === b) {
    return true;
  } else {
    return false;
  }
}
