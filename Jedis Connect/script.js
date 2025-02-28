// External JavaScript file - script.js

document.addEventListener('DOMContentLoaded', function() {
    // Registration form validation and submission handling
    let registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            let email = document.getElementById('email').value;
            let password = document.getElementById('password').value;
            // Regex is already defined in the HTML pattern attribute, but you can also validate here if desired.
            let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}$/;
            if (!emailPattern.test(email)) {
                alert("Invalid email format");
                return;
            }

            // Example of using a loop over a collection
            let fields = [email, password];
            for (let i = 0; i < fields.length; i++) {
                console.log("Field " + i + ": " + fields[i]);
            }

            // Simulate asynchronous behavior with a callback using setTimeout
            setTimeout(function() {
                alert("Registration successful!");
                registerForm.reset();
            }, 500);
        });
    }

    // Login form handling
    let loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            let loginEmail = document.getElementById('loginEmail').value;
            let loginPassword = document.getElementById('loginPassword').value;

            if (loginEmail && loginPassword) {
                alert("Login successful!");
                loginForm.reset();
            } else {
                alert("Please enter both email and password.");
            }
        });
    }
});
