//HTML document variables
var startQuizBtn = document.getElementById("start-button");
var timer = document.getElementById("timer");
var startContain = document.getElementById("start-container");
var mainContain = document.getElementById("main-container");

//Questions and answers object
var questionsAnswers = [
  {
    question: "How are single line comments denoted in JavaScript?",
    answerChoices: ["/", "//","/*","*"],
    correctAnswer: "//",
  },
  {
    question: "Which of the following is not a JavaScript data type?",
    answerChoices: ["number","string","boolean","console"],
    correctAnswer: "console",
  },
  {
    question: "What symbols are used to enclose a function?",
    answerChoices: ["open angeled bracket <>", "parenthesis ()", "curly brackets {}","square brackets []"],
    correctAnswer: "curly brackets {}",
  },
  {
    question: "The length property returns what value in an array?",
    answerChoices: ["number of items","index value","string","variable"],
    correctAnswer: "number of items",
  },
  {
    question: 'Which of the following is considered a "falsey" value?',
    answerChoices: ["true","-2","nothing","null"],
    correctAnswer: "null",
  },
]
function quizGame(){
//Function to hide start when start quiz button clicked
  function hideStart() {
    if (startContain.style.display === "none") {
      startContain.style.display = "block";
    } else {
      startContain.style.display = "none";
    }
  }
//Timer variable
var oneMin15sec = 75;
//Function to start timer when start button clicked
function startTimer() {
  //Setting timer interval
  var timerCount = setInterval(function () {
      oneMin15sec--
      var minutes = Math.floor(oneMin15sec / 60);
      var seconds = Math.floor(oneMin15sec % 60);
      //Formatting seconds to include zero if less than 10 i.e. 09
      if (seconds < 10) {
        seconds = "0" + seconds
      }
      timer.textContent = "Time Left: " + minutes + ":" + seconds;
      //Clearing timer interval
      if (oneMin15sec === 0) {
       clearInterval(timerCount);
       timer.textContent= "TIME EXPIRED!";
       endGame();
       };
 }, 1000)
}
//Variables for question function, score keeper and incrementor
var increment = 0;
var score = 0;  
  
function nextQues () {
  var questionText = document.createElement("div");
  questionText.textContent = questionsAnswers[increment].question;
  mainContain.append(questionText);
  console.log(questionText);
  
  for (var i = 0; i < questionsAnswers[increment].answerChoices.length; i++){
    var correctIncorrect = document.createElement("div");
    var answerText = document.createElement("button");
    answerText.addEventListener("click",function(){
      var userChoice = this.textContent;
      console.log(userChoice);
      if (userChoice === questionsAnswers[increment].correctAnswer){
        correctIncorrect.textContent = "Correct!"
        mainContain.append(correctIncorrect);
        console.log(correctIncorrect);
        increment++;
        score++;
        console.log(score);
        nextQues();
      } else {
        correctIncorrect.textContent = "Incorrect!"
        mainContain.append(correctIncorrect);
        console.log(correctIncorrect);
        increment++;
        console.log(score);
        oneMin15sec = oneMin15sec - 10;
        console.log(oneMin15sec);
        nextQues();
      }
      });
      answerText.textContent = questionsAnswers[increment].answerChoices[i];
      mainContain.append(answerText);
      console.log(answerText);
      localStorage.setItem("Score: ",score); 
    }
  }
function endGame () {
  var finalScore = localStorage.getItem("Score: ");
  var finalText = document.createElement("div");
  finalText.textContent = "Your final score is: " + finalScore;
  mainContain.append(finalText);
  var form = document.createElement("form");
  var inputInitials = document.createElement("input");
  inputInitials.setAttribute("id", "initial-input");
  inputInitials.setAttribute("type","text");
  var formSubmit = document.createElement("button");
  formSubmit.setAttribute("id","form-submit");
  mainContain.append(form);
  form.append(inputInitials);
  mainContain.append(formSubmit);
  formSubmit.textContent = "Submit Initials";
  var formSubmit = document.getElementById("form-submit");
  formSubmit.addEventListener("click",function(event){
  event.preventDefault();
  var initials = document.getElementById("initial-input");
  localStorage.setItem("Initials: ", initials.value);
  var finalInitials = localStorage.getItem("Initials: ");
  var scoreInitials = document.createElement("div");
  scoreInitials.textContent = "High Scores: " + " Initials: " + finalInitials + " Score: " + finalScore;
  mainContain.append(scoreInitials);
  console.log(scoreInitials);
})
}
startQuizBtn.addEventListener ("click", startTimer);
startQuizBtn.addEventListener ("click", hideStart);
startQuizBtn.addEventListener ("click", nextQues);
}
quizGame();
//Event listeners to hide start card, unhide questions and start timer upon click of the start button