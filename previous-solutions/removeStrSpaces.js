str = "d dkjn  df sd   lks   sd d   k k  l  ";

function noSpace(str) {
  const strJoin = str.replace(/\s/g, "");
  return strJoin;
}

console.log(noSpace(str).toString());
// prints func
