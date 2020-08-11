//HTML document variables
var startQuizBtn = document.getElementById("start-button");
var timer = document.getElementById("timer");
var startCard = document.getElementById("start-card");
var questionsCard = document.getElementById("questions-card");
var questionText = document.getElementById("question-text");
var choiceA = document.getElementById("choice-a");
var choiceB = document.getElementById("choice-b");
var choiceC = document.getElementById("choice-c");
var choiceD = document.getElementById("choice-d");
var nextBtn = document.getElementById ("next-button");
var questions = "What does HTML stand for?"
var answers = "Hyper Text Mark Up Language"

//Function to hide start card when start quiz button clicked
function hideStart() {
  if (startCard.style.display === "none") {
    startCard.style.display = "block";
  } else {
    startCard.style.display = "none";
  }
}

//Function to keep questions hidden until start button clicked
function hiddenQuestionsUntilStart() {
  questionsCard.style.display = "block";
}

//Function to start timer when start button clicked
function startTimer() {
  var eightMin = 1 * 60;
  var timerCount = setInterval(function () {
      eightMin--
      var minutes = Math.floor(eightMin / 60);
      var seconds = Math.floor(eightMin % 60);
      if (seconds < 10) {
        seconds = "0" + seconds
      }
      timer.textContent = "Time Left: " + minutes + ":" + seconds;
      if (eightMin === 0) {
        clearInterval(timerCount);
        timer.textContent=  "TIME EXPIRED!";
      }
  }, 1000)
}

questionText.append(questions);
choiceA.append(answers);

//Event listeners to hide start card, unhide questions and start timer upon click of the start button
startQuizBtn.addEventListener ("click", startTimer);
startQuizBtn.addEventListener ("click", hideStart);
startQuizBtn.addEventListener("click", hiddenQuestionsUntilStart);