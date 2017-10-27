function hideSmileySurvey(feeling, liNumber) {
    document.getElementById("smileyHeading").innerHTML = feeling;
    document.getElementById("smileySurvey").children[0].style.border = "2px solid green";
    

    switch (liNumber) {
        case 1:
            document.getElementById("smileyList").children[0].style.fontSize = "350%";
            document.getElementById("smileyList").children[1].style.fontSize = "200%";
            document.getElementById("smileyList").children[2].style.fontSize = "200%";
            document.getElementById("smileyList").children[1].innerHTML = "&#128553";
            document.getElementById("smileyList").children[2].innerHTML = "&#128553";
            break;
        case 2:
            document.getElementById("smileyList").children[0].style.fontSize = "200%";
            document.getElementById("smileyList").children[1].style.fontSize = "350%";
            document.getElementById("smileyList").children[2].style.fontSize = "200%";
            document.getElementById("smileyList").children[0].innerHTML = "&#128528";
            document.getElementById("smileyList").children[2].innerHTML = "&#128528";
            break;
        case 3:
            document.getElementById("smileyList").children[0].style.fontSize = "200%";
            document.getElementById("smileyList").children[1].style.fontSize = "200%";
            document.getElementById("smileyList").children[2].style.fontSize = "350%";
            document.getElementById("smileyList").children[0].innerHTML = "&#128512";
            document.getElementById("smileyList").children[1].innerHTML = "&#128512";
            break;
    }

    setTimeout(function () {
        document.getElementById("smileySurvey").style.display = 'none';
    }, 3000);
}