function copyLink() {
    var copyText = document.getElementById("referral-link");
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile
    navigator.clipboard.writeText(copyText.value);
    alert("Referral link copied!");
}

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