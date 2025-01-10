document.addEventListener('DOMContentLoaded', () => {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = lightbox.querySelector(".lightbox-image");
    const lightboxClose = lightbox.querySelector(".lightbox-close");

    // 이미지를 클릭했을 때 Lightbox 활성화
    document.querySelectorAll(".project-image").forEach(img => {
        img.addEventListener("click", function() {
            lightboxImg.src = this.src;
            lightboxImg.alt = this.alt;
            lightbox.classList.add("active");
            document.body.style.overflow = "hidden"; // 스크롤 비활성화
        });
    });

    // Lightbox 닫기 버튼
    lightboxClose.addEventListener("click", closeLightbox);

    // Lightbox 외부 영역 클릭 시 닫기
    lightbox.addEventListener("click", (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    // ESC 키를 눌렀을 때 닫기
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && lightbox.classList.contains("active")) {
            closeLightbox();
        }
    });

    // Lightbox 닫기 함수
    function closeLightbox() {
        lightbox.classList.remove("active");
        document.body.style.overflow = ""; // 스크롤 활성화
    }
});
