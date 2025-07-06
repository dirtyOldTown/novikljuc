// Mobilni - Header
const navigationMobile = document.querySelector(".navigation-mobile");
const navigationMobileList = document.querySelector(".navigation-mobile ul");
const bars = document.querySelector(".bars");
const closeButton = document.getElementById("close-button");

bars.addEventListener("click", () => {
  navigationMobile.style.width = 80 + "%";
  navigationMobileList.style.transition = "all 1.8s"
  navigationMobileList.style.opacity = 1;
});

closeButton.addEventListener("click", () => {
  navigationMobile.style.width = 0;
  navigationMobileList.style.opacity = 0;
  navigationMobileList.style.transition = "all 0.4s"
});
