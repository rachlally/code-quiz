// There is a page title, yes!
// There is a start button, yes!
// Listen for the start button click, yes!
// When start clicked, a timer starts counting down for 60 seconds, yes!
// When clicked, first question displays with four possible answers, yes!
// Correct answer, next question
// Incorrect answer, time subtracted
// Game ends when all questions are answered or clocks reaches 0
// Game wins and losses are tallied, saved in localStorage, and rendered on page

var timerEl = document.querySelector("#timer-display");
var startButton = document.querySelector("#start-button");
var questionBox = document.querySelector("#questions");

var choice1 = document.querySelector("#choices1");
var choice2 = document.querySelector("#choices2");
var choice3 = document.querySelector("#choices3");
var choice4 = document.querySelector("#choices4");
var choiceButton = document.querySelector(".choice-button");

var right = 0;
var wrong = 0;


//variable to keep track of score
var score = 0;

var secondsLeft = 30;

//create an array for quiz questions, answers, and correct answer
var quiz = [

    {
        question:'The first JackOLanterns were made from',
        answers: ['pumpkins', 'carrots', 'turnips', 'potatoes'],
        correct: 'turnips',
    },

    {
        question: 'The fear of Halloween is:',
        answers: ['Skellophobia', 'Hallowphobia', 'Wiccaphobia', 'Samhainophobia'],
        correct: 'Samhainophobia',
    },

    {
        question: 'What city holds the record for most JackoLanterns lit at once? (30,128!)',
        answers: ['Toronto', 'Boston', 'San Francisco', 'Philadelphia'],
        correct: 'Boston',
    },

];
console.log(quiz);

//game function starts when start button clicked
function startGame () {
    timerCount = 30;
    startButton.disabled = true;
    renderQuestion()
    countdown()
    console.log('playing!')

    //click event for each button 
    choice1.addEventListener("click", function(event) {
        var chosenAnswer = event.target;
        console.log(chosenAnswer.textContent);
        if (chosenAnswer.textContent === quiz[index].correct) {
        console.log('correct!');
    } else {
        console.log('wrong');
    }})
    choice2.addEventListener("click", function(event) {
        var chosenAnswer = event.target;
        console.log(chosenAnswer.textContent);
        if (chosenAnswer.textContent === quiz[index].correct) {
        console.log('correct!');
    } else {
        console.log('wrong');
    }})
    choice3.addEventListener("click", function(event) {
        var chosenAnswer = event.target;
        console.log(chosenAnswer.textContent);
        if (chosenAnswer.textContent === quiz[index].correct) {
        console.log('correct!');
    } else {
        console.log('wrong');
    }})
    choice4.addEventListener("click", function(event) {
        var chosenAnswer = event.target;
        console.log(chosenAnswer.textContent);
        if (chosenAnswer.textContent === quiz[index].correct) {
        console.log('correct!');
    } else {
        console.log('wrong');
    }})
    
    if (chosenAnswer === quiz[index].correct) {
            right++;
            
    } else {
            wrong++;
            console.log("Wrong!");
    }};
    
    /* else {

        for (index = 0; index < choice.length; index++) {

        }
    } */
    
var index = 0

function renderQuestion() {
    var chosenQuestion = quiz[index].question;
    questionBox.textContent = chosenQuestion;
    choice1.textContent = quiz[index].answers[0];
    choice2.textContent = quiz[index].answers[1];
    choice3.textContent = quiz[index].answers[2];
    choice4.textContent = quiz[index].answers[3];
}
 
//timer function
function countdown() {
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
