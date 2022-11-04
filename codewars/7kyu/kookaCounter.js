input = "haHaHahaHaha";

function laughCounter(input) {
  return (laughing.match(/(Ha)+|(ha)+/g) || []).length;
}

console.log(laughCounter(input));
