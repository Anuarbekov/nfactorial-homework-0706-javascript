const video = document.getElementById("myVideo");
const iconBtn = document.getElementById("iconBtn");
const iconMusic = document.getElementById("iconMusic");
const audio = document.getElementById("music");
iconBtn.addEventListener("click", () => {
    if(video.paused){
        iconBtn.classList.remove("fa-pause-circle");
        iconBtn.classList.add("fa-play-circle");
        video.play()
    } else {
        iconBtn.classList.remove("fa-play-circle");
        iconBtn.classList.add("fa-pause-circle");
        video.pause()
    }
});


iconMusic.addEventListener("click", () => {
    if(audio.paused) {
        iconMusic.removeAttribute("src");
        iconMusic.setAttribute("src", "play-solid.svg");
        audio.play();
    } else {

        iconMusic.removeAttribute("src");
        iconMusic.setAttribute("src", "pause-solid.svg");
        audio.pause();
    }
})