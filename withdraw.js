document.addEventListener("DOMContentLoaded", function() {
    const amountInput = document.getElementById("amount");
    const accountInput = document.getElementById("account");
    const withdrawBtn = document.getElementById("withdraw-btn");
    const paymentMethods = document.querySelectorAll('input[name="payment"]');
    const historyBody = document.getElementById("history-body");

    // Load saved withdrawal history from localStorage
    function loadHistory() {
        const history = JSON.parse(localStorage.getItem("withdrawals")) || [];
        historyBody.innerHTML = ""; // Clear previous records

        history.forEach(record => {
            const row = `<tr>
                <td>${record.amount} PKR</td>
                <td>${record.method}</td>
                <td>${record.account}</td>
                <td>${record.date}</td>
            </tr>`;
            historyBody.innerHTML += row;
        });
    }

    function validateForm() {
        const amount = parseInt(amountInput.value);
        const account = accountInput.value.trim();
        const selectedPayment = [...paymentMethods].find(input => input.checked);

        withdrawBtn.disabled = !(amount >= 100 && account !== "" && selectedPayment);
    }

    amountInput.addEventListener("input", validateForm);
    accountInput.addEventListener("input", validateForm);
    paymentMethods.forEach(input => input.addEventListener("change", validateForm));

    withdrawBtn.addEventListener("click", function() {
        const amount = amountInput.value;
        const account = accountInput.value;
        const method = [...paymentMethods].find(input => input.checked)?.value;
        const date = new Date().toLocaleDateString();

        // Save data to localStorage
        const history = JSON.parse(localStorage.getItem("withdrawals")) || [];
        history.push({ amount, method, account, date });
        localStorage.setItem("withdrawals", JSON.stringify(history));

        // Refresh history
        loadHistory();

        // Reset form
        amountInput.value = "";
        accountInput.value = "";
        withdrawBtn.disabled = true;
        paymentMethods.forEach(input => (input.checked = false));

        alert("Withdrawal request submitted!");

        // Submit to Google Form
        submitToGoogleForm(amount, method, account);
    });

    // Load history on page load
    loadHistory();
});

document.getElementById("withdraw-btn").addEventListener("click", function() {
    window.location.href = "https://forms.gle/G5Q8N8a56JoMcyr96";
});
