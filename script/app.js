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
    else if ((username == "admin" && password == "123")){
      printMessageToDOM("black", "Redirecting.....");
      setTimeout(redirectToAdmin, 1500);
      return false;
    }
    else if (username == "" || password == "") {
        printMessageToDOM("red", "User name or password cannot be blank");
        return false;
    }
    else {
        setTimeout(printMessageToDOM, 1500, "red", "Invalid user name or password");
        printMessageToDOM("black", "Checking DB.....");
        return false;
    }
}

function printMessageToDOM(color, message) {
    document.getElementById('errorMessageDiv').style.color = color;
    document.getElementById('errorMessageDiv').innerText = message;
}

function redirectToStudent() {
    window.location = "student/student.html";
}

function redirectToTeacher() {
    window.location = "teacher/teacher.html";
}
function redirectToAdmin() {
    window.location = "admin/admin.html";
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

var options = {iframe: {url: 'upload.php'}};
var zone = new FileDrop('zprogress', options);

zone.event('send', function (files) {
  files.each(function (file) {
    file.event('done', function (xhr) {
      alert('Done uploading ' + this.name);
    });

    file.event('progress', function (sent, total) {
      var p = document.createElement('p');
      p.textContent = 'Uploaded ' + Math.round(sent / total * 100) + '%...';
      zone.el.appendChild(p);
    })

    file.sendTo('upload.php');
  });
});

zone.event('iframeDone', function (xhr) {
  alert('Done uploading via <iframe>');
});


  function allowDrop(ev) {
    ev.preventDefault();
  }

  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }

  function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
  }




/****DROPDOWN****/
function myDropdown() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropBtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
