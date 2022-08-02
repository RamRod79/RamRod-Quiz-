// create questions
// array of ojects
// var contentEl = document.getElementById('content');
let startBtn = document.querySelector('#start');
let timerEl = document.querySelector('#timer');
let containerEl = document.querySelector('#container');
let scoreEl = document.querySelector('#score');
let contentEl = document.getElementById("content");

let score = 0
let timer = 75
let currentQuestionIndex = 0;

// Bank of questions
let questions = [
    {
        question: "Javascript is an _______ language?",
        options: ["A. Object-Oriented", "B. Object-Based", "C. Procedural", "D. None of the Above"],
        answer: "A" || "Object-Oriented"
    },
    {
        question: "Which of the following keywords is used to define a variable in Javascript?",
        options: ["A. Var", "B. Let", "C. Both A & B", "D. None of the Above"],
        answer: "C" || "Both A & B"
    },
    {
        question: "Which of the following methods is used to access HTML elements using Javascript?",
        options: ["A. getElementbyID", "B. getElementsByClassName()", "C. Both A & B", "D. None of the Above"],
        answer: "C" || "Both A & B"
    },

    {
        question: "What does the ‘toLocateString()’ method do in JS?",
        options: ["A. Returns a localised object representation.", "B. Returns a parsed string.", "C. Returns a localised string representation of an objecct. ", "D. None of the Above"],
        answer: "C" || "Returns a localised string representation of an objecct"
    },
    {
        question: "When an operator’s value is NULL, the typeof returned by the unary operator is:",
        options: ["A. Boolean", "B. Undefined", "C. Object", "D. Integer"],
        answer: "C" || "Object"
    },
    {
        question: "What keyword is used to check whether a given property is valid or not?",
        options: ["A. in", "B. is in", "C. exists", "D. lies"],
        answer: "A" || "in"
    },
    {
        question: "When the switch statement matches the expression with the given labels, how is the comparison done?",
        options: ["A. Only the datatype of the expression is compared", "B. Both the datatype and the result of the expression are compared", "C. Only the value of the expression is compared", "D. None of the Above"],
        answer: "B" || "Both the datatype and the result of the expression are compared"
    },
    {
        question: "How can a datatype be declared to be a constant type?",
        options: ["A. var", "B. let", "C. constant", "D. const"],
        answer: "D" || "const"
    },
    {
        question: "Which of the following methods can be used to display data in some form using Javascript?",
        options: ["A. document.write()", "B. console.log()", "C. window.alert()", "D. All of the Above"],
        answer: "D" || "All of the Above"
    },
    {
        question: "Upon encountering empty statements, what does the Javascript Interpreter do?",
        options: ["A. Throws an error", "B. Ignores the statements", "C. Gives a warning", "D. None of the Above"],
        answer: "B" || "Ignores the statements"
    }
];

function renderCurrentQuestion() {
    containerEl.innerHTML = '';
    let currentQuestions = questions[currentQuestionIndex];

     let header = document.createElement('h2');
    header.textContent = currentQuestions.question;
    containerEl.appendChild(header);

    let ulEl = document.createElement('ul');

    for (let i = 0; i < currentQuestions.options.length; i++) {
        let liEl = document.createElement('li');
        liEl.textContent = currentQuestions.options[i];
        ulEl.appendChild(liEl);
    }
    containerEl.appendChild(ulEl);
}
//Start Button
startBtn.addEventListener('click', function() {
    // console.log('Test'); 
    renderCurrentQuestion();

// Countdown timer
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

containerEl.addEventListener('click', function(event) {

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