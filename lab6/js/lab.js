/**
 * Author: Nirvana Alcaraz
 * Created: 2025
 * Lab 6 - JavaScript Arrays and Objects
 */

// Declare variables
let myTransport = ["Toyota Camry", "Metro Bus", "Loop Bus"];

let myMainRide = {
    make: "Camry",
    year: "2014",
    age: 11,
    color: "Gray"
};

// Output to the webpage
document.writeln("Getting around: " + myTransport + "<br>");

document.writeln("My Main Ride: <pre>",
    JSON.stringify(myMainRide, null, '\t'),
    "</pre>");
