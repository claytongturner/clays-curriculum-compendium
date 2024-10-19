// Function to open the lightbox
function openLightbox(lightboxId) {
    document.getElementById(lightboxId).style.display = "flex";
}

// Function to close the lightbox
function closeLightbox(lightboxId) {
    document.getElementById(lightboxId).style.display = "none";
}

// Function to handle 3D tilt effect
const thumbnails = document.querySelectorAll('.thumbnail');

thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('mousemove', (e) => {
        const rect = thumbnail.getBoundingClientRect();
        const offsetX = e.clientX - rect.left;
        const offsetY = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((centerY - offsetY) / centerY) * 10;
        const rotateY = ((offsetX - centerX) / centerX) * 10;
        thumbnail.style.transform = `perspective(500px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    thumbnail.addEventListener('mouseleave', () => {
        thumbnail.style.transform = 'perspective(500px) rotateX(0deg) rotateY(0deg)';
    });
});
