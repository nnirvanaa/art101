$(document).ready(function () {
  const dogImages = [
    "img/lab15-screenshot1.jpg",
    "img/lab15-screenshot2.jpg",
    "img/lab15-screenshot3.jpg",
    "img/lab15-screenshot4.jpg"
  ];

  let lastIndex = -1;

  $("#show-dog").click(function () {
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * dogImages.length);
    } while (randomIndex === lastIndex);

    lastIndex = randomIndex;

    const selectedImage = dogImages[randomIndex];
    $("#dog-image").attr("src", selectedImage).fadeIn();
  });
});
