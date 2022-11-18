let s = "hello my name is jim";

function findShort(s) {
  let arr = s.split(" ");
  let sort = arr.sort((a, b) => b.length - a.length);
  let shortestElement = sort.slice(-1);
  let elementToString = shortestElement.toString();
  return elementToString.length;
}

console.log(`Length of the shortest string is: ${findShort(s)}`);
