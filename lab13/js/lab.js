/*
   lab.js - Toggle FizzBuzzBoom output
   Author: Your Name
   Date: May 2025
*/

function fizzBuzzBoom() {
    let outputStr = "";
  
    for (let i = 1; i <= 200; i++) {
      let str = "";
  
      if (i % 3 === 0) str += "Fizz";
      if (i % 5 === 0) str += "Buzz";
      if (i % 7 === 0) str += "Boom";
  
      if (str === "") {
        str = i;
      }
  
      outputStr += str + "<br>";
    }
  
    $("#output").html(outputStr);
  }
  
  $(document).ready(function () {
    let isVisible = false;
  
    $("#showResults").click(function () {
      if (!isVisible) {
        fizzBuzzBoom();
        $("#output").slideDown();
        $(this).text("Hide Results");
      } else {
        $("#output").slideUp();
        $(this).text("Show Results");
      }
      isVisible = !isVisible;
    });
  
    // Start with output hidden
    $("#output").hide();
  });
  