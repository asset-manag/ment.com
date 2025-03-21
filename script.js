
let index = 0;
const totalSlides = 6;
const slider = document.querySelector('.slider');
const dots = document.querySelectorAll('.dot');

function moveTo(n) {
    index = n;
    slider.style.transform = `translateX(-${n * 16.66}%)`;
    updateDots();
}

function updateDots() {
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
}

function autoSlide() {
    index = (index + 1) % totalSlides;
    moveTo(index);
}

setInterval(autoSlide, 2000);

document.getElementById("home").addEventListener("click", function() {
    window.location.href = "index.html";  // Redirect to index.html
});

document.querySelector(".btn.blue").addEventListener("click", function() {
    window.location.href = "registerpage.html";  // Register Page
});

document.querySelector(".btn:not(.blue)").addEventListener("click", function() {
    window.location.href = "loginpage.html";  // Login Page
});

document.querySelectorAll(".buy-btn").forEach(function(button) {
 
    button.addEventListener("click", function() {
        window.location.href = "loginpage.html";
    });
});
