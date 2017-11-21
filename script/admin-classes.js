let classes = [
    "FE-13",
    "FE-14",
    "FE-15",
    "FE-16",
    "FE-17",
]

let classList = document.getElementById("admin-educations-list");
let classNameRemove = document.getElementById("educationNameRemove");

window.addEventListener('load', function () {
    printClasses();
    printClassesToModal();    
});

function printClasses() {
    for (var i = 0; i < classes.length; i++) {
        let li = document.createElement('li');
        let a = document.createElement('a');
        let strong = document.createElement('strong');
        let className = classes[i];
        strong.innerHTML = className;
        className === "FE-17" ? a.href = "admin-classes.html" : a.href = "#";
        a.appendChild(strong);
        li.appendChild(a);
        classList.appendChild(li);
    }
}

function addClass(className) {
    if (className !== "") {
        classes.push(className);
        modal.style.display = "none";
        clearClasses();
        clearModalTextBox();
        printClasses();
        printClassesToModal();
    }
}

function clearClasses() {
    classList.innerHTML = "";
    classNameRemove.innerHTML = "";
}

function printClassesToModal() {
    for (var i = 0; i < classes.length; i++) {
        let option = document.createElement('option');
        option.value = classes[i];
        option.innerHTML = classes[i];
        classNameRemove.appendChild(option);
    }
}

function clearModalTextBox() {
    let educationName = document.getElementById("educationName");
    educationName.value = "";
}

function removeClass() {
    let c = document.getElementById("educationNameRemove");
    let classToRemove = c.options[c.selectedIndex].text;
    let index = classes.indexOf(classToRemove);
    classes.splice(index, 1);
    modal.style.display = "none";    
    clearClasses();
    clearModalTextBox();
    printClasses();
    printClassesToModal();
}
