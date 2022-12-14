let str = "String";

function doubleChar(str) {
  return [...str].map((e) => e + e).join("");
}

console.log(doubleChar(str));
