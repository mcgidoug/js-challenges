const points = [40, 100, 1, 5, 25, 10];

function solution(points) {
  if (points === null) {
    return [];
  }

  let sorted = points.sort(function (a, b) {
    return a - b;
  });
  return sorted;
}

console.log(solution(points));
