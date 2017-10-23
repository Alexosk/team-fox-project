function evaluation() {

    let elements = document.getElementById("weekly-form").elements
    let numberOfQuestions = 0;
    let allQuestions = [];
    let validatedQuestions = [];
    let unansweredQuestions = [];

    // Get all the questions
    for (var index = 0; index < elements.length; index++) {
        if ((!allQuestions.includes(elements[index].name)) && elements[index].type != "submit") {
            allQuestions.push(elements[index].name);
            numberOfQuestions++;
        }
    }

    unansweredQuestions = allQuestions.slice(0);

    // Check all radio questions
    for (var index = 0; index < elements.length; index++) {
        if (elements[index].type === "radio" && (!validatedQuestions.includes(elements[index].name)) && elements[index].checked) {
            validatedQuestions.push(elements[index].name);
            let removeIndex = unansweredQuestions.indexOf(elements[index].name);
            unansweredQuestions.splice(removeIndex, 1);
        }
    }

    // Check all textareas
    for (var index = 0; index < elements.length; index++) {
        if (elements[index].type === "textarea" && elements[index].value != "") {
            validatedQuestions.push(elements[index].name);
            let removeIndex = unansweredQuestions.indexOf(elements[index].name);
            unansweredQuestions.splice(removeIndex, 1);
        }
    }

    //Write message to DOM
    if (unansweredQuestions.length > 0) {
        for (var index = 0; index < unansweredQuestions.length; index++) {
            for (var index2 = 0; index2 < allQuestions.length; index2++) {
                if (unansweredQuestions[index] == allQuestions[index2]) {
                    document.getElementsByClassName(allQuestions[index2])[0].style.color = "Red";
                    document.getElementsByClassName(allQuestions[index2])[0].innerHTML = "<br>Obligatorisk fråga!";
                }
            }
        }
        //Remove fail message if question is now answered
        for (var index = 0; index < validatedQuestions.length; index++) {
            for (var index2 = 0; index2 < allQuestions.length; index2++) {
                if (validatedQuestions[index] == allQuestions[index2]) {
                    document.getElementsByClassName(allQuestions[index2])[0].innerHTML = "";
                }
            }
        }
        return false;
    }

    window.location.reload();
}