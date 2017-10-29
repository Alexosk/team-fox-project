function dropdownnav() {
    let navigationUL = document.getElementById("navigation-ul");
    if (navigationUL.className === "") {
        navigationUL.className  += " shown";
    } else {
        navigationUL.className  = "";
    }
}
