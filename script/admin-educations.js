let educations = [
    "Frontend-utvecklare",
    "Målare",
    "Backend-utveckare"
]

let educationList = document.getElementById("admin-educations-list");
let educationNameRemove = document.getElementById("educationNameRemove");

window.addEventListener('load', function () {
    printEducations();
    printEducationsToModal();    
});

function printEducations() {
    for (var i = 0; i < educations.length; i++) {
        let li = document.createElement('li');
        let a = document.createElement('a');        
        let strong = document.createElement('strong');
        let educationName = educations[i];
        strong.innerHTML = educationName;
        educationName === "Frontend-utvecklare" ? a.href="admin-frontend-classes.html" : a.href="#";
        a.appendChild(strong);
        li.appendChild(a);
        educationList.appendChild(li);
    }
}

function addEducation(educationName) {
    if (educationName !== ""){
        educations.push(educationName);
        modal.style.display = "none";
        clearEducations();
        clearModalTextBox();
        printEducations();
        printEducationsToModal()
    }
}

function clearEducations() {
    educationList.innerHTML = "";
    educationNameRemove.innerHTML = "";
}

function printEducationsToModal() {
    for (var i = 0; i < educations.length; i++) {
        let option = document.createElement('option');
        option.value = educations[i];
        option.innerHTML = educations[i];
        educationNameRemove.appendChild(option);
    }
}

function clearModalTextBox() {
    let educationName = document.getElementById("educationName");
    educationName.value = "";
}

function removeEducation() {
    let e = document.getElementById("educationNameRemove");
    let educationToRemove = e.options[e.selectedIndex].text;
    let index = educations.indexOf(educationToRemove);
    educations.splice(index, 1);
    modal.style.display = "none";    
    clearEducations();
    clearModalTextBox();
    printEducations();
    printEducationsToModal()
}