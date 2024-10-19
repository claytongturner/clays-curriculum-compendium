// Function to open the lightbox
function openLightbox(lightboxId) {
    document.getElementById(lightboxId).style.display = "flex";
}

// Function to close the lightbox
function closeLightbox(lightboxId) {
    document.getElementById(lightboxId).style.display = "none";
}

// Function to handle 3D tilt effect
const tiltElements = document.querySelectorAll('.thumbnail, .profile-pic'); // Updated to ensure both .thumbnail and .profile-pic are targeted

tiltElements.forEach(element => {
    element.addEventListener('mousemove', (e) => {
        const rect = element.getBoundingClientRect();
        const offsetX = e.clientX - rect.left;
        const offsetY = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((centerY - offsetY) / centerY) * 10;
        const rotateY = ((offsetX - centerX) / centerX) * 10;
        element.style.transform = `perspective(500px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    element.addEventListener('mouseleave', () => {
        element.style.transform = 'perspective(500px) rotateX(0deg) rotateY(0deg)';
    });
});
