const audio = document.getElementById("audio");
const playBtn = document.getElementById("play-btn");
const seekBar = document.getElementById("seek-bar");
const timeDisplay = document.getElementById("time");

window.addEventListener("DOMContentLoaded", function () {
  audio.play();
  playBtn.textContent = "⏸️";
});

function updateTime() {
  seekBar.value = audio.currentTime;
  timeDisplay.textContent =
    formatTime(audio.currentTime) + " / " + formatTime(audio.duration);
}

function formatTime(seconds) {
  const min = Math.floor(seconds / 60);
  const sec = Math.floor(seconds % 60);
  return `${min}:${sec < 10 ? "0" : ""}${sec}`;
}

audio.addEventListener("timeupdate", updateTime);

audio.addEventListener("ended", () => {
  audio.currentTime = 0;
  audio.play();
});

playBtn.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    playBtn.textContent = "⏸️";
  } else {
    audio.pause();
    playBtn.textContent = "▶️";
  }
});

seekBar.addEventListener("input", () => {
  audio.currentTime = seekBar.value;
});

const showMusic = document.querySelector(".show-music");
const hideMusic = document.querySelector(".hide-music");
const musicBlock = document.querySelector(".music");

function toggleActive() {
  musicBlock.classList.toggle("active");
}

hideMusic.addEventListener("click", toggleActive);
showMusic.addEventListener("click", toggleActive);
