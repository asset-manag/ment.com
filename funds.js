document.getElementById('amount').value = document.getElementById('plan').value;

function updateAmount() {
    let planValue = document.getElementById('plan').value;
    document.getElementById('amount').value = planValue;
}

function selectPaymentMethod(method) {
    let accName = document.getElementById('acc-name');
    let accNumber = document.getElementById('acc-number');

    if (method === 'JazzCash') {
        accName.innerHTML = "<b>Account Name:</b> Abubakar Afzal";
        accNumber.innerHTML = "<b>JazzCash Number:</b> 03296042791";
    } else {
        accName.innerHTML = "<b>Account Name:</b> Abubakar Afzal";
        accNumber.innerHTML = "<b>Easypaisa Number:</b> 03296042791";
    }
}

function submitDeposit() {
    let plan = document.getElementById('plan').selectedOptions[0].text;
    let amount = document.getElementById('amount').value;
    let trxId = document.getElementById('trx-id').value;
    let screenshot = document.getElementById('screenshot').value;
    let method = document.getElementById('acc-number').textContent.includes("JazzCash") ? "JazzCash" : "Easypaisa";

    if (!trxId || !screenshot) {
        alert("Please enter Transaction ID and upload Screenshot!");
        return;
    }

    let table = document.getElementById('deposit-list');
    let newRow = `<tr>
                    <td>${plan}</td>
                    <td>${amount}</td>
                    <td>${method}</td>
                    <td>${trxId}</td>
                    <td><a href="${screenshot}" target="_blank">View</a></td>
                    <td>Pending</td>
                  </tr>`;

    if (table.querySelector(".no-data")) {
        table.innerHTML = "";
    }
    table.innerHTML += newRow;

    alert("Deposit Submitted Successfully!");
}
