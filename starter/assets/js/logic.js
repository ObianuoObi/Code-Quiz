// selectors needed to point to the html element

let startButton = document.querySelector('#start');
let questionContainer = document.querySelector('#questions');
let questionTitle = document.querySelector('#question-title');
let startScreenElement = document.querySelector('#start-screen');
let choicesContainer = document.querySelector('#choices');
let endScreenDiv = document.querySelector('#end-screen');
let yourFinalScore = document.querySelector('#final-score');
let initialInput = document.querySelector('#initials');
let submitButton = document.querySelector('#submit');
let feedbackDiv = document.querySelector('#feedback');
let highscoresList = document.querySelector('#highscores');
let clearButton = document.querySelector('#clear');
let timerContainer = document.querySelector('#timer')

//
function populateQuestions(questions) {
    let question = questions.title;
    let choices = questions.choices;
    let answer = questions.answer;

    choicesContainer.innerHTML = '';
    questionTitle.textContent = questions;
    let choicesList = document.createElement('ul');
    for(let i = 0; i < choices.length; i++) {
        let choice = document.createElement('li');
        choice.textContent = choices[i];
        choicesList.appendChild(choice);
    }
    choicesContainer.appendChild(choicesList); 

}

function endGame() {

}

startButton.addEventListener('click', function() {
    startScreenElement.setAttribute('class', 'hide');
    questionContainer.setAttribute('class', 'visible');

    currentQuestion = 0;
    populateQuestions(questions[currentQuestion]);

    

    let counter = 100;
    let timer = setInterval(function() {
        counter--;
        timerContainer = counter;
        if (counter <= 0) {
            endGame()
            clearInterval(timer);
        }

    }, 1000);
});

choices.addEventListener('click', function(){



});







