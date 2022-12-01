let str = "the-stealth-warrior";

function toCamelCase(str) {
  let strSplit = str.split("-");
  let upperLetter = strSplit.map((x) => x.charAt(0).toUpperCase());
  let endChar = strSplit.map((x) => x.substr(1));
  let draftStr = "";

  for (let i = 0; i < upperLetter.length; i++) {
    draftStr = draftStr + upperLetter[i] + endChar[i];
  }

  let finalStrPt1 = draftStr.charAt(0).toLowerCase();
  let finalStrPt2 = draftStr.substr();

  return finalStrPt1;
}

console.log(toCamelCase(str));
