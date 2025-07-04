const tabLinks = document.querySelectorAll(".tab-link");
const tabContents = document.getElementsByClassName("tab-content");

function display(tab, tablink) {
  // Reset properties and attributes
  for (let i = 0; i < tabContents.length; i++) {
    tabContents[i].style.display = "none";
  }
  for (let i = 0; i < tabLinks.length; i++) {
    tabLinks[i].classList.remove("active");
  }

  // Editing the current tab link and relation content
  let item = document.getElementById(tab);
  item.style.display = "flex";
  tablink.classList.add("active");
}
function tabsHandler(e) {
  let tablink = e.target.closest(".tab-link");
  let tab = e.target.dataset.tab;
  if (!tab) return;
  display(tab, tablink);
}

document.addEventListener("click", tabsHandler);

// Initilize default tab-content
  let standardniKljučevi = document.getElementById("standardni");
  standardniKljučevi.style.display = "flex";
  tabLinks[0].classList.add("active");

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



