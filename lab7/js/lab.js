// lab.js - Remix: Sorting name letters with personality
// Author: Nirvana Alcaraz
// Date: 2025-05-04

function remixNameSort() {
  const input = window.prompt("Yo! Type your name and let’s shuffle it:");

  console.log("Original input:", input);

  if (!input) {
    console.log("Oops, nothing entered.");
    document.getElementById("display").innerHTML = "You didn’t enter anything 😬";
    return;
  }

  const letters = input.split('');
  const remix = letters.sort().join('');

  console.log("Sorted name:", remix);

  document.getElementById("display").innerHTML = `🔥 Your remixed name is: <strong>${remix}</strong>`;
}

// Auto-run on load
remixNameSort();
