// Mobilni - Header
const navigationMobile = document.querySelector(".navigation-mobile");
const navigationMobileList = document.querySelector(".navigation-mobile ul");
const bars = document.querySelector(".bars");
const closeButton = document.getElementById("close-button");

bars.addEventListener("click", () => {
  navigationMobile.style.width = 100 + "%";
  navigationMobileList.style.transition = "width 1s, opacity 1.2s"
  navigationMobileList.style.opacity = 1;
});

closeButton.addEventListener("click", () => {
  navigationMobile.style.width = 0;
  navigationMobileList.style.opacity = 0;
  navigationMobileList.style.transition = "width 1.4s, opacity 0.4s"
});
