const video = document.getElementById("myVideo");
const iconBtn = document.getElementById("iconBtn");

iconBtn.addEventListener("click", () => {
    if(video.paused){
        iconBtn.innerHTML = '<i class="fa fa-play-circle fa-5x" id="iconBtn"></i>';
        video.play()
    } else {
        iconBtn.innerHTML = '<i class="fa fa-pause-circle fa-5x" id="iconBtn"></i>';
        video.pause()
    }
});