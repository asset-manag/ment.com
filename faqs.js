// Toggle FAQ Answers
document.addEventListener("DOMContentLoaded", () => {
    const faqs = document.querySelectorAll(".faq");

    faqs.forEach((faq) => {
        faq.addEventListener("click", () => {
            const answer = faq.querySelector(".answer");
            const icon = faq.querySelector(".toggle-icon");

            // Toggle Answer
            if (answer.style.display === "block") {
                answer.style.display = "none";
                icon.textContent = "expand_more";
            } else {
                answer.style.display = "block";
                icon.textContent = "expand_less";
            }
        });
    });
});
