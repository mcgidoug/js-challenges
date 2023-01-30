class User {
  constructor(email, name) {
    this.email = email;
    this.name = name;
  }
}

var userOne = new User("doug@doug.com", "doug");
var userTwo = new User("charlie@charlie.com", "charlie");

console.log(userOne);
console.log(userTwo);

// creating users with a class constructor
