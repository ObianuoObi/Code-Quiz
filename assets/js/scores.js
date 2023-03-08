// Get the initials and score from the local storage
let initials = localStorage.getItem("initials");
let score = localStorage.getItem("score");

// Display the initials and score on the page
if (initials !== null && score !== null) {
    let highscoresList = document.getElementById("highscores");
    let highscoreItem = document.createElement("li");
    let initialsSpan = document.createElement("span");
    initialsSpan.innerHTML = initials;
    let scoreSpan = document.createElement("span");
    scoreSpan.innerHTML = score;
  
    highscoreItem.appendChild(initialsSpan);
    highscoreItem.appendChild(scoreSpan);
    highscoresList.appendChild(highscoreItem);
  }

  // Add event listener to clear highscores button
document.getElementById("clear").addEventListener("click", function () {
    localStorage.clear();
    // remove the highscores list
    document.getElementById("highscores").innerHTML = "";
  });