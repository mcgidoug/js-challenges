function removeAnchor(link) {
    return link.split('#')[0];
  }
  
  console.log(removeAnchor("www.codewars.com#about"));
// Output: "www.codewars.com"
console.log(removeAnchor("www.codewars.com?page=1"));
// Output: "www.codewars.com?page=1"
