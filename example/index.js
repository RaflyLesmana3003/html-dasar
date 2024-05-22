const body = document.body;

// Creating a new paragraph element and setting attributes and styles
const paragraph = document.createElement('p');
paragraph.textContent = "Welcome to my website!";
paragraph.setAttribute('id', 'dynamicParagraph'); // Setting an ID attribute
paragraph.classList.add('styled-text'); // Adding a class
paragraph.style.cssText = "color: blue; font-size: 20px;"; // Setting multiple styles at once

// Creating a new anchor (link) element and setting attributes
const link = document.createElement('a');
link.textContent = "Click here to visit Google";
link.setAttribute('href', "https://google.com");
link.setAttribute('id', 'dynamicLink'); // Setting an ID attribute
link.classList.add('styled-link'); // Adding a class

// Appending the paragraph and link to the body of the document
body.appendChild(paragraph);
body.appendChild(link);

// Adding an event listener to the link
link.addEventListener('click', function(event) {
    alert('You are about to leave the page!');
});

// Selecting the newly created elements by their IDs
const existingParagraph = document.getElementById('dynamicParagraph');
const existingLink = document.getElementById('dynamicLink');

// Logging the text content of the selected elements
console.log(existingParagraph.textContent);
console.log(existingLink.textContent);

// Selecting the newly created elements by their IDs
const existingParagraph1 = document.querySelector('#id');
const existingLink2 = document.getElementById('.class');

// Logging the text content of the selected elements
console.log(existingParagraph.textContent);
console.log(existingLink.textContent);