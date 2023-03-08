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
let optionButton = document.querySelectorAll('.btn-options');

let timerContainer = document.querySelector('#timer')

let currentQuestion = -1;
let score = 0;
let time = 0;
let timerId;
//Evt List
optionButton.forEach(btn => btn.addEventListener("click",checkAnswer))
// function to populate questions

function populateQuestions(questions) {
  console.log(questions,"Populate")
  
  questionTitle.innerText= questions.title;
  console.log(questionTitle)
  // create list content in array 
  for (let i = 0; i < questions.choices.length; i++) {
    optionButton[i].innerText = questions.choices[i];
    console.log(optionButton[i])
   ;
  }


}

// function endGame() {

// } 
function nextQuestion() {

  if(currentQuestion<questions.length-1){

     console.log(currentQuestion)
    currentQuestion++;
    populateQuestions(questions[currentQuestion]);
  }else{
    endQuiz()
  }

}

// // start the quiz

function startQuiz() {
  // Start the timer
  time = questions.length * 15;
  timerId = setInterval(updateTime, 1000);
//
  nextQuestion()
}

// Function to update the time
function updateTime() {
  time--;
  document.getElementById("time").innerHTML = time;
  if (time <= 0) {
    endQuiz();
  }
}

// Function to check if the answer is correct
function checkAnswer() {
  console.log(this.textContent,"Check Answer",questions[currentQuestion].correctAnswer);
  if (this.innerText == questions[currentQuestion].correctAnswer) {
    score++
    document.getElementById("feedback").innerText = "Correct!";
  } else {
    time -= 10;
    document.getElementById("feedback").innerText = "Incorrect!";
  }
  document.getElementById("feedback").classList.remove("hide");
  nextQuestion()
}

// Function to end the quiz
function endQuiz() {
  clearInterval(timerId);
  document.getElementById("questions").classList.add("hide");
  document.getElementById("end-screen").classList.remove("hide");
  document.getElementById("final-score").innerText = score;
}

// Add event listener to start button
document.getElementById("start").addEventListener("click", function () {
  document.getElementById("start-screen").classList.add("hide");
  document.getElementById("questions").classList.remove("hide");
  startQuiz();
});

document.getElementById("submit").addEventListener("click", function () {
  let initials = document.getElementById("initials").value;
  //save the score and initials in localstorage
  localStorage.setItem("initials", initials);
  localStorage.setItem("score", score);
  //redirect to the highscore page
  window.location.href = "highscores.html";
});