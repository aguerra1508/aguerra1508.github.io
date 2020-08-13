//HTML document variables
var startQuizBtn = document.getElementById("start-button");
var timer = document.getElementById("timer");
var startCard = document.getElementById("start-card");
var questionsCard = document.getElementById("questions-card");
var questionText = document.getElementById("question-text");
var answerText = document.getElementById("answer-text");

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
    correctAnswer: "curly brackets {}"
  },
  {
    question: "The length property returns what value in an array?",
    answerChoices: ["number of items","index Value","string","variable"],
    correctAnswer: "number of items",
  },
  {
    question: 'Which of the following is considered a "falsey" value?',
    answerChoices: ["true","-2","nothing","null"],
    correctAnswer: "null",
  },
]

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
      }
  }, 1000)
}

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

//For loop incrementer and score keeper
var increment = 0;
var score = 0;

//Adding questions and answers into appropriate spots on card
questionText.append(questionsAnswers[increment].question);

for(var i = 0; i < questionsAnswers[increment].answerChoices.length; i++){
  answerText.addEventListener("click", function(){
    var userChoice = this.textContent
    if (userChoice === questionsAnswers[increment].correctAnswer){
      console.log("Correct");
      increment++
      score++;
      console.log(score);
      } else {
      console.log("Incorect");
      increment++
      console.log(score);
      oneMin15sec = oneMin15sec - 10;
      }
    })
  answerText.append(questionsAnswers[increment].answerChoices[i]);
  }

//Event listeners to hide start card, unhide questions and start timer upon click of the start button
startQuizBtn.addEventListener ("click", startTimer);
startQuizBtn.addEventListener ("click", hideStart);
startQuizBtn.addEventListener("click", hiddenQuestionsUntilStart);

//When all questions answered or timer = 0, game is over

//When game is over, user can save initials & score