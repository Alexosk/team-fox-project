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
  li.innerHTML = students[i];
  ul.appendChild(li);
}
});
