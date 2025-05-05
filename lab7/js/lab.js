// index.js - Lab 7: Functions
// Author: Your Name
// Date: Today's Date

// Function to sort the letters of a name
function sortUserName() {
  var userName = window.prompt("Please enter your name:");
  console.log("User Name:", userName);
  // Split the name into an array of characters, sort them, and join back into a string
  var nameArray = userName.split('');
  var nameArraySort = nameArray.sort();
  var nameSorted = nameArraySort.join('');
  console.log("Sorted Name:", nameSorted);
  return nameSorted;
}

// Output
document.writeln("Here's your sorted name: ",
  sortUserName(), "</br>");