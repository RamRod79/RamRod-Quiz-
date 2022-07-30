// create questions
// array of ojects
// var contentEl = document.getElementById('content');
var startBtn = document.querySelector('#start');
var timerEl = document.querySelector('#timer');
var containerEl = document.querySelector('#container');

var timer = 75
var currentQuestionIndex = 0;


var questions = [
    {
        question: "What is the color of the sky",
        options: ["blue", "orange", "red", "green"],
        answer: "blue"
    },
    {
        question: "What car is best",
        options: ["audi", "ford", "kia", "gmc"],
        answer: "kia"
    },
    {
        question: "What language is best",
        options: ["java", "c++", "javascript", "puthon"],
        answer: "javascript"
    }
];

function renderCurrentQuestion() {
    containerEl.innerHTML = '';

    var currentQuestion = questions[currentQuestionIndex];

    var header = document.createElement('h2');
    header.textContent = questions[currentQuestionIndex].question;
    containerEl.appendChild(header);

    var ulEl = document.createElement('ul');

    for (var i = 0; i < currentQuestion.options.length; i++) {
        varliEl = document.createElement('li');
        liEl.textContent = currentQuestion.options[i];
        ulEl.appendChild(liEl);
    }
    containerEl.appendChild(ulEl);
}

startBtn.addEventListener('click', function() {

    renderCurrentQuestion();

    var timerInterval = setInterval(function() {
        timerEl.textContent = timer;
        timer--;



        if (timer === 0) {
            clearInterval(timerInterval);
            containerEl.innerHTML = "";
            // CHange DOM to say game over
        }
    }, 1000);
};

containerEl.addEventListener('click', function (event) {

    if (event.target.matches('li')) {
        var currentQuestion = questions[currentQuestionIndex];

        var userGuess = event.target.textContent;

        if (userGuess === currentQuestion.answer) {
   // keep score here
   //play sound
//    modify timer
        } else {

            
        } 
        currentQuestionIndex++;
        renderCurrentQuestion();
    }

});