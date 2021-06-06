// selection
const allBtn = document.querySelectorAll(".btn");
const column = document.querySelectorAll(".column");
// Initial Image
showImage(4);
// event listener
allBtn.forEach((singleBtn) => {
  singleBtn.addEventListener("click", (e) => {
    currentBtnActive(e);
    showImage(e);
  });
});
function showImage(e) {
  for (let i = 0; i < column.length; i++) {
    if (e == 4) {
      column[i].style.flex = "25%";
    } else if (e.target.value == 1) {
      column[i].style.flex = "100%";
    } else if (e.target.value == 2) {
      column[i].style.flex = "50%";
    } else {
      column[i].style.flex = "25%";
    }
  }
}
function currentBtnActive(e) {
  const currentActive = document.querySelector(".active");
  currentActive.className = currentActive.className.replace("active", "");
  e.target.classList.add("active");
}