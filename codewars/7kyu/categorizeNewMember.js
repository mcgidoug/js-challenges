// https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa/train/javascript
// CATEGORIZE NEW MEMBER
// handicap ranges = -2 ---> +26  (LOWER BETTER)
// senior = 55yrs old & handicap > 7
// [age, handicap]

input = [
  [45, 12],
  [55, 21],
  [19, -2],
  [104, 20],
];

// output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]

function openOrSenior(input) {
  let list = [];
  for (let i = 0; i < input.length; i++) {
    if (input[i][0] >= 55 && input[i][1] > 7) {
      list.push("Senior");
    } else {
      list.push("Open");
    }
  }

  return list;
}

console.log(openOrSenior(input));
