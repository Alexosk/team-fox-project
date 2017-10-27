function randomNumber(){
  var randNum = Math.floor((Math.random() * 9000) + 1000); //mellan 9000 till 1000
  document.getElementById("generateNum").innerHTML = randNum;
}

function submitFunction(qwe){
    var e = document.getElementById(qwe);
    if(e.style.display == "none")
      e.style.display = "block";
    else
      e.style.display = "none";
}
