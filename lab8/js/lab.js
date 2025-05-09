/*
 * lab.js - Anon Functions and Callbacks
 * Author: Your Name
 * Created: May 8, 2025
 * License: Public Domain
 */

// Create an array of numbers
const numArray = [5, 10, 15, 20, 25, 30];

// Named function to multiply each number by 100
function changeEachElement(num) {
    return num * 100;
}

// Use map with the named function
console.log("Named Function Results:");
console.log(numArray.map(changeEachElement));

// Use an anonymous function to add 25 to each number
var newArray = numArray.map(function(x) {
    return x + 25;
});
console.log("Anonymous Function Results:");
console.log(newArray);

// Store the result of the named function in a variable and print
var mapResults = numArray.map(changeEachElement);
console.log("Stored Named Function Results:");
console.log(mapResults);

// Store the result of the anonymous function in a variable and print
var anonResults = numArray.map(function(x) {
    return x + 25;
});
console.log("Stored Anonymous Function Results:");
console.log(anonResults);
// Display results on the webpage
document.write("<h2>Console Output</h2>");
document.write("<p><strong>New Array:</strong> " + newArray.join(", ") + "</p>");
document.write("<p><strong>Named Function Results:</strong> " + mapResults.join(", ") + "</p>");
document.write("<p><strong>Anonymous Function Results:</strong> " + anonResults.join(", ") + "</p>");
