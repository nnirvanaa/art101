/*
    lab.js - Working with APIs using jQuery $.ajax() on button click
    Author: Your Name
    Date: 2025
*/

$(document).ready(function() {
    $("#load-comic").click(function() {
      $.ajax({
        // Use CORS proxy to avoid blocked request
        url: "https://cors-anywhere.herokuapp.com/https://xkcd.com/info.0.json",
        type: "GET",
        dataType: "json",
  
        success: function(comicObj) {
          console.log("Comic loaded:", comicObj);
  
          let comicHTML = `
            <h3>${comicObj.title}</h3>
            <img src="${comicObj.img}" 
                 alt="${comicObj.alt}" 
                 title="${comicObj.alt}">
            <p>${comicObj.alt}</p>
          `;
  
          $("#output").html(comicHTML);
        },
  
        error: function(jqXHR, textStatus, errorThrown) {
          console.log("Error:", textStatus, errorThrown);
          $("#output").html("<p>Could not load comic. Please try again.</p>");
        }
      });
    });
  });
  