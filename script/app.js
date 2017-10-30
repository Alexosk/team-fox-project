var login = function () {
    let username = document.forms["login-form"]["username"].value;
    let password = document.forms["login-form"]["password"].value;
    if ((username == "username" && password == "password") || (username == "student" && password == "123")) {
        printMessageToDOM("black", "Redirecting.....");
        setTimeout(redirectToStudent, 1500);
        return false;
    }
    else if ((username == "teacher" && password == "123")){
        printMessageToDOM("black", "Redirecting.....");
        setTimeout(redirectToTeacher, 1500);
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

function redirectToTeacher() {
    window.location = "teacher/teacher.html";
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
      attendancebox3.style.display = "none";
      attendancebox2.style.display = "block";
      document.getElementById("codeId").value ="";
    }
}
function attended() {
  let code = document.forms["attendace-form"]["code"].value;
  let attendanceFormText = document.getElementById("attendancebox2");
  let hiddenText = document.getElementById("attendancebox3");
  if (code == "1563") {
    attendanceText("green", "Närvaro noterad!");
    setTimeout(hiddenFunction, 3000);
    hiddenText.style.display = "block";
    attendanceFormText.style.display = "none";
    return false;
  } else {
    attendanceText("red", "Lektionens kod får du av din lärare!");
    setTimeout(hiddenFunction, 3000);
    attendanceFormText.style.display = "none";
    hiddenText.style.display = "block";
    return false;
  }
}

function attendanceText(color, message) {
    document.getElementById('attendancebox3').style.color = color;
    document.getElementById('attendancebox3').innerHTML = message;
}
