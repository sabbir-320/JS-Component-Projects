// Scroll Back To Top Button 
window.addEventListener("scroll", () => {
  const myBtn = document.getElementById("mybtn");
  if (document.body.scrollTop || document.documentElement.scrollTop > 20) {
    myBtn.style.display = "block";
  } else {
    myBtn.style.display = "none";
  }
});

function goToTop() {
  console.log("clicked");
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
// Read More Read Less Button
function openClose(){
    const moreBtn = document.querySelector(".moreBtn")
    const dots = document.querySelector(".dots")
    const moreText = document.querySelector(".more")
    console.log(moreText.style.display === "block");
    if (dots.style.display === "none") {
        dots.style.display = "inline";
        moreText.style.display = "none";
        moreBtn.innerHTML = "Read more"; 
      } else {
        dots.style.display = "none";
        moreText.style.display = "inline";
        moreBtn.innerHTML = "Read less"; 
      }
   
}
