// let names = [];
// let names = ["Peter"];
// let names = ["Peter", "Alex"];
// let names = ["Peter", "Alex", "Joe"];
// let names = ["Peter", "Alex", "Joe", "Jamie"];
let names = ["Peter", "Alex", "Joe", "Jamie", "George"];

function likes(names) {
  // 0 likes
  if (names.length === 0) {
    return `no one likes this`;
  }
  // 1 like
  else if (names.length === 1) {
    return `${names[0]} likes this`;
  }
  // 2 likes
  else if (names.length === 2) {
    return `${names[0]} and ${names[1]} like this`;
  }
  // 3 likes
  else if (names.length === 3) {
    return `${names[0]}, ${names[1]} and ${names[2]} like this`;
  }
  // 4+ likes
  else {
    return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
  }
}

console.log(likes(names));
