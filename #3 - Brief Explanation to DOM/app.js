//imp! Console logging the document
console.log(document)

//imp! Adding text to the p tag
document.getElementById('paragraph').textContent = "Hello world";

//imp! Creating a new element using DOM
let element = document.createElement('h1')
element.textContent = "New Heading";
document.body.appendChild(element);