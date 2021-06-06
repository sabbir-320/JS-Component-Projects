const slideData = [
  {
    id: 1,
    img: "https://www.w3schools.com/howto/img_nature_wide.jpg",
    caption: "Mountains",
  },
  {
    id: 2,
    img: "https://www.w3schools.com/howto/img_woods_wide.jpg",
    caption: "Forest",
  },
  {
    id: 3,
    img: "https://www.w3schools.com/howto/img_snow_wide.jpg",
    caption: "Ice Bar",
  },
  {
    id: 4,
    img: "https://www.w3schools.com/howto/img_mountains_wide.jpg",
    caption: "Lake",
  },
  {
    id: 5,
    img: "https://www.w3schools.com/howto/img_5terre_wide.jpg",
    caption: "Cinque Terre",
  },
  {
    id: 6,
    img: "https://www.w3schools.com/howto/img_lights_wide.jpg",
    caption: "Northern Lights",
  },
];
// selection
const img = document.querySelector(".img");
const caption = document.querySelector(".caption");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const gridContainer = document.querySelector(".grid-container");

// initial value
let currentSlide = 0;

// Default Slide Show
showSlide(currentSlide);

// Gallery Show
const allImg = slideData.map((item, index) => {
  const createdImg = document.createElement("img");
  createdImg.src = item.img
  createdImg.className = "btn-img"
  createdImg.setAttribute("value", index)
  return createdImg
})
allImg.forEach(item => {
 gridContainer.appendChild(item)
})
// Default Active Show
const btnImg = document.querySelectorAll(".btn-img");
btnImg[currentSlide].className+= " active"

// previous and Next button 
prevBtn.addEventListener("click", ()=>{
  currentSlide--
  showSlide(currentSlide);
  activeGallery()
})
nextBtn.addEventListener("click", ()=>{
  currentSlide++
  showSlide(currentSlide);
  activeGallery()
})

function showSlide(value) {
  if (value > slideData.length - 1) {
    currentSlide = 0;
  }
  if (value < 0) {
    currentSlide = slideData.length - 1;
  }
  const item = slideData[currentSlide];
  img.src = item.img;
  caption.textContent = item.caption;
}
function activeGallery(){
  const currentActive = document.querySelector(".active");
  currentActive.className = currentActive.className.replace("active", "")
  btnImg[currentSlide].className += " active"
}

btnImg.forEach(item => {
  item.addEventListener('click', (e) => {
    const targetedValue = e.target.getAttribute("value")
    currentSlide = targetedValue
    showSlide(targetedValue)
    activeGallery()
  })
})






















