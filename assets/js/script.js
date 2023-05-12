// Create variables for app
var resetBtn = document.getElementById("reset");
var clearBtn = document.getElementById("clear");
var startBtn = document.getElementById("start");
var submitBtn = document.getElementById("submit");
var choice1Btn = document.getElementById("ch-1");
var choice2Btn = document.getElementById("ch-2");
var choice3Btn = document.getElementById("ch-3");
var choice4Btn = document.getElementById("ch-4");
var scorecard = document.getElementById("enter-score");
var userScore = document.getElementById("user-score");
var questionText = document.getElementById("question-text")

let currentQuestions = 0;
let score = 0;

let questions = [
    {
        question: "Which of the following keywords is used to define a variable in Javascript?",
        answers: [
            { option: "var", answer: false },
            { option: "let", answer: false },
            { option: "Both A and B!", answer: true },
            { option: "None of the above ", answer: false },
        ]
    },
    {
        question: "Which of the following methods can be used to display data in some form using Javascript?",
        answers: [
            { option: "document.write", answer: false },
            { option: "console.log()", answer: false },
            { option: "windows.alert", answer: true },
            { option: "All of the above ", answer: true },
        ]
    },
    {

        question: "When the switch statement matches the expression with the given labels, how is the comparison done?",
        answers: [
            { option: "Both the datatype and the result of the expression are compared", answer: true },
            { option: "Only the datatype of the expression is compared", answer: false },
            { option: "Only the value of the expression is compared", answer: true },
            { option: "None of the above ", answer: false },
        ]
    }
]
//click events for buttons 
resetBtn.addEventListener("click", reset);
clearBtn.addEventListener("click", clear);
startBtn.addEventListener("click", start);
submitBtn.addEventListener("click", submit);
choice1Btn.addEventListener("click", choice1);
choice2Btn.addEventListener("click", choice - 2);
choice3Btn.addEventListener("click", choice - 3);
choice4Btn.addEventListener("click", choice - 4);

function start() {
    currentQuestions = 0;
    totalScore.innerHTML = questions.length;
    questionText.innerHTML = questions[currentQuestion].question;
    btnChoice1.innerHTML = questions[currentQuestion].answers[0].option;
    btnChoice1.onclick = () => {
        if (questions[currentQuestion].answers[0].answer) {
            if (score < 3) {
                score++;
            }
        }
        userScore.innerHTML = score;
        if (currentQuestion < 2) {
            next();
        }
    }

    btnChoice2.innerHTML = questions[currentQuestion].answers[1].option;
    btnChoice2.onclick = () => {
        if (questions[currentQuestion].answers[1].answer) {
            if (score < 3) {
                score++;
            }
        }
        userScore.innerHTML = score;
        if (currentQuestion < 2) {
            next();
        }
    }

    btnChoice3.innerHTML = questions[currentQuestion].answers[1].option;
    btnChoice3.onclick = () => {
        if (questions[currentQuestion].answers[1].answer) {
            if (score < 3) {
                score++;
            }
        }
        userScore.innerHTML = score;
        if (currentQuestion < 2) {
            next();
        }
    }

    btnChoice4.innerHTML = questions[currentQuestion].answers[1].option;
    btnChoice4.onclick = () => {
        if (questions[currentQuestion].answers[1].answer) {
            if (score < 3) {
                score++;
            }
        }
        userScore.innerHTML = score;
        if (currentQuestion < 2) {
            next();
        }
    }

    prevBtn.classList.add("hide");
}

beginQuiz();

function reset() {
    currentQuestion = 0;
    clearBtn.classList.remove("hide");
    startBtn.classList.remove("hide");
    submitBtn.classList.remove("hide");
    choice1Btn.classList.remove("hide");
    choice2Btn.classList.remove("hide");
    choice3Btn.classList.remove("hide");
    choice4Btn.classList.remove("hide");
    score = 0;
    userScore.innerHTML = score;
    beginQuiz();
} function reset() {
    currentQuestion = 0;
    clearBtn.classList.remove("hide");
    startBtn.classList.remove("hide");
    submitBtn.classList.remove("hide");
    choice1Btn.classList.remove("hide");
    choice2Btn.classList.remove("hide");
    choice3Btn.classList.remove("hide");
    choice4Btn.classList.remove("hide");
    score = 0;
    userScore.innerHTML = score;
    beginQuiz();
}