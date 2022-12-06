let num = 6

var countSheep = function (num){
    let arr = [];
    let sentenceArr = [];

    for (let i = 1; i <= num; i++) {
      arr.push(i);
    }
  
    for (let i = 0; i < arr.length; i++) {
         sentenceArr.push(`${arr[i]}sheep...`) 
    }

    return sentenceArr.join("");
    
  }
  

console.log(countSheep(num))