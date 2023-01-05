function generateHashtag (str) {
    // join words
    // capitalize first letter
    // add hashtag
    // longer than 140 || empty return FALSE

    let arr = str.split(" ");
    let wordArr = arr.filter(x => x !== "");
    let capitalizer = wordArr.map(x => x[0].toUpperCase() + x.slice(1));
    let hashtag = "#" + capitalizer.join("");

    if(hashtag.length > 140 || hashtag === ""){
        return false;
    } 
    else if ( hashtag === "#"){
        return false;
    } else {
        return hashtag;
    }

}

console.log(generateHashtag("hello      cool   friend"))
// #HelloCoolFriend