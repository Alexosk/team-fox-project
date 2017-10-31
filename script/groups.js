// Global variables
let students = [
    'Abbe',
    'Abbott',
    'Abraham',
    'Adrian',
    'Agne',
    'Balder',
    'Balthazar',
    'Ben',
    'Benjamin',
    'Benji',
    'Caesar',
    'Callum',
    'Calvin',
    'Carsten',
    'Caspar',
    'Dag',
    'Damien',
    'Dan',
    'Danny',
    'Dante',
    'Dario',
    'Eddie',
    'Edgar',
    'Edison',
    'Edward',
    'Efraim',
    'Einar',
    'Fabian',
    'Felix',
    'Fergus',
    'Filemon',
    'Findus',
    'Finn',
    'Florean',
    'Fée',
    'Fenja',
    'Fiona',
    'Florentina',
    'Freja',
    'Heaven',
    'Heavenly',
    'Helia',
    'Helinda',
    'Hera',
    'Hevin',
    'Idalia',
    'Idun',
    'Illiona',
    'Inez',
    'Iris',
    'Irmeline',
    'Jadie',
    'Jane',
    'Jasminette',
    'Jenina',
    'Jina',
    'Joline',
    'Juliana',
    'Kali',
    'Kaylin',
    'Kelly',
    'Khioni',
    'Kiara',
    'Klayde',
    'Laila',
    'Lava',
    'Lea',
    'LeAnna',
    'Leia',
    'Leila',
    'Lemon',
    'Kobe',
    'Roland',
    'Homer'
];
let calculatedGroupsDiv = document.getElementById("calculatedGroups");
let groupDivContainer = document.getElementById("groupDivContainer");
let numberOfGroups = 0;
let numberOfStudentsWithGroup = 0;
let numberOfStudentsWithoutGroup = 0;
let noOfStudentsInEachGroup = 0;
let groupsArray = []

function showStudents() {
    let allStudents = document.getElementById("allStudents");
    let noOfStudents = allStudents.childElementCount;
    let studentsButton = document.getElementById("studentsButton");
    // Get the H2 heading without setting an id, ultra tedious
    let allStudentsHeading = document.getElementsByClassName("box")[0].firstElementChild.firstElementChild;

    if (noOfStudents < 1) {
        allStudentsHeading.innerHTML = "Alla Studenter";
        allStudentsHeading.innerHTML += ` ( ${countStudents()} )`;
        for (var index = 0; index < students.length; index++) {
            let studentDiv = document.createElement('div');
            studentDiv.innerHTML = students[index];
            studentDiv.style.border = "1px solid black";
            studentDiv.style.padding = "0.5em";
            studentDiv.style.margin = "0.5em";
            allStudents.appendChild(studentDiv);
        }
    }
    else {
        allStudentsHeading.innerHTML = "Alla Studenter";
        allStudents.innerHTML = "";
    }

    if (studentsButton.value == "Visa Studenter") {
        studentsButton.value = "Göm Studenter";
    }
    else {
        studentsButton.value = "Visa Studenter";
    }
}

function countStudents() {
    return students.length;
}

function createGroups() {
    // Get the select element
    let noOfStudentsOptions = document.getElementById("groupsForm").elements[1];
    // Get the selected number of students in each group
    noOfStudentsInEachGroup = noOfStudentsOptions.options[noOfStudentsOptions.selectedIndex].value;
    // let calculatedGroupsDiv = document.getElementById("calculatedGroups");
    // let groupDivContainer = document.getElementById("groupDivContainer");
    numberOfStudentsWithoutGroup = countStudents() % noOfStudentsInEachGroup;
    numberOfStudentsWithGroup = countStudents() - numberOfStudentsWithoutGroup;
    numberOfGroups = numberOfStudentsWithGroup / noOfStudentsInEachGroup;

    clearGroups();

    calculatedGroupsDiv.innerHTML =
        "Antal studenter: " + countStudents()
        + "<br> Antal studenter i varje grupp: " + noOfStudentsInEachGroup
        + "<br> Antal möjliga grupper: " + numberOfGroups
        + "<br> Antal studenter utan grupp: " + numberOfStudentsWithoutGroup;

    for (var i = 1; i <= numberOfGroups; i++) {
        let group = document.createElement('div');
        group.innerHTML = "Grupp " + i + "<br>";
        group.className = "groupDiv";
        populateGroup(group, i);
        groupDivContainer.appendChild(group);
        if (i === numberOfGroups && numberOfStudentsWithoutGroup > 0) {
            let group = document.createElement('div');
            group.innerHTML = "Ingen Grupp <br>";
            group.className = "groupDiv";
            populateNoGroup(group, i);
            groupDivContainer.appendChild(group);
        }
    }
    console.log(groupsArray);
}

function clearGroups() {
    calculatedGroupsDiv.innerHTML = "";
    groupDivContainer.innerHTML = "";
}

function populateGroup(group, groupNumber) {
    groupsArray.push([]);
    for (let j = 1; j <= noOfStudentsInEachGroup; j++) {
        let student = students.shift();
        groupsArray[groupNumber-1][j-1] = student;
        group.innerHTML += "<br>" + student;
    }
}

function populateNoGroup(group, groupNumber) {
    groupsArray.push([]);
    for (let j = 1; j <= numberOfStudentsWithoutGroup; j++) {
        let student = students.shift();
        groupsArray[groupNumber][j-1] = student;
        group.innerHTML += "<br>" + student;
    }
}

