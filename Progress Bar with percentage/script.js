let width = 1;
const showProgress = document.querySelector(".show-progress")
const showPercentage = document.querySelector(".show-percentage")

function btnHandler() {
    const stopProgress = setInterval(progress, 15)
    function progress (){
        if (width > 100) {
            clearInterval(stopProgress) 
            width = 1;
        } else {
            width++
            showProgress.style.width = width + "%";
            showPercentage.textContent = width++
        }
    }
}
