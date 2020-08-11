var startQuizBtn = document.getElementById("button");
var timer = document.getElementById("timer");
var start = document.getElementById("start-card");
var questions = document.getElementById("questions-card");

function hideStart() {
  if (start.style.display === "none") {
    start.style.display = "block";
  } else {
    start.style.display = "none";
  }
}

function hiddenQuestions() {
  questions.style.display = "block";
}

function startTimer() {
  var eightMin = 8 * 60;
  setInterval(function () {
      eightMin--
      var minutes = eightMin / 60;
      var seconds = eightMin % 60;

      timer.textContent = (Math.floor(minutes)) + " : " + (Math.floor(seconds));
  }, 1000)
}

startQuizBtn.addEventListener ("click", startTimer);
startQuizBtn.addEventListener ("click", hideStart);
startQuizBtn.addEventListener("click", hiddenQuestions);