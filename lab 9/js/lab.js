/*
   lab.js - This simple JavaScript/jQuery script uses buttons to modify some elements on the page

   Requirements: jQuery must be loaded for this script to work.

   Author: Litzy Mozyqueda-Franyutti
   Date: May 12, 2025
*/

$(document).ready(function() {

    // Add button to Challenge section
    $("#Challenge").append("<button id='button-challenge'>Click Me For Response</button>");
    $("#button-challenge").one("click", function () {
      $("#Challenge").toggleClass("special");
      $("#Challenge p:last").html("This lab introduced how to use external libraries like jQuery to simplify JavaScript tasks. The main challenge was learning how to correctly select elements and apply methods using the jQuery syntax.");
    });
  
    // Add button to Problems section
    $("#Problems").append("<button id='button-problems'>Click Me For Response</button>");
    $("#button-problems").one("click", function () {
      $("#Problems").toggleClass("special");
      $("#Problems p:last").html("One issue involved making sure jQuery was loaded before the custom script. Another involved understanding how event listeners work differently using jQuery’s syntax.");
    });
  
    // Add button to Results section
    $("#Results").append("<button id='button-results'>Click Me For Response</button>");
    $("#button-results").one("click", function () {
      $("#Results").toggleClass("special");
      $("#Results p:last").html("The final result is a responsive page with interactive buttons. jQuery made it easier to target sections and update content cleanly.");
  
      // Display images only, no labels
      $("#output").html(`
        <img src="img/lab9-screenshot1.jpg" width="600"><br><br>
        <img src="img/lab9-screenshot2.jpg" width="600"><br><br>
        <img src="img/lab9-screenshot3.jpg" width="600">
      `);
    });
  
  });
  