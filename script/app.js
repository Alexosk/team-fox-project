var login = function () {
    let username = document.forms["login-form"]["username"].value;
    let password = document.forms["login-form"]["password"].value;
    if ((username == "username" && password == "password") || (username == "student" && password == "123")) {
        printMessageToDOM("black", "Redirecting.....");
        setTimeout(redirectToStudent, 1500);
        return false;
    }
    else if (username == "" || password == "") {
        printMessageToDOM("red", "User name or password cannot be blank");
        return false;
    }
    else {
        setTimeout(printMessageToDOM, 1500, "red", "Invalid user name or password\n Try username: student password: 123");
        printMessageToDOM("black", "Checking DB.....");
        return false;
    }
}

function printMessageToDOM(color, message) {
    document.getElementById('errorMessageDiv').style.color = color;
    document.getElementById('errorMessageDiv').innerText = message;
}

function redirectToStudent() {
    window.location = "student.html";
}
