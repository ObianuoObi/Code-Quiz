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

let currentQuestion = 0;
let score = 0;
let time = 0;
let timerId;

// function to populate questions

function populateQuestions(questions) {
  console.log(questions)
  let question = questions.title;
  let choices = questions.choices;
  let answer = questions.answer;

  // set the text of the html
  choicesContainer.innerHTML = '';
  questionTitle.textContent = question;
  console.log(questionTitle)
  // create list content in array 
  let choicesList = document.createElement('ul');
  for (let i = 0; i < choices.length; i++) {
    let choice = document.createElement('li');
    choice.textContent = choices[i];
    choicesList.appendChild(choice);
  }
  choicesContainer.appendChild(choicesList);

}

// function endGame() {

// } 
function nextQuestion() {
  currentQuestion++;
  populateQuestions(questions[currentQuestion]);

}

// // start the quiz

function startQuiz() {
    // Start the timer
        time = questions.length * 15;
        timerId = setInterval(updateTime, 1000);

        // Display the first question
        displayQuestion();
      }

//     // Function to update the time
//       function updateTime() {
//         time--;
//         document.getElementById("time").innerHTML = time;
//         if (time <= 0) {
//           endQuiz();
//         }
//       }
// let counter; 
// startButton.addEventListener('click', function() {
//     // set attribute to make questions visible and invisible
//     startScreenElement.setAttribute('class', 'hide');
//     questionContainer.setAttribute('class', 'visible');

//     questions.forEach(function(question) {
//         populateQuestions(question);
//     })

//     // show the first question
//     currentQuestion = 0;
//     populateQuestions(questions[currentQuestion]);



//     let counter = 100;
//     let timer = setInterval(function() {
//         counter--;
//         timerContainer = counter;
//         if (counter <= 0) {
//             endGame()
//             clearInterval(timer);
//         }

//     }, 1000);
// });

// choices.addEventListener('click', function(){



// });









function startQuiz() {
  // Start the timer
  time = questions.length * 15;
  timerId = setInterval(updateTime, 1000);

  // Display the first question
  displayQuestion();
}

// Function to update the time
function updateTime() {
  time--;
  document.getElementById("time").innerHTML = time;
  if (time <= 0) {
    endQuiz();
  }
}

// Function to display the current question
function displayQuestion() {
  // Update the question title
  document.getElementById("question-title").innerHTML = questions[currentQuestion].question;

  // Clear the previous choices
  document.getElementById("choices").innerHTML = "";

  // Display the choices for the current question
  for (let i = 0; i < questions[currentQuestion].choices.length; i++) {
    let choice = document.createElement("button");
    choice.innerHTML = questions[currentQuestion].choices[i];
    choice.onclick = checkAnswer;
    document.getElementById("choices").appendChild(choice);
  }
  populateQuestions(questions[currentQuestion])
}

// Function to check if the answer is correct
function checkAnswer() {
  if (this.innerHTML === questions[currentQuestion].correctAnswer) {
    score++;
    document.getElementById("feedback").innerHTML = "Correct!";
  } else {
    time -= 10;
    document.getElementById("feedback").innerHTML = "Incorrect!";
  }
  document.getElementById("feedback").classList.remove("hide");
  currentQuestion++;
  if (currentQuestion === questions.length) {
    endQuiz();
  } else {
    setTimeout(displayQuestion, 1000);
  }
}

// Function to end the quiz
function endQuiz() {
  clearInterval(timerId);
  document.getElementById("end-screen").classList.remove("hide");
  document.getElementById("final-score").innerHTML = score;
}

// Add event listener to start button
document.getElementById("start").addEventListener("click", function () {
  startQuiz();
  document.getElementById("start-screen").classList.add("hide");
  document.getElementById("questions").classList.remove("hide");
});

document.getElementById("submit").addEventListener("click", function () {
  let initials = document.getElementById("initials").value;
  //save the score and initials in localstorage
  localStorage.setItem("initials", initials);
  localStorage.setItem("score", score);
  //redirect to the highscore page
  window.location.href = "highscores.html";
});