"Use stricts"; // Treate all JS code as newr version

// alert(3+34); 

/*
 We are using node.js not browser   // The alert() function is built into the browser, not JavaScript itself.
When JavaScript runs in a web browser (Chrome, Firefox, Edge), the browser provides extra features called Web APIs.
It runs JavaScript directly on your computer using Google's V8 JavaScript engine, but it does not have browser APIs like:

alert()
document
window
navigator
localStorage

So when you write:

alert("Sunny");

Node.js looks for a function named alert.

Since none exists, it throws an error:

ReferenceError: alert is not defined 
*/