var handler = function(event) {
    if(event.target.parentNode.className.indexOf('checked') < 0 ) {
        event.target.parentNode.className += ' checked';
    } else {
        event.target.parentNode.className = event.target.parentNode.className.replace(' checked', '');
    }
}

function cbChange(obj) {
    var cbs = document.getElementsByClassName("cb");
    for (var i = 0; i < cbs.length; i++) {
        cbs[i].checked = false;
    }
    obj.checked = true;
}


function myFunction1(x, _this) {
  if (_this.checked) {
    x.style.backgroundColor = 'green';
  } else  {
    x.style.backgroundColor = 'red';
  }
}

var table = document.getElementById('table');
table.addEventListener('click', handler);

/***Maybe use later***/
    function ChangeColColor(chkCol,col) {
        var varCell = document.getElementById(col);
        var varColor = "White";
        if (chkCol.checked == true) {
            varColor = "Red";
        }
        varCol.style.backgroundColor = varColor;
    }
/********************/    

function chkColorChange(myInput){
    // document.getElementById('chkCell').style.backgroundColor=this.checked?'green':'red';
    //parentNode går upp till td och ändrar där. sedan använder man "this" för att hålla sig på cellen
    myInput.parentNode.style.backgroundColor=myInput.checked?'#759e2e':'#cc0000';
}