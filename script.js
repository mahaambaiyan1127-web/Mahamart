const loginForm = document.getElementById("loginForm");

if (loginForm) {
    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const role = document.getElementById("role").value;
        const email = document.getElementById("loginEmail").value;
        const password = document.getElementById("loginPassword").value;

        if (role === "") {
            alert("Please select Buyer, Seller or Admin");
            return;
        }

        const savedEmail = localStorage.getItem("email");
        const savedPassword = localStorage.getItem("password");

        if (email === savedEmail && password === savedPassword) {

            localStorage.setItem("loginRole", role);

            alert("Login Successful!");

            window.location.href = "dashboard.html";

        } else {
            alert("Invalid Email or Password!");
        }
    });
}