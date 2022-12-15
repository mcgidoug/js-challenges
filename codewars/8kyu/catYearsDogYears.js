var humanYearsCatYearsDogYears = function (humanYears) {
  let catsAge;
  let dogsAge;

  if (humanYears === 1) {
    return [humanYears, 15, 15];
  }

  if (humanYears === 2) {
    return [humanYears, 24, 24];
  }

  const excessYears = humanYears - 2;
  const extraCatYears = excessYears * 4;
  const extraDogYears = excessYears * 5;

  return [humanYears, 24 + extraCatYears, 24 + extraDogYears];
};

// or...

var humanYearsCatYearsDogYears = function (humanYears) {
  let human = humanYears;
  let cat = 0;
  let dog = 0;
  // for one year
  if (humanYears === 1) {
    return [1, 15, 15];
  }
  // for two years
  if (humanYears === 2) {
    return [2, 24, 24];
  }
  // +=3 years
  else {
    let humanCat = (humanYears - 2) * 4;
    let humanDog = (humanYears - 2) * 5;
    let human = humanYears;
    let cat = 24 + humanCat;
    let dog = 24 + humanDog;
    return [human, cat, dog];
  }
};
