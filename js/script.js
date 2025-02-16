window.addEventListener("load", () => {
    document.getElementById("loading").style.display = "none";
});

function openBlog() {
    document.getElementById("springbootblogVideo").style.display = "block";
    document.getElementById("springbootblog-content").style.display = "block";
}
function closeBlog() {
    document.getElementById("springbootblogVideo").style.display = "none";
    document.getElementById("springbootblog-content").style.display = "none";
}

document.getElementById("springbootblogVideo").addEventListener("click", (e) => {
    if (e.target === document.getElementById("springbootblogVideo")) {
        closeBlog();
    }
});

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeBlog();
});