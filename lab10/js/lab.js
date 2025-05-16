/*
   lab.js - Appends poem lines to an output div one by one with each click,
   and resets after the last line.

   Requirements: jQuery must be loaded for this script to work.

   Author: Your Name
   Date: 2025
*/

// Poem lines to display
const poemLines = [
    "The sun slips low behind the hill,",
    "And shadows stretch across the field.",
    "A breeze moves gently through the trees,",
    "As dusk arrives on silent wheels.",
    "Night hums a soft and steady tune,",
    "And stars blink wide into the sky.",
    "Each moment rests without a sound,",
    "While time drifts quietly passing by."
  ];
  
  let currentLine = 0;  // Tracks which line to show next
  
  $(document).ready(function () {
    $("#make-convo").click(function () {
      if (currentLine < poemLines.length) {
        // Show next line
        const line = poemLines[currentLine];
        $("#output").append('<div class="text"><p>' + line + '</p></div>');
        currentLine++;
      } else {
        // All lines shown - reset
        $("#output").empty();
        currentLine = 0;
      }
    });
  });
  