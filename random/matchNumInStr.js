let str = "foobar200";

function incrementString(str) {
  // matches num in str
  let num = Number(str.match(/\d+/)[0]);
  return num;
}

console.log(incrementString(str));
