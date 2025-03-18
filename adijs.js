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
