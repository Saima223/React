// =============================
// FILE 4: form-validation.js
// =============================

function validate(){
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    // Required
    if(name === ""){
        alert("Name required");
        return;
    }

    // Email Regex
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if(!pattern.test(email)){
        alert("Invalid email");
        return;
    }

    // Password length
    if(password.length < 6){
        alert("Password too short");
        return;
    }

    alert("Form submitted");
}

// =============================
// TASKS (PRACTICE)
// =============================

// 🔹 EASY
// 1. Create a function to check even/odd
// 2. Print numbers 1–10 using loop
// 3. Take input using prompt and show alert

// 🔹 MEDIUM
// 4. Create a calculator (add, sub, mul, div)
// 5. Loop through array and print sum
// 6. Create a form with name + email validation

// 🔹 ADVANCED
// 7. Fetch API and display data in console
// 8. Handle API errors using try-catch
// 9. Build a mini login form with validation
// 10. Show API data in HTML (DOM manipulation)

// 🔥 CHALLENGE
// Build a project:
// "User Registration Form"
// - Name, Email, Password
// - Validation
// - Fetch API (fake submit)
// - Show success message