var timerCount = 10;

var startButton = document.querySelector(".startButton");
var timer1 = document.querySelector(".timer")
var message1 = document.querySelector(".message")

startButton.addEventListener("click", function (event) {
    startButton.style.display= none

    var timer = setInterval(function()) {
        timerCount--;
        timer1.textContent = timerCount

    if (timerCount)

    }
})
