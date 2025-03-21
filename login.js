const webhookURL = "https://script.google.com/macros/s/AKfycbw71Recx9TXjO4fFunX-VdNSL_xgTaXliul9dXm4nbumn7sycHNCiwgcGq7aUyAnu1E/exec"; // Apne Web App URL ko yahan paste karo

document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".login").addEventListener("click", function (event) {
        event.preventDefault();

        let email = document.getElementById("email").value.trim();
        let password = document.getElementById("password").value.trim();

        let userData = { action: "login", email, password };

        fetch(webhookURL, {
            method: "POST",
            body: JSON.stringify(userData),
            headers: { "Content-Type": "application/json" }
        }).then(response => response.text())
          .then(data => {
              if (data === "Login Success") {
                  alert("✅ Login Successful! Redirecting to Dashboard...");
                  window.location.href = "dashboard.html";
              } else {
                  alert("❌ Invalid Email or Password!");
              }
          });
    });
});
