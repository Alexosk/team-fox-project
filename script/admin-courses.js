let teachers = [
    "Tea Chairson",
    "Kristian Kjeldsen",
    "Tobias Landén",
    "Tim Berners Lee"
]

let courseObjects = [
    { name: "HTML", teacher: "" },
    { name: "JavaScript", teacher: "" },
    { name: "Back-end", teacher: "" },
    { name: "CSS", teacher: "" },
    { name: "Arbetsmetodik", teacher: "" }
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

function attachTeacherToCourse() {
    let courseName = courseTeacher.options[courseTeacher.selectedIndex].text;
    let teacherName = teacherSelect.options[teacherSelect.selectedIndex].text;
    let courseObject = findCourseObject(courseName);
    courseObject.teacher = teacherName;
    courseList.innerHTML = "";
    printCourses();
    modal2.style.display = "none";
}

function findCourseObject(courseName) {
    for (let i = 0; i < courseObjects.length; i++) {
        if (courseObjects[i].name === courseName) {
            return courseObjects[i];
        }
    }
}

function printCourses() {
    for (let i = 0; i < courseObjects.length; i++) {
        let li = document.createElement('li');
        let a = document.createElement('a');
        let strong = document.createElement('strong');
        let courseName = courseObjects[i].name;
        let teacherName = courseObjects[i].teacher;
        strong.innerHTML = `${courseName} - ( ${teacherName} )`;
        a.appendChild(strong);
        li.appendChild(a);
        courseList.appendChild(li);
    }
}

function printCoursesToModal() {
    for (let i = 0; i < courseObjects.length; i++) {
        let option = document.createElement('option');
        option.value = courseObjects[i].name;
        option.innerHTML = courseObjects[i].name;
        courseNameRemove.appendChild(option);
        option = document.createElement('option');
        option.value = courseObjects[i].name;
        option.innerHTML = courseObjects[i].name;
        courseTeacher.appendChild(option);
    }
}

function addCourse(courseName) {
    if (courseName !== "") {
        let course = { name : courseName, teacher: "" };
        courseObjects.push(course);
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
    let courseObjectToRemove = findCourseObject(courseToRemove);
    let index = courseObjects.indexOf(courseObjectToRemove);
    courseObjects.splice(index, 1);
    modal2.style.display = "none";
    clearCourses();
    clearModalTextBox();
    printCourses();
    printCoursesToModal();
}

function printTeachers() {
    for (let i = 0; i < teachers.length; i++) {
        let option = document.createElement('option');
        option.value = teachers[i];
        option.innerHTML = teachers[i];
        teacherSelect.appendChild(option);
    }
}
