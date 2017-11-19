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



/*******Används för Admin-checkboxen*******/
/*
var checkbox = document.getElementById("adminBox");
var c = document.getElementById("courseAndClasses");

checkbox.addEventListener( 'change', function(event) {
    if(this.checked) {
        c.style.display = "none"; // Checkbox is checked..
    }else{
      c.style.display = "block"; // Checkbox is unchecked..
    }
});


document.getElementById("adminBox").onchange = function() {displayStuff()};

function displayStuff() {
    var x = document.getElementById("courseAndClasses");
    x.value = x.style.display = "block";
}
*/
