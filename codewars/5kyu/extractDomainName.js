let url = "https://youtube.com";

function domainName(url) {
  let domain = url
    .replace("http://", "")
    .replace("www.", "")
    .replace("https://", "");
  let domArr = domain.split(".");
  return domArr[0];
}
console.log(domainName(url));
