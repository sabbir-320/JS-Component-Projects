const progressShow = document.querySelector(".progressBar")
window.addEventListener("scroll", ()=>{
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
    const totalScrolled = (winScroll / height) * 100;
    progressShow.style.width = totalScrolled + "%"
})