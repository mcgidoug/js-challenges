let cc = "sasASD234523452345LKFJASDFLKJfdfg";

function maskify(cc) {
  if (cc.length <= 4) {
    return cc;
  }
  let maskedDigits = cc.slice(0, cc.length - 4).replace(/[A-Za-z0-9]/g, "#");
  let lastFour = cc.slice(cc.length - 4);

  return maskedDigits + lastFour;
}

console.log(maskify(cc));

// expected #############################fdfg
