const testemonials = [
  {
    text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    `,
    name: "Milorad Stokić",
    image: 'images/20250429_203227.jpg',
    role: "Mašinbravar"
  },
   {
    text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    `,
    name: "Miladojka Junajted",
    image: 'images/20250429_202636.jpg',
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

let idx = 0;
const testemonialText = document.querySelector(".testemonial-text");
const testemonialName = document.querySelector(".name");
const testemonialRole = document.querySelector(".role");
const testemonialImage = document.querySelector(".testemonial-image img");

function updateTestemonials(testemonials) {
  const {text, name, image, role} = testemonials[idx];
    idx++;
  if (idx > testemonials.length - 1) {
    idx = 0;
  }
  // Change testemonial content
  testemonialText.innerHTML = text;
  testemonialName.innerHTML = name;
  testemonialRole.innerHTML = role;
  testemonialImage.src = image;
}

setInterval(() => {
  updateTestemonials(testemonials)
}, 10000)
