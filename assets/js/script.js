//Create Click event for start button that starts the game


//Timer starts 

// create our questions
let question = {
    title: '1. When the switch statement matches the expression with the given labels, how is the comparison done?',
    alternatives: ['Both the datatype and the result of the expression are compared.', 'Only the datatype of the expression is compared.', 'Only the value of the expression is compared.', 'None of the above.'],
    correctAnswer: 0
};
// function for showing the question
function showQuestion(q) {
    let questionsDiv = document.getElementById('questions');
    questionsDiv.textContent = q.questions;
  
  // call the function
  showQuestion(question);
}
//when timer starts the game should display the first question and the multiple choice answers 


//if i answer wrong time is taken from clock


//when all questions are answered or timer reaches 0 the game ends 


//when games ends you should be prompted to save score and initials \



// After sending initials and high score you shoulkd be able to restart or clear your high scores
// Add reset button
var resetButton = document.querySelector(".reset-button");

function resetGame() {
    // Resets win and loss counts
    winCounter = 0;
    loseCounter = 0;
    // Renders win and loss counts and sets them into client storage
    setWins()
    setLosses()
}
// Attaches event listener to button
resetButton.addEventListener("click", resetGame);