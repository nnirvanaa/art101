/*
  lab.js - This script randomly assigns a "house" from a list.

  Author: Nirvana
  Date: 2025
*/

// Function that randomly selects a house
function sortingHat() {
  const houses = ["Air Nomads", "Water Tribe", "Earth Kingdom", "Fire Nation"];
  const randomIndex = Math.floor(Math.random() * houses.length);
  return houses[randomIndex];
}

// Button click event
$("#button").click(function () {
  const name = $("#input").val();
  const house = sortingHat();
  $("#output").html(
    "<p>" + name + ", the Sorting Hat has sorted you into <strong>" + house + "</strong>.</p>"
  );
});
