const arr = ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"];

function findNeedle(arr) {
  let indexPosition = arr.indexOf("needle");

  return `found the needle at position ${indexPosition}`;
}

console.log(findNeedle(arr));
