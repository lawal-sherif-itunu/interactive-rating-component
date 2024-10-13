let ratings = document.querySelectorAll(".bttnselect");
let submit = document.getElementById("submit");
let ratingButtonClicked = false;
let rate = document.querySelector("span.span");
// let rateText = rate ? rate.textContent : "";

ratings.forEach(function (rating) {
  rating.addEventListener("click", function () {
    ratingButtonClicked = true;

    let rateText = rating ? rating.textContent : "";
    rate.textContent = rateText;
  });
});

submit.addEventListener("click", function () {
  if (ratingButtonClicked) {
    window.location.href = "submit.html";
  } else {
    alert("Please click the Rating button before submitting.");
  }
});
