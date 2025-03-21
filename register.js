const webhookURL = "https://script.google.com/macros/s/AKfycbw71Recx9TXjO4fFunX-VdNSL_xgTaXliul9dXm4nbumn7sycHNCiwgcGq7aUyAnu1E/exec"; // Apne Web App URL ko yahan paste karo


document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".register").addEventListener("click", function (event) {
        event.preventDefault();

        let email = document.getElementById("email").value.trim();
        let phone = document.getElementById("phone").value.trim();
        let password = document.getElementById("password").value.trim();

        if (!email || !phone || password.length < 8) {
            alert("❌ Please fill in all fields & password must be at least 8 characters long!");
            return;
        }

        let userData = { action: "register", email, phone, password };

        fetch(webhookURL, {
            method: "POST",
            body: JSON.stringify(userData),
            headers: { "Content-Type": "application/json" }
        }).then(response => response.text())
          .then(data => {
              if (data === "Registered Successfully") {
                  alert("✅ Registration Successful! Redirecting to Login...");
                  window.location.href = "loginpage.html";
              } else {
                  alert("❌ Error in Registration");
              }
          });
    });
});
