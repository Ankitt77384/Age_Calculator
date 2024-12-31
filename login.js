// JavaScript code for login functionality
const loginBtn = document.getElementById("loginBtn");

loginBtn.addEventListener("click", () => {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Define valid credentials
    const validUsername = "admin";
    const validPassword = "pass123456";

    if (username === validUsername && password === validPassword) {
        alert("Login Successful!");
        // Redirect to the next page (optional)
        window.location.href = "index.html";
    } else {
        alert("Invalid username or password. Please try again.");
    }
});
