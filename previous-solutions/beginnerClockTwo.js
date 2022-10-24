const hour = 3600000;
const minute = 60000;
const second = 1000;

function past(h, m, s) {
  return h * hour + m * minute + s * second;
}

console.log(past(7, 0, 0).toString());
