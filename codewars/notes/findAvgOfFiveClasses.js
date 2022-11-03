// FIND THE AVG OF 5 CLASSES

let class1 = [78, 89, 96, 67, 60];
let class2 = [78, 89, 56, 67, 60];
let class3 = [78, 79, 96, 67, 60];
let class4 = [78, 7, 96, 67, 60];
let class5 = [78, 85, 96, 47, 70];

let fullRoster = class1
  .concat(class2)
  .concat(class3)
  .concat(class4)
  .concat(class5);

function betterThanAverage(fullRoster) {
  return fullRoster.reduce((a, b) => a + b, 0) / fullRoster.length;
}

console.log(betterThanAverage(fullRoster));
