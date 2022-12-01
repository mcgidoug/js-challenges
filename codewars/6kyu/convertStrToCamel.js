// lol

let str = "the-stealth_warrior";

function toCamelCase(str) {
  // if string is empty
  if (str === "") {
    return str;
  }
  //   first char CAP with -
  if (str.charAt(0) == str.charAt(0).toUpperCase() && str.includes("-")) {
    let strSplit = str.split(/[_-]/g);
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
  //   first char CAP with _
  if (str.charAt(0) == str.charAt(0).toUpperCase() && str.includes("_")) {
    let strSplit = str.split(/[_-]/g);
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
  // cases with -
  if (str.includes("-")) {
    let strSplit = str.split(/[_-]/g);
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
  //   cases with  _
  if (str.includes("_")) {
    let strSplit = str.split(/[_-]/g);
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
