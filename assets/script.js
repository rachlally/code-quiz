// There is a page title, yes!
// There is a start button, yes!
// Listen for the start button click, yes!
// When start clicked, a timer starts counting down for 30 seconds, yes!
// When clicked, first question displays with four possible answers
// Correct answer, next question
// Incorrect answer, time subtracted
// Game ends when all questions are answered or clocks reaches 0
// Game wins and losses are tallied, saved in localStorage, and rendered on page

var timerEl = document.querySelector(".timer-display");
var startButton = document.querySelector(".start-button");
var questionBox = document.querySelector(".questions");

//Array for chosen question
var chosenQuestion = "";

//variable to keep track of score
var score = 0;

var secondsLeft = 30;

//questions user will be asked:
var quizQuestion = [

    {q: "The first JackOLanterns were made from:", options: ["pumpkins", "carrots", "turnips", "potatoes"], answer: "turnips"},

    {q: "The fear of Halloween is:", options: ["Skellophobia", "Hallowphobia", "Wiccaphobia", "Samhainophobia"], answer: "Samhainophobia"},

    {q: "What city holds the record for most JackoLanterns lit at once? (30,128!)", options: ["Toronto", "Boston", "San Francisco", "Philadelphia"], answer: "Boston"},
];


//game function starts when start button clicked
function startGame () {
    timerCount = 15;
    startButton.disabled = true;
    renderQuestion()
    countdown()
    
    
}

//generate question and render to page
function renderQuestion (){
    chosenQuestion = quizQuestion[0];
    var questionText = chosenQuestion.q;
    questionBox.textContent = questionText;
    questionBox.textContent = quizQuestion.options;

   for (var i = 0; i < answers.length; i++) {
        var currentAnswer = answers[i];
        var currentAnswerText = currentAnswer.text
        var isCorrectAnswer = currentAnswer.isCorrect
        var choiceElement = document.createElement('p');
        choiceElement.textContent = currentAnswerText;
        choiceElement.dataset.isCorrect = isCorrectAnswer;
    }
    chosenQuestion = quizQuestion[1];
    var questionText = chosenQuestion.q;
    var answerText = chosenQuestion.a;
    questionBox.textContent = questionText;

   /* for (var i = 0; i < answers.length; i++) {
        var currentAnswer = answers[i];
        var currentAnswerText = currentAnswer.text
        var isCorrectAnswer = currentAnswer.isCorrect
        var choiceElement = document.createElement('p');
        choiceElement.textContent = currentAnswerText;
        choiceElement.dataset.isCorrect = isCorrectAnswer;
    }
    chosenQuestion = quizQuestion[2];
    var questionText = chosenQuestion.q;
    var answers = chosenQuestion.a;
    questionBox.textContent = questionText;

    for (var i = 0; i < answers.length; i++) {
        var currentAnswer = answers[i];
        var currentAnswerText = currentAnswer.text
        var isCorrectAnswer = currentAnswer.isCorrect
        var choiceElement = document.createElement('p');
        choiceElement.textContent = currentAnswerText;
        choiceElement.dataset.isCorrect = isCorrectAnswer;
    }*/
   
    
}

function correctAnswer (){
    if (isCorrect == true) {
        result
    }


//timer function
function countdown () {
    var timeInterval = setInterval(function () {
        secondsLeft--;
        timerEl.textContent = secondsLeft;
        console.log('timer!')
    
    if (secondsLeft === 0) {
        clearInterval(timeInterval);
    }
}, 1000);
}

//Start button event, game questions appear and timer starts
startButton.addEventListener("click", startGame);

}
