// my very long and convoluted way to solving this problem that I was determined to complete this way however... it did not work out.
// this solution will not account for strings with - and _

let str = "the_stealth_warrior";

function toCamelCase(str) {
  if (str.charAt(0) == str.charAt(0).toUpperCase() && str.includes("-")) {
    let strSplit = str.split("-");
    let upperLetter = strSplit.map((x) => x.charAt(0).toUpperCase());
    let endChar = strSplit.map((x) => x.substr(1));
    let draftStr = "";
    for (let i = 0; i < upperLetter.length; i++) {
      draftStr = draftStr + upperLetter[i] + endChar[i];
    }
    let finalStrPt1 = draftStr.charAt(0).toLowerCase();
    let finalStrPt2 = draftStr.substr(1);
    return draftStr;
  }
  if (str.charAt(0) == str.charAt(0).toUpperCase() && str.includes("_")) {
    let strSplit = str.split("_");
    let upperLetter = strSplit.map((x) => x.charAt(0).toUpperCase());
    let endChar = strSplit.map((x) => x.substr(1));
    let draftStr = "";
    for (let i = 0; i < upperLetter.length; i++) {
      draftStr = draftStr + upperLetter[i] + endChar[i];
    }
    let finalStrPt1 = draftStr.charAt(0).toLowerCase();
    let finalStrPt2 = draftStr.substr(1);
    return draftStr;
  }
  if (str === "") {
    return str;
  }
  if (str.includes("-")) {
    let strSplit = str.split("-");
    let upperLetter = strSplit.map((x) => x.charAt(0).toUpperCase());
    let endChar = strSplit.map((x) => x.substr(1));
    let draftStr = "";
    for (let i = 0; i < upperLetter.length; i++) {
      draftStr = draftStr + upperLetter[i] + endChar[i];
    }
    let finalStrPt1 = draftStr.charAt(0).toLowerCase();
    let finalStrPt2 = draftStr.substr(1);
    return `${finalStrPt1}${finalStrPt2}`;
  }
  if (str.includes("_")) {
    let strSplit = str.split("_");
    let upperLetter = strSplit.map((x) => x.charAt(0).toUpperCase());
    let endChar = strSplit.map((x) => x.substr(1));
    let draftStr = "";
    for (let i = 0; i < upperLetter.length; i++) {
      draftStr = draftStr + upperLetter[i] + endChar[i];
    }
    let finalStrPt1 = draftStr.charAt(0).toLowerCase();
    let finalStrPt2 = draftStr.substr(1);
    return `${finalStrPt1}${finalStrPt2}`;
  }
}

console.log(toCamelCase(str));
