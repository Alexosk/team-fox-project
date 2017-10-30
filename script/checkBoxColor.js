var handler = function(event) {
    if(event.target.parentNode.className.indexOf('checked') < 0 ) {
        event.target.parentNode.className += ' checked';
    } else {
        event.target.parentNode.className = event.target.parentNode.className.replace(' checked', '');
    }
}

var table = document.getElementById('table');
table.addEventListener('click', handler);