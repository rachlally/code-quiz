// There is a page title, yes!
// There is a start button, yes!
// Listen for the start button click, yes!
// When start clicked, a timer starts counting down for 60 seconds, yes!
// When clicked, first question displays with four possible answers
// Correct answer, next question
// Incorrect answer, time subtracted
// Game ends when all questions are answered or clocks reaches 0
// Game wins and losses are tallied, saved in localStorage, and rendered on page

//var questionEl = document.querySelector("")
var timerEl = document.querySelector(".timer-display");
var startButton = document.querySelector(".start-button");
var questionBox = document.querySelector(".questions");
var chosenQuestion = "";

//array of questions user will be asked:
var quizQuestion = [{
    id: 0,
    q: "The first Jack oLanterns were made from:",
    a: [{text: "pumpkins", isCorrect: false },
        {text: "carrots", isCorrect: false },
        {text: "turnips", isCorrect: true },
        {text: "potatoes", isCorrect: false }
]

},
{
    id: 1,
    q: "The fear of Halloween is:",
    a: [{text: "Skellophobia", isCorrect: false },
        {text: "Hallowphobia", isCorrect: false },
        {text: "Wiccaphobia", isCorrect: false},
        {text: "Samhainophobia", isCorrect: true }
]
},
{   id: 2,
    q: "What city holds the record for most Jack oLanterns lit at once? (30,128!)",
    a: [{text: "Toronto", isCorrect: false },
        {text: "Boston", isCorrect: true },
        {text: "San Francisco", isCorrect: false},
        {text: "Philadelphia", isCorrect: false }
]
}]

var secondsLeft = 15;

//game function starts when start button clicked
function startGame () {
  //  timerCount = 15;
    startButton.disabled = true;
    renderQuestion()
    countdown()
    
}

function renderQuestion (){
    chosenQuestion = quizQuestion[Math.floor(Math.random() * quizQuestion.length)];
    questionBox.textContent = chosenQuestion;
}

function correctAnswer (){
    if (isCorrect == true) {
        result
    }
}

//timer function
function countdown () {
    var timeInterval = setInterval(function () {
        secondsLeft--;
        timerEl.textContent = secondsLeft;
    
    if (secondsLeft === 0) {
        clearInterval(timeInterval);
    }
}, 1000);
}

//Start button event, game questions appear and timer starts
startButton.addEventListener("click", startGame);