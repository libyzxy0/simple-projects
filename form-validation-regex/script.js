function validateForm() {
        var nameInput = document.getElementById("nameInput");
        var numberInput = document.getElementById("numberInput");
        var emailInput = document.getElementById("emailInput");
        var passwordInput = document.getElementById("passwordInput");
        var optionSelect = document.getElementById("optionSelect");
        var dateInput = document.getElementById("dateInput");

        var nameError = document.getElementById("nameError");
        var numberError = document.getElementById("numberError");
        var emailError = document.getElementById("emailError");
        var passwordError = document.getElementById("passwordError");
        var optionError = document.getElementById("optionError");
        var dateError = document.getElementById("dateError");

        var namePattern = /[A-Za-z ]+/;
        var numberPattern = /^[0-9]+$/;
        var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        var passwordPattern = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9])(?=.{8,})/;

        if (nameInput.value.trim() === "") {
            nameError.textContent = "Please fill in the name field.";
            return false;
        } else if (!namePattern.test(nameInput.value)) {
            nameError.textContent = "Please enter a valid name (letters and spaces only).";
            return false;
        } else {
            nameError.textContent = "";
        }

        if (numberInput.value.trim() === "") {
            numberError.textContent = "Please fill in the number field.";
            return false;
        } else if (!numberPattern.test(numberInput.value)) {
            numberError.textContent = "Please enter a valid number (digits only).";
            return false;
        } else {
            numberError.textContent = "";
        }

        if (emailInput.value.trim() === "") {
            emailError.textContent = "Please fill in the email field.";
            return false;
        } else if (!emailPattern.test(emailInput.value)) {
            emailError.textContent = "Please enter a valid email address.";
            return false;
        } else {
            emailError.textContent = "";
        }

        if (passwordInput.value.trim() === "") {
            passwordError.textContent = "Please fill in the password field.";
            return false;
        } else if (!passwordPattern.test(passwordInput.value)) {
            passwordError.textContent = "Password must be at least 8 characters long and include at least one capital letter, one special character, and one number.";
            return false;
        } else {
            passwordError.textContent = "";
        }

        if (optionSelect.value === "relationship") {
            optionError.textContent = "Please select an option.";
            return false;
        } else {
            optionError.textContent = "";
        }

        if (dateInput.value === "") {
            dateError.textContent = "Please select a date.";
            return false;
        } else {
            dateError.textContent = "";
        }

        alert('Validation Success!')
}
