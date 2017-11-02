// Global variables
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
    'Östen Åberg'
];
let calculatedGroupsDiv = document.getElementById("calculatedGroups");
let groupDivContainer = document.getElementById("groupDivContainer");
let numberOfGroups = 0;
let numberOfStudentsWithGroup = 0;
let numberOfStudentsWithoutGroup = 0;
let noOfStudentsInEachGroup = 0;
let studentsCopy = [];

// Shows and hides the students
function showStudents() {
    let allStudents = document.getElementById("allStudents");
    let noOfStudents = allStudents.childElementCount;
    let studentsButton = document.getElementById("studentsButton");
    // Get the H2 heading without setting an id, ultra tedious
    let allStudentsHeading = document.getElementsByClassName("box")[0].firstElementChild.firstElementChild;

    // If there are no students showing at the moment
    if (noOfStudents === 0) {
        studentsButton.value = "Göm Studenter";
        allStudentsHeading.innerHTML = "Alla Studenter";
        allStudentsHeading.innerHTML += ` ( ${countStudents()} )`;
        for (var index = 0; index < students.length; index++) {
            let studentDiv = document.createElement('div');
            studentDiv.innerHTML = students[index];
            studentDiv.className = "studentDiv";
            allStudents.appendChild(studentDiv);
        }
    }
    // There are students showing, so remove them
    else {
        studentsButton.value = "Visa Studenter";
        allStudentsHeading.innerHTML = "Alla Studenter";
        allStudents.innerHTML = "";
    }
}

function countStudents() {
    return students.length;
}

function createGroups() {
    // Makes a copy of the students array
    studentsCopy = students.slice(0);
    // Get the select element from DOM
    let noOfStudentsOptions = document.getElementById("groupsForm").elements[1];
    // Get the selected number of students from the DOM select element
    noOfStudentsInEachGroup = noOfStudentsOptions.options[noOfStudentsOptions.selectedIndex].value;
    numberOfStudentsWithoutGroup = countStudents() % noOfStudentsInEachGroup;
    numberOfStudentsWithGroup = countStudents() - numberOfStudentsWithoutGroup;
    numberOfGroups = numberOfStudentsWithGroup / noOfStudentsInEachGroup;

    clearGroups();

    shuffleArray(studentsCopy);

    calculatedGroupsDiv.innerHTML =
        "Antal studenter: " + countStudents()
        + "<br> Antal studenter i varje grupp: " + noOfStudentsInEachGroup
        + "<br> Antal möjliga grupper: " + numberOfGroups
        + "<br> Antal studenter utan grupp: " + numberOfStudentsWithoutGroup;

    for (var i = 0; i <= numberOfGroups; i++) {
        let group = document.createElement('div');
        // If it's the last iteration and there are student without a groups
        if (i === numberOfGroups && numberOfStudentsWithoutGroup > 0) {
            group.innerHTML = "<h3>Ingen grupp </h3><br>";
            populateGroup(group, true);
            group.className = "groupDiv";
            groupDivContainer.appendChild(group);
        }
        // If it's NOT the last iteration
        else if (i !== numberOfGroups){
            let j = i+1;
            group.innerHTML = "<h3>Grupp " + j + "</h3><br>";
            populateGroup(group, false);
            group.className = "groupDiv";
            groupDivContainer.appendChild(group);
        }
    }
}

function clearGroups() {
    calculatedGroupsDiv.innerHTML = "";
    groupDivContainer.innerHTML = "";
}

function populateGroup(group, noGroupBoolean) {

    let numberOfStudents = 0;

    if (noGroupBoolean){
        numberOfStudents = numberOfStudentsWithoutGroup;
    }
    else{
        numberOfStudents = noOfStudentsInEachGroup
    }

    for (let j = 1; j <= numberOfStudents; j++) {
        let student = studentsCopy.shift();
        let studentDiv = document.createElement('div');
        studentDiv.innerHTML = student;
        studentDiv.className = "studentDiv";
        group.appendChild(studentDiv);
    }
}

function shuffleArray(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
}
