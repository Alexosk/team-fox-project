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
    'Roland'
];

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
    let noOfStudentsInEachGroup = noOfStudentsOptions.options[noOfStudentsOptions.selectedIndex].value;

    let calculatedGroupsDiv = document.getElementById("calculatedGroups");

    let numberOfStudentsWithoutGroup = countStudents() % noOfStudentsInEachGroup;

    let numberOfStudentsWithGroup = countStudents() - numberOfStudentsWithoutGroup;

    let numberOfGroups = numberOfStudentsWithGroup / noOfStudentsInEachGroup;

    calculatedGroupsDiv.innerHTML = 
    "Antal studenter: " + countStudents()
    + "<br> Antal studenter i varje grupp: " + noOfStudentsInEachGroup
    + "<br> Antal möjliga grupper: " + numberOfGroups
    + "<br> Antal studenter utan grupp: " + numberOfStudentsWithoutGroup;
    
// let noOfStudentsWithoutGroup = countStudents() % noOfGroups;

/*     // Number of students without a group

    let noOfStudentsWithGroup = countStudents() - noOfStudentsWithoutGroup;

    let noOfStudentsInEachGroup = noOfStudentsWithGroup / noOfGroups;

    calculatedGroupsDiv.innerHTML = 
    " Number of Students: " + countStudents();
    + "<br> Students with a group: " + noOfStudentsWithGroup 
    + "<br> Students in each group: " + noOfStudentsInEachGroup 
    + "<br> Students without a group: " + noOfStudentsWithoutGroup; 
    
    nubmerOfStudentsInEachGroup * numberOfGroups = numberOfStudents


    */
}

