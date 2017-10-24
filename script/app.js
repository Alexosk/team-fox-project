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

/* Student.html */

function hiddenFunction(){
  let hide = document.getElementById("hidden");
  let attend = document.getElementById("activeday");
    if (hide.style.display === "block") {
      hide.style.display = "none";
      attend.style.background="#eee";
      attend.style.color="#000";
    }else {
      hide.style.display="block";
      attend.style.background="#562e84";
      attend.style.color="#fdb722";
    }
}
function attended() {
  let code = document.forms["attendace-form"]["code"].value;
  if (code == "1563") {
    alert("Hoppas du hade en bra dag!");
  } else {
    alert("Dagens kod får du av din lärare!");
  }
}
