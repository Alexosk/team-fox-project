var handler = function(event) {
    if(event.target.parentNode.className.indexOf('checked') < 0 ) {
        event.target.parentNode.className += ' checked';
    } else {
        event.target.parentNode.className = event.target.parentNode.className.replace(' checked', '');
    }
}

/*
function cbChange(obj) {
    var cbs = document.getElementsByClassName("cb");
    for (var i = 0; i < cbs.length; i++) {
        cbs[i].checked = false;
    }
    obj.checked = true;
}
*/

function myFunction1(x, _this) {
  if (_this.checked) {
    x.style.backgroundColor = 'green';
  } else  {
    x.style.backgroundColor = 'red';
  }
}

var table = document.getElementById('table');
table.addEventListener('click', handler);