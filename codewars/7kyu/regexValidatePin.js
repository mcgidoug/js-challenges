let pin = "453g445";

function validatePIN(pin) {
  let nonNum = "^[0-9]*$";

  //   checks if pin contains ONLY numbers
  if (pin.match(nonNum)) {
    // runs function to test length
    if (pin.length === 4 || pin.length === 6) {
      return true;
    } else {
      return false;
    }
  }
  //   returns false if containing anything that is NaN
  else {
    return false;
  }
}

console.log(validatePIN(pin));
