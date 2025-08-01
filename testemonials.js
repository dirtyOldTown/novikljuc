// Preload images
  let images = [
        'images/avatar1.jpg',
        'images/avatar2.jpg',
        'images/avatar3.jpg',
    ];

    // Loads the images one at a time, then calls the callback function when all images
    // have been loaded.
    function loadImages(images, index, callback) {
        if (index < images.length) {
            let img = new Image();
            img.src = images[index];
            images[index] = img;
            images[index].onload = function() {
                loadImages(images, ++index, callback);
            };
        } else {
            callback(images);
        }
    }
    window.onload = function() {
      loadImages(images, 0, (images) => {
        // Your slideshow code goes here. This is just example code
        // of adding the images to your document once they are all loaded
        setInterval(updateTestemonials, 10000);
      });
    };


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
const progressBar = document.querySelector(".progress-bar");

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


  

