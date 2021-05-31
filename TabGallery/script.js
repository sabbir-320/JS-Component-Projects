
const expandImg = document.querySelector(".expand-img")
const imgName = document.querySelector(".img-name")
function showTab(image){
    expandImg.src = image.src
    expandImg.parentElement.style.display = "block"
     imgName.textContent = image.alt
}
function closeGallery(n){
    n.parentElement.style.display = "none"
}