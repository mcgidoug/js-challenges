function solution(str) {
    if(str.length == 0){
      return [];
    }

    if(str.length == 1){
        let arr = []
        arr.push(str.slice(-1)+ "_")
        return arr;
    }
    
    if (str.length % 2 === 0) {
      return str.match(/.{1,2}/g);
    } 

    else {
      var temp = str.slice(-1)+ "_"
      var copy = str.slice(0,-1);
      var arr = copy.match(/.{1,2}/g);
      // check value of arr before pushing to it
      if(arr){
          arr.push(temp)
      }else{
          arr = []
      }
      return arr;
    }
  }
  

console.log(solution("hello")); // Output: ["he", "ll", "o_"]
console.log(solution("helloworld")); // Output: ["he", "ll", "ow", "or", "ld"]
console.log(solution("")); // Output: []
console.log(solution("v")); // Output: ["v_"]
