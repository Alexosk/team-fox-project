let students = [
    'Armida Abrahamsson',
    'Abbott Askman',
    'Belle Björling',
    'Balthazar Blank',
    'Celine Carelius',
    'Callum McRay',
    'Disa Dahl',
    'Damien Dunkels',
    'Eddie Vedder',
    'Fenja Fagher',
    'Gabriel Gahn',
    'Hampus Högberg',
    'Igor Ingman',
    'Jack the Ripper',
    'Kean König',
    'Laban Spöket',
    'My Meling',
    'Natanael Nostling',
    'Odd Ottosson',
    'Paul McCartney',
    'Quentin Tarantino',
    'Rafael Nadal',
    'Selma Sandér',
    'Tara Tarass',
    'Valdemar Wolter',
    'Xander Svensson',
    'Zac Wilde',
    'Zelda Johansson',
    'Öivind Österberg',
    'Örjan Östling',
    'Örn Ärlig',
    'Östen Åberg',
    'Stu Dentson',

];

window.addEventListener('load', function(){
let studentList = document.getElementsByClassName('student-list');
let ul = document.createElement('ul');
studentList[0].appendChild(ul);

for (var i = 0; i < students.length; i++) {
  let li = document.createElement('li');
  li.innerHTML = "<span class='deleteIcon'>&nbsp;</span>"+students[i];
  ul.appendChild(li);
}
});

// Get the modal
let modal = document.getElementById('myModal');

// Get the button that opens the modal
let btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
