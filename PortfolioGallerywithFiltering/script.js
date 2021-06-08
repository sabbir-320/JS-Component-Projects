const portfolioData = [
  {
    id: 1,
    img: "https://www.w3schools.com/w3images/mountains.jpg",
    title: "Mountains",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque recusandae facilis fuga ullam necessitatibus? A veniam molestias numquam nesciunt harum.",
  },
  {
    id: 2,
    img: "https://www.w3schools.com/w3images/lights.jpg",
    title: "Lights",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque recusandae facilis fuga ullam necessitatibus? A veniam molestias numquam nesciunt harum.",
  },
  {
    id: 3,
    img: "https://www.w3schools.com/w3images/nature.jpg",
    title: "Forest",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque recusandae facilis fuga ullam necessitatibus? A veniam molestias numquam nesciunt harum.",
  },
  {
    id: 4,
    img: "https://www.w3schools.com/w3images/cars1.jpg",
    title: "Retro",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque recusandae facilis fuga ullam necessitatibus? A veniam molestias numquam nesciunt harum.",
  },
  {
    id: 5,
    img: "https://www.w3schools.com/w3images/cars2.jpg",
    title: "Fast",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque recusandae facilis fuga ullam necessitatibus? A veniam molestias numquam nesciunt harum.",
  },
  {
    id: 6,
    img: "https://www.w3schools.com/w3images/cars3.jpg",
    title: "Classic",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque recusandae facilis fuga ullam necessitatibus? A veniam molestias numquam nesciunt harum.",
  },
  {
    id: 7,
    img: "https://www.w3schools.com/w3images/people1.jpg",
    title: "Girl",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque recusandae facilis fuga ullam necessitatibus? A veniam molestias numquam nesciunt harum.",
  },
  {
    id: 8,
    img: "https://www.w3schools.com/w3images/people2.jpg",
    title: "Man",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque recusandae facilis fuga ullam necessitatibus? A veniam molestias numquam nesciunt harum.",
  },
  {
    id: 9,
    img: "https://www.w3schools.com/w3images/people3.jpg",
    title: "Woman",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque recusandae facilis fuga ullam necessitatibus? A veniam molestias numquam nesciunt harum.",
  },
];
// selector
const rowDiv = document.querySelector(".row");

// initial Show items
const initialData = portfolioData.slice(0, 9);
showItemsByBtnHandler(initialData);

const allColumn = document.querySelectorAll(".column")
console.log(allColumn);
for(let i = 0; i < allColumn.length; i++){
  console.log();
  
}
// btn handler show items
function showAll(thisBtn) {
  const allData = portfolioData.slice(0, 9);
  showItemsByBtnHandler(allData);
  activeBtn(thisBtn)
}
function nature(thisBtn) {
  const natureData = portfolioData.slice(0, 3);
  showItemsByBtnHandler(natureData, "nature");
  activeBtn(thisBtn)
}
function cars(thisBtn) {
  const carsData = portfolioData.slice(3, 6);
  showItemsByBtnHandler(carsData, "cars");
  activeBtn(thisBtn)
}
function people(thisBtn) {
  const carsData = portfolioData.slice(6, 9);
  showItemsByBtnHandler(carsData, "people");
  activeBtn(thisBtn)
}

// current active btn
function activeBtn(currentBtn){
    const currentActive = document.querySelector(".active");
    currentActive.className = currentActive.className.replace("active", "")
    currentBtn.className+= "active"
}


function showItemsByBtnHandler(data) {
  const newItem = data.map((items) => {
    const img = document.createElement("img");
    const p = document.createElement("p");
    img.src = items.img;
    img.alt = items.title;
    p.textContent = items.text;
    return { img, p };
  });

  newItem.forEach((item) => {
    const createdContentDiv = document.createElement("div");
    const showTitle = document.createElement("h3");
    showTitle.textContent = item.img.alt;
    createdContentDiv.className = "content";
    createdContentDiv.appendChild(item.img);
    createdContentDiv.appendChild(showTitle);
    createdContentDiv.appendChild(item.p);

    const createdColumnDiv = document.createElement("div");
    createdColumnDiv.className = "column";
    createdColumnDiv.appendChild(createdContentDiv);

    rowDiv.appendChild(createdColumnDiv);
  });
}
