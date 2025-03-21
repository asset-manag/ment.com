let tasksCompleted = {
    task1: false,
    task2: false,
    task3: false
};

// Function to Share on WhatsApp
function shareOnWhatsApp(link, taskNumber) {
    let whatsappLink = `https://api.whatsapp.com/send?text=${encodeURIComponent(link)}`;
    window.open(whatsappLink, "_blank");

    // Mark task as completed
    tasksCompleted[`task${taskNumber}`] = true;
    document.getElementById(`task${taskNumber}`).style.opacity = "0.5";
    checkAllTasksCompleted();
}

// Function to Follow Instagram
function followInstagram() {
    window.open("https://instagram.com/yourpage", "_blank");

    // Mark task as completed
    tasksCompleted.task3 = true;
    document.getElementById("task3").style.opacity = "0.5";
    checkAllTasksCompleted();
}

// Function to Check if All Tasks are Completed
function checkAllTasksCompleted() {
    if (tasksCompleted.task1 && tasksCompleted.task2 && tasksCompleted.task3) {
        document.getElementById("claim-reward").disabled = false;
    }
}

// Function to Claim Reward
function claimReward() {
    let selectedPlan = localStorage.getItem("userPlan"); // Get user plan from local storage
    let rewards = {
        "VIP 1": 25,
        "VIP 2": 40,
        "VIP 3": 80,
        "VIP 4": 160,
        "VIP 5": 400,
        "VIP 6": 800,
        "VIP 7": 1200,
        "VIP 8": 1600,
        "VIP 9": 2000
    };

    if (selectedPlan && rewards[selectedPlan]) {
        let userBalance = parseInt(localStorage.getItem("userBalance")) || 0;
        userBalance += rewards[selectedPlan];

        // Update user balance
        localStorage.setItem("userBalance", userBalance);
        alert(`🎉 Task Completed! You earned Rs ${rewards[selectedPlan]}. Check your dashboard.`);
        
        // Disable button & set timeout for reset
        document.getElementById("claim-reward").disabled = true;
        setTimeout(resetTasks, 24 * 60 * 60 * 1000); // Reset after 24 hours
    } else {
        alert("❌ No plan selected! Please choose a plan.");
    }
}

// Function to Reset Tasks after 24 Hours
function resetTasks() {
    tasksCompleted = { task1: false, task2: false, task3: false };
    document.getElementById("claim-reward").disabled = true;

    let taskElements = document.querySelectorAll(".task-item");
    taskElements.forEach(task => task.style.opacity = "1");
}
