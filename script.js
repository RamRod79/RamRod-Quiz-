// create questions
// array of ojects
// var contentEl = document.getElementById('content');
let startBtn = document.querySelector('#start');
let timerEl = document.querySelector('#timer');
let containerEl = document.querySelector('#container');

let score = 0
let timer = 75
let currentQuestionIndex = 0;


let questions = [
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

    let currentQuestion = questions[currentQuestionIndex];

    let header = document.createElement('h2');
    header.textContent = questions[currentQuestionIndex].question;
    containerEl.appendChild(header);

    let ulEl = document.createElement('ul');

    for (let i = 0; i < currentQuestion.options.length; i++) {
        let liEl = document.createElement('li');
        liEl.textContent = currentQuestion.options[i];
        ulEl.appendChild(liEl);
    }
    containerEl.appendChild(ulEl);
}
//Start Button
startBtn.addEventListener('click',function(){
    renderCurrentQuestion();

    let timerInterval = setInterval(function() {
        timerEl.textContent = timer;
        timer--;

        if (timer === 0) {
            clearInterval(timerInterval);
            containerEl.innerHTML = "";
            // CHange DOM to say game over
        }
    }, 1000);
});

containerEl.addEventListener('click', function (event) {

    if (event.target.matches('li')) {
        let currentQuestion = questions[currentQuestionIndex];

        let userGuess = event.target.textContent;

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