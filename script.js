document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("waitlist-form");
    const emailInput = document.getElementById("email");
    const successMessage = document.querySelector(".success-message");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        
        const email = emailInput.value.trim();
        if (email) {
            // Here, send data to backend (Firebase, API, Google Sheets, etc.)
            console.log("Waitlist Email:", email);

            // Show success message
            successMessage.style.display = "block";
            emailInput.value = "";
        }
    });
});
