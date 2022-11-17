let l = [1, 2, "a", "b"];

function filter_list(l) {
  const onlyNumbers = l.filter((e) => typeof e === "number");
  return onlyNumbers;
}

console.log(filter_list(l));

// expected [1,2]
