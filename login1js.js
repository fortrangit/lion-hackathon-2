"use strict";

const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (event) => {
    event.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "user" && password === "web_dev") {
        alert("You have successfully logged in.");
        location.reload();
    } else {
        loginErrorMsg.style.opacity = 1;
    }
});

function color() {
    if((loginForm.value.length>0 && loginForm.value.indexOf("@")!==-1) 
        && loginForm.value.length>=5){
        loginButton.style.backgroundColor = "#0095F6";
        loginButton.disabled = false;
    }else{
        loginButton.style.backgroundColor = "#C0DFFD";
        loginButton.disabled = true;
    }
}

function moveToMain(){
    location.replace("./main.html");
}

loginForm.addEventListener('keyup', color);
loginForm.addEventListener('keyup', color);
loginButton.addEventListener('click',moveToMain);