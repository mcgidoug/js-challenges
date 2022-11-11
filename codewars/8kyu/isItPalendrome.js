let str = "racecar";

function isPalindrome(str) {
  let strLow = str.toLowerCase();
  let strRev = str.toLowerCase().split("").reverse().join("");
  if (strRev === strLow) {
    return true;
  } else {
    return false;
  }
}

console.log(isPalindrome(str));
