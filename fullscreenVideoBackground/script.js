function playPause() {
  const video = document.querySelector("video");
  const btnNameToggle = document.getElementById("pauseBtn");
  if (video.paused) {
    video.play();
    btnNameToggle.textContent = "Pause";
  } else {
    video.pause();
    btnNameToggle.textContent = "Play";
  }
}
