function friend(friends) {
  return friends.filter((word) => word.length == 4);
}

// or...

let friends = ["Doug", "Kieran", "Mark", "Ryan"];

function friend(friends) {
  let realFriends = [];
  for (let i = 0; i < friends.length; i++) {
    if (friends[i].length == 4) {
      realFriends.push(friends[i]);
    }
  }
  return realFriends;
}

console.log(friend(friends));
