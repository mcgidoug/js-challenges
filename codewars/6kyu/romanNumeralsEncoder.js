function toRoman(num) {
    const roman = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1
    };

    let result = "";
    // for...in loop looping over roman object
    for (let key in roman) {
        // while num >= roman object - add key to result and subtract that value from num
      while (num >= roman[key]) {
        result += key;
        num -= roman[key];
      }
    }
    return result;
  }

  console.log(toRoman(1990)); // MCMXC
console.log(toRoman(2008)); // MMVIII
console.log(toRoman(1666)); // MDCLXVI
