let ratings = document.querySelectorAll(".bttnselect");
let submit = document.getElementById("submit");
let ratingButtonClicked = false;

// Loop through each rating button to add an event listener
ratings.forEach(function (rating) {
  rating.addEventListener("click", function () {
    ratingButtonClicked = true;

    // Remove 'active' class from all buttons
    ratings.forEach((btn) => btn.classList.remove("active"));

    // Add 'active' class to the clicked button
    rating.classList.add("active");

    // Store the rating value in localStorage
    localStorage.setItem("selectedRating", rating.textContent);
  });
});

submit.addEventListener("click", function () {
  if (ratingButtonClicked) {
    // Navigate to submit.html
    window.location.href = "submit.html";
  } else {
    alert("Please click a rating button before submitting.");
  }
});
