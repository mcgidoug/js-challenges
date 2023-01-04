function pigIt(str) {
    let finalStr = "";
    let arr = str.split(" ");
    let pigLatin = arr.map(word => {
      if (/[^a-zA-Z]/.test(word)) {
          return word;
      } else {
          const firstLetter = word.substring(0,1);
          const restOfWord = word.slice(1);
          return restOfWord + firstLetter + "ay";
      }
    });
    return pigLatin.join(" ");
  };

console.log(pigIt("pig latin is cool !"))
// igpay atinlay siay oolcay !

// NOTE: this solution is not perfect because it will return "cool!" if there is no space between "cool" and "!"
