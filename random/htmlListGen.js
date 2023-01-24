// write func that generates a ul with li elements inside

function generateList() {
  // create a new unordered list element
  var ul = document.createElement("ul");

  // create 5 list item elements
  for (var i = 0; i < 5; i++) {
    var li = document.createElement("li");
    // + 1 bc items start at 0 in innerHTML
    li.innerHTML = "List item " + (i + 1);
    ul.appendChild(li);
  }

  // append the list to the body of the HTML document
  document.body.appendChild(ul);
}

generateList();

// expected (with bullet points in html)
// List item 1
// List item 2
// List item 3
// List item 4
// List item 5
