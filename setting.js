// Toggle Sidebar on Mobile
const hamburger = document.getElementById("hamburger");
const sidebar = document.getElementById("sidebar");

hamburger.addEventListener("click", function () {
    sidebar.classList.toggle("active");
});

// Close Sidebar when clicking outside (Mobile)
document.addEventListener("click", function (event) {
    if (!sidebar.contains(event.target) && !hamburger.contains(event.target)) {
        sidebar.classList.remove("active");
    }
});

// Profile Form Save Functionality
const profileForm = document.getElementById("profile-form");

profileForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent page reload

    // Get input values
    const firstname = document.getElementById("firstname").value;
    const lastname = document.getElementById("lastname").value;
    const mobile = document.getElementById("mobile").value;
    const email = document.getElementById("email").value;

    // Save to local storage
    localStorage.setItem("firstname", firstname);
    localStorage.setItem("lastname", lastname);
    localStorage.setItem("mobile", mobile);
    localStorage.setItem("email", email);

    alert("Profile updated successfully!");
});

// Load saved data
window.addEventListener("load", function () {
    document.getElementById("firstname").value = localStorage.getItem("firstname") || "tyler99";
    document.getElementById("lastname").value = localStorage.getItem("lastname") || "User123";
    document.getElementById("mobile").value = localStorage.getItem("mobile") || "0123456789";
    document.getElementById("email").value = localStorage.getItem("email") || "user123@gmail.com";
});
