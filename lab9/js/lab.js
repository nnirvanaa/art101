/*
lab.js – JavaScript/jQuery script for interactive Lab 9 page

Author: Litzy Mozyqueda-Franyutti
Date: May 12, 2025
*/

// Toggle content in Challenge section
$("#Challenge").append('<button id="button-challenge">Click Me For Response</button>');
$("#button-challenge").click(function () {
  $("#Challenge").toggleClass("special");

  let current = $("#Challenge p:last").html();
  if (current.startsWith("This lab introduced")) {
    $("#Challenge p:last").html("Text");
  } else {
    $("#Challenge p:last").html(
      "This lab introduced how to use external libraries like jQuery to simplify JavaScript tasks. " +
      "Using jQuery allowed for quick DOM manipulation, such as appending buttons and toggling classes, without writing long vanilla JavaScript code."
    );
  }
});

// Toggle content in Problems section
$("#Problems").append('<button id="button-problems">Click Me For Response</button>');
$("#button-problems").click(function () {
  $("#Problems").toggleClass("special");

  let current = $("#Problems p:last").html();
  if (current.startsWith("One issue involved")) {
    $("#Problems p:last").html("Text");
  } else {
    $("#Problems p:last").html(
      "One issue involved making sure jQuery was loaded before the custom script. " +
      "Another problem was related to file paths—especially linking the JavaScript and CSS files correctly. " +
      "Once the order and locations were fixed, the buttons appeared and functioned as expected."
    );
  }
});

// Toggle content in Results section
$("#Results").append('<button id="button-results">Click Me For Response</button>');
$("#button-results").click(function () {
  $("#Results").toggleClass("special");

  let current = $("#Results p:last").html();
  if (current.startsWith("The final result")) {
    $("#Results p:last").html("Text");
  } else {
    $("#Results p:last").html(
      "The final result is a responsive page with interactive buttons for each section. " +
      "Clicking a button updates the text and styling dynamically. This shows how jQuery simplifies interactivity in web projects."
    );
  }
});

// Show screenshots (one-time only)
$("#output").append('<button id="button-screenshots">Click to View Lab Screenshots</button>');
$("#button-screenshots").one("click", function () {
  $("#output").append(`
    <div>
      <h3>Lab 9 Screenshots</h3>
      <img src="img/lab9-screenshot1.jpg" alt="JSBin Screenshot" width="600">
      <img src="img/lab9-screenshot2.jpg" alt="lab.js Screenshot" width="600">
      <img src="img/lab9-screenshot3.jpg" alt="index.html Screenshot" width="600">
    </div>
  `);
});
