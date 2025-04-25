// lab.js - Transportation Info Script
// Author: Your Name
// Date: 2025-04-24

// Variables
var make = "Toyota";
var model = "Camry";
var color = "Blue";
var year = 2015;
var ownIt = true;

// Calculate the age of the vehicle
var currentYear = new Date().getFullYear();
var age = currentYear - year;

// Output
document.writeln("Make: " + make + "<br>");
document.writeln("Model: " + model + "<br>");
document.writeln("Color: " + color + "<br>");
document.writeln("Year: " + year + "<br>");
document.writeln("Do I own it? " + ownIt + "<br>");
document.writeln("Age: " + age + "<br>");

