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
    if (e.target === document.getElementById("video-modal")) {
        closeBlog();
    }
});

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeBlog();
});