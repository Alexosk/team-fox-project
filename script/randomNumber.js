function randomNumber(){
  var randNum = Math.floor((Math.random() * 9000) + 1000); //mellan 9000 till 1000
  document.getElementById("generateNum").innerHTML = randNum;
}

/*Visar "närvaro tagen" rutan*/
function submitFunction(attendenceTaken){
    var e = document.getElementById(attendenceTaken);
    if(e.style.display == "block")
      e.style.display = "none";
    else
      e.style.display = "block";
}

/*Visar tabellen i prevAttendence*/
function showAttnTable(table){
    var f = document.getElementById(table);
    if(f.style.display == "table")
      f.style.display = "none";
    else
      f.style.display = "table";
}
/* Visar "Nyhet inlagd" på teacher nyhets rutan */
function newsFunction(newsPlaced){
    var e = document.getElementById(newsPlaced);
    if(e.style.display == "block")
      e.style.display = "none";
    else
      e.style.display = "block";
}

function provFunction(provPlaced){
    var e = document.getElementById(provPlaced);
    if(e.style.display == "block")
      e.style.display = "none";
    else
      e.style.display = "block";
}

