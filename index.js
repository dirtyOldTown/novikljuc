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




