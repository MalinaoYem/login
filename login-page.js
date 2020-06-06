const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginMsg = document.getElementById("login-msgA");
const loginMsg2 = document.getElementById("login-msgU");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "admin" && password === "admin") {
        loginMsg.style.opacity = 1;
        
        
    }else if (username === "user" && password === "user") {
        loginMsg2.style.opacity = 5;
      
    }else {
        alert("Invalid credentials!");
        location.reload();
    }
})