// creates a random 6 digit pin for the user

function randomNumber() {
    let pinArr = new Array(6).fill(undefined)
    for (let i = 0; i < pinArr.length; i++) {
        if(pinArr[i] === undefined){
            pinArr[i] = Math.round(Math.random() * 9)
        }
    }
    return pinArr.join("");
  }

console.log(randomNumber())