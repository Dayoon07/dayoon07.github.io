window.addEventListener("load", () => {
    document.getElementById("loading").style.display = "none";
});

function openBlog(url) {
    const video = document.querySelector("video");
    video.src = url;
    document.getElementById("video-modal").style.display = "block";
    document.getElementById("modal-content").style.display = "block";
}

function closeBlog() {
    const video = document.querySelector("video");
    video.src = "";
    document.getElementById("video-modal").style.display = "none";
    document.getElementById("modal-content").style.display = "none";
}

document.getElementById("video-modal").addEventListener("click", (e) => {
    if (e.target === document.getElementById("video-modal")) closeBlog();
});

document.addEventListener("keydown", (e) => {
    const video = document.querySelector("video");
    if (e.key === "Escape") closeBlog();
    if (e.key === "f" || e.key === "F") {
        if (!document.fullscreenElement) {
            video.requestFullscreen();
        } else {
            document.exitFullscreen();
        }
    } 
    if (e.key === "ArrowLeft") {
        video.currentTime -= 5;
    } else if (e.key === "ArrowRight") {
        video.currentTime += 5;
    }
    if (e.key === "k" || e.key === "K") {
        if (video.paused) {
			video.play();
		} else {
			video.pause();
		}
    }
});