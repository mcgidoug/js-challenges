str = "abcde, cdeeef";

function solution(str) {
  let strArr = str.split(",");
  let wordOne = strArr[0].toString();
  let wordTwo = strArr[1].toString();
  let lastLetterOne = wordOne.charAt(wordOne.length - 1);
  let lastLetterTwo = wordTwo.charAt(wordTwo.length - 1);

  if (lastLetterOne === lastLetterTwo) {
    return true;
  } else {
    return false;
  }
}

console.log(solution(str));

// this solution ONLY interprets the last letter of each string (MISINTERPRETED)
