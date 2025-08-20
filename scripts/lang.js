const switchHandler= document.querySelector(".switch");

//Function to update content
function updateContent(langData) {
  const elements = document.querySelectorAll("[data-lang]");
  elements.forEach(element => {
  const key = element.getAttribute("data-lang");
  element.innerHTML = langData[key];
  });
}

// Change header language content
function changeMainLanguageContent(lang) {
  const mainLanguageImage = document.querySelector(".switch img");
  mainLanguageImage.src = `images/${lang}.webp`;

  const mainLanguageName = document.querySelector(".switch .lang-name");
  mainLanguageName.textContent = lang.toUpperCase();
}

// Function to set the language preference
function setLanguagePreference(lang) {
  localStorage.setItem("language", lang);
  location.reload();
}

// Function to fetch language data
async function fetchLanguageData(lang) {
  const response = await fetch(`languages/${lang}.json`);
  return response.json();
}

// Function to change language
async function changeLanguage(lang) {
  setLanguagePreference(lang);
  const langData = await fetchLanguageData(lang);
  updateContent(langData);
  changeMainLanguageContent(lang);
}

// Call updateContent() on page load
window.addEventListener("DOMContentLoaded", async () => {
  const userPreferredLanguage = localStorage.getItem("language") || "sr";
  const langData = await fetchLanguageData(userPreferredLanguage);
  createLangContainer(userPreferredLanguage);
  changeMainLanguageContent(userPreferredLanguage);
  updateContent(langData);
});

// Create language content container
function createLangContainer(lang) {
  const element = document.createElement("div");
  element.classList.add("languages-container");
  if (lang == "en") {
    element.innerHTML = `<div class="sr" onclick="changeLanguage('sr')"><img src="images/sr.webp" width="24"><span class="lang-container-sr">Srpski</span></div>`;
    switchHandler.appendChild(element);
  } else {
      element.innerHTML = `<div class="en" onclick="changeLanguage('en')"><img src="images/en.webp" width="24"><span class="lang-container-en">English</span></div>`;
      switchHandler.appendChild(element);
  }
  
}

switchHandler.addEventListener("click", (e) => {
  const langContainer = document.querySelector(".languages-container");
  langContainer.classList.toggle("visible");
}, true)

// Logo on scroll 
let img = document.querySelector(".header-logo img");

document.addEventListener("scroll", (e) => {
  let limit = window.pageYOffset;
  console.log(limit)
  if (limit > 200) {
    img.style.width = 32 + "px";
    switchHandler.style.marginTop = "1rem";
  } else {
    img.style.width = 64 + "px";
    switchHandler.style.marginTop = "2rem";
  }
});

// Scroll to top
let div = document.createElement("div");
div.innerHTML = '<i class="fa-solid fa-angle-up"></i>';
div.classList.add("scroll-to-top")
document.body.append(div);
document.addEventListener("scroll", () => {
  let limit = window.pageYOffset;
  if (limit > 700) {
      div.style.display = "block";
  } 
  else if (limit < 199) {
    div.style.display = "none";
  }
})

div.addEventListener("click", () => {
  document.body.scrollIntoView({
    behavior: "smooth",
    block:"start"
  });
});
