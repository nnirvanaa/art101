/*
   lab.js - This simple JavaScript/jQuery script gets a value from an input field and outputs a modified version.

   Requirements: jQuery must be loaded for this script to work.

   Author: Nirvana Alcaraz
   Date: 2025
*/

// Sorts the characters of a string in alphabetical order.
function sortString(inputString) {
    // Convert string to an array, sort it, then convert back to string
    return inputString.split('').sort().join('');
  }
  
  // Click listener for button
  $("#submit").click(function() {
    // Get value from input field
    const userName = $("#user-name").val();
  
    // Sort the input string
    const userNameSorted = sortString(userName);
  
    // Display the result inside the output div
    $("#output").html('<div class="text"><p>' + userNameSorted + '</p></div>');
  });
  