var login = function () {
    let username = document.forms["login-form"]["username"].value;
    let password = document.forms["login-form"]["password"].value;
    if (username == "username" && password == "password") {
        return true;
    }
    else if (username == "" || password == "") {
        document.getElementById('errorMessageDiv').style.color = "black";
        document.getElementById('errorMessageDiv').innerText = "Username or password cannot be blank";
        return false;
    }
    else {
        setTimeout(printMessageToDOM, 1000);
        document.getElementById('errorMessageDiv').style.color = "black";
        document.getElementById('errorMessageDiv').innerText = "Checking DB....";
        return false;
    }
}

function printMessageToDOM() {
    document.getElementById('errorMessageDiv').style.color = "red";
    document.getElementById('errorMessageDiv').innerText = "Invalid username or password";
}