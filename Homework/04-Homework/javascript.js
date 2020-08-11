var startQuizBtn = document.getElementById("button");
var timer = document.getElementById("timer");
var questions = document.getElementById("questions-card");

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
startQuizBtn.addEventListener("click", hiddenQuestions);