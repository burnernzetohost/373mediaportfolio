document.addEventListener("DOMContentLoaded", function () {
    const photosBtn = document.getElementById("photos-btn");
    const videosBtn = document.getElementById("videos-btn");
    const photoSection = document.getElementById("photos-section");  // FIXED ID
    const videoSection = document.getElementById("video-section");

    function showPhotos() {
        photoSection.style.display = "block";
        videoSection.style.display = "none";
        photosBtn.classList.add("active");
        videosBtn.classList.remove("active");
    }

    function showVideos() {
        videoSection.style.display = "block";
        photoSection.style.display = "none";
        videosBtn.classList.add("active");
        photosBtn.classList.remove("active");
    }

    photosBtn.addEventListener("click", showPhotos);
    videosBtn.addEventListener("click", showVideos);

    showPhotos();
});


document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".photo-item img");
    const overlay = document.createElement("div");
    overlay.classList.add("fullscreen-overlay");
    overlay.innerHTML = `
        <span class="close-btn">&times;</span>
        <img src="" alt="">
    `;
    document.body.appendChild(overlay);

    const overlayImage = overlay.querySelector("img");
    const closeButton = overlay.querySelector(".close-btn");

    images.forEach(img => {
        img.addEventListener("click", () => {
            overlayImage.src = img.src;
            overlay.classList.add("active");
        });
    });

    closeButton.addEventListener("click", () => {
        overlay.classList.remove("active");
    });

    overlay.addEventListener("click", (e) => {
        if (e.target === overlay) {
            overlay.classList.remove("active");
        }
    });

    // Close on ESC key (for desktop users)
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            overlay.classList.remove("active");
        }
    });
});

