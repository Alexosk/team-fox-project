$(document).ready(function () {
  var tri = $(".triangle");
  var form = $(".login-form");
  var status = false;
  // If window is smaller than 1000px than skip the jQuery log-in. 
  $("#login").click(function (event) {
    if (mobileSize()){
      return;
    }
    event.preventDefault();
    if (status == false) {
      tri.fadeIn();
      form.fadeIn();
      status = true;
    } else {
      tri.fadeOut();
      form.fadeOut();
      status = false;
    }
  })
  $(window).resize(function(){
    tri.fadeOut();
    form.fadeOut();
    status = false;
  });
})

// Checks if window size is less than 1000px and in that case sets the login to login.html
function mobileSize() {
  if ($(window).width() < 1000){
    document.getElementById("login").href = "login.html";
    return true;
  }
  return false;
}

