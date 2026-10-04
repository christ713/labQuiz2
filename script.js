function evaluateScore(score) {


if (isNaN(score) || score <= 0 || score > 100) {
    return "Invalid Score";
} 
else if (score >= 90) {
    return "Excellent";
} 
else if (score >= 75) {
    return "Passed";
} 
else {
    return "Failed";
}


}

// Welcome message
alert("Welcome to the Score Evaluation Program!");

// Ask for name
let name = prompt("Please enter your name:");

// Get webpage elements
let nameResult = document.getElementById("nameResult");
let scoreResult = document.getElementById("scoreResult");
let remarkResult = document.getElementById("remarkResult");

// Check name
if (name === null || name.trim() === "") {


nameResult.textContent = "No name entered";
scoreResult.textContent = "-";
remarkResult.textContent = "Invalid";


}
else {


name = name.trim();

// Ask for score
let scoreInput = prompt("Please enter your score:");

// Check score
if (scoreInput === null || scoreInput.trim() === "") {

    nameResult.textContent = name;
    scoreResult.textContent = "No score entered";
    remarkResult.textContent = "Invalid";

} 
else {

    let score = Number(scoreInput);

    // Ask user if they want to continue
    let proceed = confirm(
        "Hello " + name +
        "! Your score is " + scoreInput +
        ". Do you want to continue?"
    );


    if (proceed) {

        let remark = evaluateScore(score);

        // Display result
        nameResult.textContent = name;
        scoreResult.textContent = scoreInput;
        remarkResult.textContent = remark;

    } 
    else {

        nameResult.textContent = name;
        scoreResult.textContent = scoreInput;
        remarkResult.textContent = "You chose not to continue.";

    }
}


}
