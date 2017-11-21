let courses = [
    "HTML",
    "JavaScript",
    "Back-end",
    "CSS",
    "Arbetsmetodik"
]

let teachers = [
    "Tea Chairson",
    "Kristian Kjeldsen", 
    "Tobias Landén",
    "Tim Berners Lee"
]

let courseList = document.getElementById("admin-educations-list");
let courseNameRemove = document.getElementById("educationNameRemove");
let courseTeacher = document.getElementById("courseTeacher");
let teacherSelect = document.getElementById("teacherSelect");

window.addEventListener('load', function () {
    printCourses();
    printCoursesToModal();
    printTeachers();
});

function printCourses() {
    for (var i = 0; i < courses.length; i++) {
        let li = document.createElement('li');
        let a = document.createElement('a');    
        let strong = document.createElement('strong');
        let courseName = courses[i];
        strong.innerHTML = courseName;
        a.appendChild(strong);
        li.appendChild(a);
        courseList.appendChild(li);
    }
}

function printCoursesToModal() {
    for (var i = 0; i < courses.length; i++) {
        let option = document.createElement('option');
        option.value = courses[i];
        option.innerHTML = courses[i];
        courseNameRemove.appendChild(option);
        option = document.createElement('option');
        option.value = courses[i];
        option.innerHTML = courses[i];
        courseTeacher.appendChild(option);
    }
}

function addCourse(courseName) {
    if (courseName !== "") {
        courses.push(courseName);
        modal2.style.display = "none";
        clearCourses();
        clearModalTextBox();
        printCourses();
        printCoursesToModal();
    }
}

function clearCourses() {
    courseList.innerHTML = "";
    courseNameRemove.innerHTML = "";
    courseTeacher.innerHTML = "";
}

function clearModalTextBox() {
    let courseName = document.getElementById("educationName");
    courseName.value = "";
}

function removeCourse() {
    let c = document.getElementById("educationNameRemove");
    let courseToRemove = c.options[c.selectedIndex].text;
    let index = courses.indexOf(courseToRemove);
    courses.splice(index, 1);
    modal2.style.display = "none";    
    clearCourses();
    clearModalTextBox();
    printCourses();
    printCoursesToModal();
} 

function printTeachers () {
    for (var i = 0; i < teachers.length; i++) {
        let option = document.createElement('option');
        option.value = teachers[i];
        option.innerHTML = teachers[i];
        teacherSelect.appendChild(option);
    }
}
