function hideSmileySurvey(feeling, liNumber) {
    document.getElementById("smileyHeading").innerHTML = feeling;

    switch (liNumber) {
        case 1:
            document.getElementById("smileyList").children[0].style.fontSize = "350%";
            document.getElementById("smileyList").children[1].style.fontSize = "150%";
            document.getElementById("smileyList").children[2].style.fontSize = "150%";
            break;
        case 2:
            document.getElementById("smileyList").children[0].style.fontSize = "150%";
            document.getElementById("smileyList").children[1].style.fontSize = "350%";
            document.getElementById("smileyList").children[2].style.fontSize = "150%";
            break;
        case 3:
            document.getElementById("smileyList").children[0].style.fontSize = "150%";
            document.getElementById("smileyList").children[1].style.fontSize = "150%";
            document.getElementById("smileyList").children[2].style.fontSize = "350%";
            break;
    }

    setTimeout(function () {
        document.getElementById("smileySurvey").style.display = 'none';
    }, 3000);
}