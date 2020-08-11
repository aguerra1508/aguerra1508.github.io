//HTML document variables
var startQuizBtn = document.getElementById("button");
var timer = document.getElementById("timer");
var start = document.getElementById("start-card");
var questions = document.getElementById("questions-card");

//Function to hide start card when start quiz button clicked
function hideStart() {
  if (start.style.display === "none") {
    start.style.display = "block";
  } else {
    start.style.display = "none";
  }
}

//Function to keep questions hidden until start button clicked
function hiddenQuestionsUntilStart() {
  questions.style.display = "block";
}

//Function to start timer when start button clicked
function startTimer() {
  var eightMin = 8 * 60;
  setInterval(function () {
      eightMin--
      var minutes = Math.floor(eightMin / 60);
      var seconds = Math.floor(eightMin % 60);
      if (seconds < 10) {
        seconds = "0" + seconds
      }
      timer.textContent = "Time Left: " + minutes + ":" + seconds;
      
  }, 1000)
}

//Event listeners to hide start card, unhide questions and start timer upon click of the start button
startQuizBtn.addEventListener ("click", startTimer);
startQuizBtn.addEventListener ("click", hideStart);
startQuizBtn.addEventListener("click", hiddenQuestionsUntilStart);