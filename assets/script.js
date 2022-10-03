// There is a page title, yes!
// There is a start button, yes!
// Listen for the start button click
// When start clicked, a timer starts counting down for 60 seconds
// When clicked, first question displays with four possible answers
// Correct answer, next question
// Incorrect answer, time subtracted
// Game ends when all questions are answered or clocks reaches 0
// Game wins and losses are tallied, saved in localStorage, and rendered on page

//var questionEl = document.querySelector("")
var timerEl = document.querySelector(".timer");
var startButton = document.querySelector(".start-button");

//array of questions user will be asked:
var quizQuestion = []

var secondsLeft = 60;

//Start button event, game questions appear and timer starts
startButton.addEventListener("click", countdown);

//game function
/*function startGame () {
    timerCount = ;
    startButton.disabled = true;
    renderQuestions()
    startTimer()
    
}*/

//timer
function countdown () {
    var timeInterval = setInterval(function () {
        secondsLeft--;
        timerEl.textContent = secondsLeft;
    }, 1000);
}