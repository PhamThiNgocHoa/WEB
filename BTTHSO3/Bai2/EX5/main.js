document.addEventListener("DOMContentLoaded", function () {
    const rotatingImage = document.getElementById("rotating-image");
    let rotationAngle = 0;

    function rotateImage() {
        rotationAngle += 15;
        rotatingImage.style.transform = `rotate(${rotationAngle}deg)`;
    }

    setInterval(rotateImage, 2000); // Xoay tấm hình sau mỗi 2 giây
});

