// Select toggle button and menu
const navbarToggle = document.getElementById('navbarToggle');
const navbarMenu = document.getElementById('navbarMenu');

// Add click event to toggle button
navbarToggle.addEventListener('click', () => {
    navbarToggle.classList.toggle('active');
    navbarMenu.classList.toggle('active');
});

// Prompt user for their name and display it
document.addEventListener("DOMContentLoaded", () => {
    const userName = prompt("Nama Panngilan Kamu Siapa?");
    document.getElementById("userName").textContent = userName ? userName : "Guest";
});

// Slideshow functionality
let slideIndex = 0;

function showSlides() {
    let slides = document.getElementsByClassName("slide");

    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }

    // Increment slide index
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 } 

    // Display current slide
    slides[slideIndex - 1].style.display = "block";  

    // Loop slides every 3 seconds
    setTimeout(showSlides, 3000); 
}

// Initialize slideshow on load
showSlides();

/// Function to open modal and display detailed description
function showModal(button) {
    const card = button.closest('.card');
    const title = card.querySelector('h3').textContent;
    const description = card.getAttribute('data-description');

    document.getElementById('modal-title').textContent = title;
    document.getElementById('modal-description').textContent = description;

    document.getElementById('modal').style.display = 'block';
}

// Function to close the modal
function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

// Close modal when clicking outside the modal content
window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

// Nomor WhatsApp tujuan
const whatsappNumber = '6287817014194'; // Nomor Tujuan

// Fungsi untuk mengirim pesan ke WhatsApp
document.getElementById('message-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah pengiriman form secara default

    // Ambil data dari form
    const name = document.getElementById('name').value;
    const birthdate = document.getElementById('birthdate').value;
    const gender = document.getElementById('gender').value;
    const message = document.getElementById('message').value;
    const currentTime = new Date().toLocaleString();

    // Format pesan
    const whatsappMessage = `*Form WhatsApp :*\n\n` +
        `*Nama:* ${name}\n` +
        `*Tanggal Lahir:* ${birthdate}\n` +
        `*Jenis Kelamin:* ${gender}\n` +
        `*Pesan:* ${message}\n\n` +
        `_Dikirim pada: ${currentTime}_`;

    // URL WhatsApp dengan pesan
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    // Buka URL WhatsApp
    window.open(whatsappUrl, '_blank');
});
