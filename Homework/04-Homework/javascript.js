//HTML document variables
var startQuizBtn = document.getElementById("start-button");
var timer = document.getElementById("timer");
var startContain = document.getElementById("start-container");

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

//Function to hide start when start quiz button clicked
function hideStart() {
  if (startContain.style.display === "none") {
    startContain.style.display = "block";
  } else {
    startContain.style.display = "none";
  }
}

//Score keeper
var score = 0;
var increment = 0;
var mainContain = document.getElementById("main-container");
var questionText = document.createElement("div");
  
function nextQues () {
  questionText.textContent = questionsAnswers[increment].question;
  mainContain.append(questionText);
  console.log(questionText);
    
  for (var i = 0; i < questionsAnswers[increment].answerChoices.length; i++){
    var answerText = document.createElement("button");
    answerText.addEventListener("click",function(){
      var userChoice = this.textContent;
      console.log(userChoice);
      if (userChoice === questionsAnswers[increment].correctAnswer){
        console.log("correct");
        increment++;
        score++;
        console.log(score);
        mainContain.innerHTML= "";
        nextQues();
      } else {
        console.log("incorrect");
        increment++
        console.log(score);
        oneMin15sec - 5;
        mainContain.innerHTML= ""
        nextQues();
      }
      });
      answerText.textContent = questionsAnswers[increment].answerChoices[i];
      mainContain.append(answerText);
      console.log(answerText);
    }
  }

//Event listeners to hide start card, unhide questions and start timer upon click of the start button
startQuizBtn.addEventListener ("click", startTimer);
startQuizBtn.addEventListener ("click", hideStart);
startQuizBtn.addEventListener("click",nextQues);

//When all questions answered or timer = 0, game is over

//When game is over, user can save initials & score