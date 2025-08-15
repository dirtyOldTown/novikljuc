// Testemonials

// Testemonials content
const testemonials = [
  {
    text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    `,
    name: "Milorad Stokić",
    image: 'images/avatar2.jpg',
    role: "Mašinbravar"
  },
   {
    text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    `,
    name: "Miladojka Junajted",
    image: 'images/avatar3.jpg',
    role: "Ključar"
  },
   {
    text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
         when an unknown printer took a galley. `,
    name: "Boba Vučenović",
    image: 'images/avatar1.jpg',
    role: "Vlasnik ključarske radnje"
  }
];

// Testemonials execute
let idx = 0;
const testemonialText = document.querySelector(".testemonial-text");
const testemonialName = document.querySelector(".name");
const testemonialRole = document.querySelector(".role");
const testemonialImage = document.querySelector(".testemonial-image img");

function updateTestemonials() {
  const {text, name, image, role} = testemonials[idx];

  // Change testemonial content
  testemonialImage.src = image;
  testemonialText.innerHTML = text;
  testemonialName.innerHTML = name;
  testemonialRole.innerHTML = role;

  idx++;
  
  if (idx > testemonials.length - 1) {
    idx = 0;
  }
}

// Preload images
const images = [
  "images/avatar1.jpg",
  "images/avatar2.jpg",
  "images/avatar3.jpg",
];

const progressBar = document.querySelector(".progress-bar");

function preloadImages(images, index) {
  if (index < images.length) {
    let img = new Image();
    img.src = images[index];
    images[index] = img;
    images[index].onload = function() {
      preloadImages(images, ++index);
    }
  }
}

preloadImages(images, 0);

setTimeout(() => {
  progressBar.style.animation = "grow 10s linear infinite";
  setInterval(updateTestemonials, 10000);
}, 1000);


  

