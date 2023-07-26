// declare global variables
var highScores = document.querySelector("#highScores");
var clear = document.querySelector("#clear");
var goBack = document.querySelector("#goBack");
// Event listener to clear scores
clear.addEventListener("click", function () {
    localStorage.clear();
    location.reload();
});
// Retrieve local storage
var localStorage = localStorage.getItem("allScores");
localStorage = JSON.parse(localStorage);
if (allScores !== null) {
    for (var i = 0; i < allScores.length; i++) {
        var createLi = document.createElement("li");
        createLi.textContent = allScores[i].initials + " " + allScores[i].score;
        highScores.appendChild(createLi);
    }
}
// Event listener to move to index page
goBack.addEventListener("click", function () {
    window.location.replace("./index.html");
}
);