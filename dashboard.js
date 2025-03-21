document.addEventListener("DOMContentLoaded", () => {
    const sidebar = document.querySelector(".sidebar");
    const hamburger = document.querySelector(".hamburger");
    const closeBtn = document.querySelector(".close-btn");

    hamburger.addEventListener("click", () => {
        sidebar.classList.toggle("active");
    });

    closeBtn.addEventListener("click", () => {
        sidebar.classList.remove("active");
    });

    // Copy Referral Link
    document.querySelector(".copy-btn").addEventListener("click", () => {
        const input = document.querySelector(".referral-box input");
        input.select();
        document.execCommand("copy");
        alert("Referral link copied!");
    });
});



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

document.addEventListener("DOMContentLoaded", function () {
    // Select all buttons with the "buy-btn" class
    let buyButtons = document.querySelectorAll(".buy-btn");

    // Add event listener to each button
    buyButtons.forEach(button => {
        button.addEventListener("click", function () {
            window.location.href = "deposit.html"; // Redirect to login page
        });
    });
});

function logout() {
    window.location.href = '/index.html';
  }
  history.replaceState(null, null, location.href);

