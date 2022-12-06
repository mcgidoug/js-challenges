let name = "John Doe"

function abbrevName(name){
    let upper = name.toUpperCase();
    let arr = upper.split(" ");
    return `${arr[0][0]}.${arr[1][0]}`

}

console.log(abbrevName(name))