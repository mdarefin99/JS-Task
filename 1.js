
    const form = document.getElementById('signupForm');

    form.addEventListener('submit', function(event) {
        
        // For Preventing the form from actually submitting to a server/refreshing
        event.preventDefault();

        //  Select input values
        const fullname = document.getElementById('fullname').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        const phone = document.getElementById('phone').value;

        // Select error display elements
        const nameError = document.getElementById('nameError');
        const emailError = document.getElementById('emailError');
        const passError = document.getElementById('passError');
        const confirmPassError = document.getElementById('confirmPassError');
        const phoneError = document.getElementById('phoneError');
        const mainMessage = document.getElementById('main-message');

        // Clear previous error messages
        nameError.innerText = "";
        emailError.innerText = "";
        passError.innerText = "";
        confirmPassError.innerText = "";
        phoneError.innerText = "";
        mainMessage.innerText = "";
        
        // Flag to track if the form is valid
        let isValid = true;

        // Check Full Name 
        if (fullname.trim() === "") {
            nameError.innerText = "Full Name is required.";
            isValid = false;
        }

        if (!email.includes('@') || !email.includes('.')) {
            emailError.innerText = "Email must contain '@' and '.'";
            isValid = false;
        }

        // Check Password At least 6 characters
        if (password.length < 6) {
            passError.innerText = "Password must be at least 6 characters.";
            isValid = false;
        }

        // Check Confirm Password 
        if (password !== confirmPassword) {
            confirmPassError.innerText = "Passwords do not match.";
            isValid = false;
        }

        // Phone Must be digits only
        if (isNaN(phone) || phone.trim() === "") {
            phoneError.innerText = "Phone number must contain only digits.";
            isValid = false;
        }

        
        
        if (isValid) {
            mainMessage.style.color = "green";
            mainMessage.innerText = "Registration Successful!";
            // Optional: form.reset(); // Clears the form after success
        } else {
            mainMessage.style.color = "red";
            mainMessage.innerText = "Please fix the errors above.";
        }
    });