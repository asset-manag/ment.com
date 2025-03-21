document.addEventListener("DOMContentLoaded", function () {
  // Detect which page it is
  const isRegisterPage = document.body.classList.contains("register-page");
  const isLoginPage = document.body.classList.contains("login-page");

  if (isRegisterPage) {
      handleRegister();
  } else if (isLoginPage) {
      handleLogin();
  }
});

// Function to handle user registration
function handleRegister() {
  document.querySelector(".register").addEventListener("click", function (event) {
      event.preventDefault();

      let email = document.querySelector('input[type="email"]').value.trim();
      let phone = document.querySelector('input[type="tel"]').value.trim();
      let password = document.querySelector('input[type="password"]').value.trim();

      if (!email || !phone || !password) {
          alert("❌ Please fill in all fields!");
          return;
      }

      if (password.length < 8) {
          alert("❌ Password must be at least 8 characters long!");
          return;
      }

      let userData = { email, phone, password };
      localStorage.setItem("user", JSON.stringify(userData));

      alert("✅ Registration Successful! Redirecting to Login...");
      window.location.href = "loginpage.html";
  });
}

// Function to handle user login
function handleLogin() {
  document.querySelector(".login").addEventListener("click", function (event) {
      event.preventDefault();

      let email = document.querySelector('input[type="email"]').value.trim();
      let password = document.querySelector('input[type="password"]').value.trim();

      let savedUser = JSON.parse(localStorage.getItem("user"));

      if (!savedUser) {
          alert("❌ No user found! Please register first.");
          return;
      }

      if (email === savedUser.email && password === savedUser.password) {
          alert("✅ Login Successful! Redirecting to Dashboard...");
          window.location.href = "dashboard.html";
      } else {
          alert("❌ Invalid Email or Password!");
      }
  });
}
