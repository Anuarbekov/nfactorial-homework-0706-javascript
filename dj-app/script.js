const video = document.getElementById("myVideo");
const iconBtn = document.getElementById("iconBtn");
const iconMusic = document.getElementById("iconMusic");
const audio = document.getElementById("music");
const element = document.getElementById("circle");
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

var spin = TweenMax.to(element, 1, {rotation:360, ease:Linear.easeNone, repeat:-1, paused: true});
iconMusic.addEventListener("click", () => {
    if(audio.paused) {
        iconMusic.removeAttribute("src");
        iconMusic.setAttribute("src", "play-solid.svg");
        audio.play();
        spin.play();
    } else {
        iconMusic.removeAttribute("src");
        iconMusic.setAttribute("src", "pause-solid.svg");
        audio.pause();
        spin.pause();
    }
})