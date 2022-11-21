// ['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'
let words = ["hello", "world", "this", "is", "great"];

function smash(words) {
  let sentence = words.join(" ");
  return sentence;
}

console.log(smash(words));
