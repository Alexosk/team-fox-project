/* NOT IN USE */

let educations = [
    "Frontend-utvecklare",
    "Backend-utvecklare",
    "Frontend-avvecklare"
]
let educationList = document.getElementById('admin-educations-list');
let numberOfEducationsInStorage = 0;

window.addEventListener('load', function () {
    setNumberOfEducationsInStorage();
    printEducations();
});

function printEducations() {
    for (i = 0; i < localStorage.length; i++) {
        let x = localStorage.getItem("education " + i.toString());
        if (x !== null) {
            educations.push(x);
        }
    }
    for (var i = 0; i < educations.length; i++) {
        let li = document.createElement('li');
        li.innerHTML = educations[i];
        educationList.appendChild(li);
    }
}

function addEducation(educationName) {
    let number = numberOfEducationsInStorage + 1;
    if (educationName !== "")
        localStorage.setItem("education " + number.toString(), educationName);
}

function setNumberOfEducationsInStorage() {
    for (let i = 0; i < localStorage.length; i++) {
        let number = i + 1;
        let x = localStorage.getItem("education " + number.toString());
        if (x !== null) {
            numberOfEducationsInStorage++;
        }
    }
}

