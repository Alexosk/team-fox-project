$(document).ready(function(){
    var tri = $(".triangle");
    var form = $(".login-form");
    var status = false;
      $("#login").click(function(event){
        event.preventDefault();
        if(status == false){
          tri.fadeIn();
          form.fadeIn();
          status = true;
        }else{
          tri.fadeOut();
          form.fadeOut();
          status = false;
        }
      })
})
