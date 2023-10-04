// Get the form element
var form = document.getElementById("form");

// Add input and change event listeners to all form elements
form.addEventListener("input", validateForm);
form.addEventListener("change", validateForm);

function validateForm() {
    var isValid = true;
    var inputs = form.getElementsByTagName("input");
    var textareas = form.getElementsByTagName("textarea");

    for (var i = 0; i < inputs.length; i++) {
        var input = inputs[i];
        var errorElement = input.nextElementSibling;
        if (input.type === "text" && !/^[A-Za-z ]+$/.test(input.value)) {
            errorElement.style.color = 'red';
            errorElement.textContent = "Please enter a valid value.";
            isValid = false;
        } else if (input.type === "tel" && !/^[0-9]+$/.test(input.value)) {
            errorElement.style.color = 'red';
            errorElement.textContent = "Please enter a valid number.";
            isValid = false;
        } else if (input.type === "email" && !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(input.value)) {
            errorElement.style.color = 'red';
            errorElement.textContent = "Please enter a valid email address.";
            isValid = false;
        } else {
            errorElement.style.color = 'greenyellow';
            errorElement.textContent = "Valid value.";
        }
    }

    for (var i = 0; i < textareas.length; i++) {
        var textarea = textareas[i];
        var errorElement = textarea.nextElementSibling;

        if (!/^[A-Za-z ]+$/.test(textarea.value)) {
            errorElement.style.color = 'red';
            errorElement.textContent = "Please enter a valid value.";
            isValid = false;
        } else {
            errorElement.style.color = 'greenyellow';
            errorElement.textContent = "Valid value.";
        }
    }

    return isValid;
}
