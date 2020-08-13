//HTML document variables
var startQuizBtn = document.getElementById("start-button");
var timer = document.getElementById("timer");
var startCard = document.getElementById("start-card");
var questionsCard = document.getElementById("questions-card");
var questionText = document.getElementById("question-text");
var answerButtons = document.getElementById("answer-buttons");
var choiceA = document.getElementById("choice-A");
var choiceB = document.getElementById("choice-B");
var choiceC = document.getElementById("choice-C");
var choiceD = document.getElementById("choice-D");

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
    correctAnswer: "curly brakets {}",
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
var score = 0;

//Add question 0 to question text element
questionText.textContent = questionsAnswers[0].question;
//Add question 0 answers to answer text element
choiceA.textContent = questionsAnswers[0].answerChoices[0];
choiceB.textContent = questionsAnswers[0].answerChoices[1];
choiceC.textContent = questionsAnswers[0].answerChoices[2];
choiceD.textContent = questionsAnswers[0].answerChoices[3];

var userChoice = answerButtons.addEventListener("click",function(){
  console.log(userChoice)
  if (userChoice === choiceB) {
    console.log("Correct");
    score++;
    console.log(score);
  } else {
    console.log("Incorrect");
    console.log(score);
    oneMin15sec = oneMin15sec - 5;
  }
});

//Event listeners to hide start card, unhide questions and start timer upon click of the start button
startQuizBtn.addEventListener ("click", startTimer);
startQuizBtn.addEventListener ("click", hideStart);
startQuizBtn.addEventListener("click", hiddenQuestionsUntilStart);

//When all questions answered or timer = 0, game is over

//When game is over, user can save initials & score