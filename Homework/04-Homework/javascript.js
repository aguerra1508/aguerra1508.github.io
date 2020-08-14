//HTML document variables
var startQuizBtn = document.getElementById("start-button");
var timer = document.getElementById("timer");
var startContain = document.getElementById("start-container");
var mainContain = document.getElementById("main-container");
var timerContain = document.getElementById("timer-container")

//Questions and answers object
var questionsAnswers = [{
    question: "How are single line comments denoted in JavaScript?",
    answerChoices: ["/", "//", "/*", "*"],
    correctAnswer: "//",
  },
  {
    question: "Which of the following is not a JavaScript data type?",
    answerChoices: ["number", "string", "boolean", "console"],
    correctAnswer: "console",
  },
  {
    question: "What symbols are used to enclose a function?",
    answerChoices: ["open angeled bracket <>", "parenthesis ()", "curly brackets {}", "square brackets []"],
    correctAnswer: "curly brackets {}",
  },
  {
    question: "The length property returns what value in an array?",
    answerChoices: ["number of items", "index value", "string", "variable"],
    correctAnswer: "number of items",
  },
  {
    question: 'Which of the following is considered a "falsey" value?',
    answerChoices: ["true", "-2", "nothing", "null"],
    correctAnswer: "null",
  },
]

//Function to encompass the entire game
function quizGame() {
  //Function to hide start div when start quiz button clicked
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
        timer.textContent = "TIME EXPIRED!";
        endGame();
      };
    }, 1000)
  }
  //Variables for score keeper and incrementor
  var increment = 0;
  var score = 0;

  //Function to generate questions in sequence from object
  function nextQues() {
    //If else statement. If at the end of the object, end the game
    if (increment === questionsAnswers.length) {
      endGame();
      timerContain.innerHTML="";
      //If not at the end of the object.. 
    } else {
      //Create a div to add the question text into the HTML document
      var questionText = document.createElement("div");
      //Increment the questions into the page sequentially
      questionText.textContent = questionsAnswers[increment].question;
      //Add the question into the div created
      mainContain.append(questionText);
      //For loop to increment through the questions and answers
      for (var i = 0; i < questionsAnswers[increment].answerChoices.length; i++) {
        //Create buttons to add the answer choices into the HTML document
        var answerText = document.createElement("button");
        //Create a div to add in correct or incorrect text into the HTML document
        var correctIncorrect = document.createElement("div");
        //Add event listener to buttons for user choice
        answerText.addEventListener("click", function () {
          //User choice = button clicked
          var userChoice = this.textContent;
          //If else statement for scoring
          if (userChoice === questionsAnswers[increment].correctAnswer) {
            //If correct, add in correct text into the HTML document
            correctIncorrect.textContent = "Correct!";
            mainContain.append(correctIncorrect);
            //Increase increment to move to next question answer set
            increment++;
            //Increase score
            score++;
            //Insert next question onto page
            var delayInMilliseconds = 500; //0.5 second
            setTimeout(function() {
              mainContain.innerHTML=""
              nextQues();
            }, delayInMilliseconds);
          } else {
            //If incorrect, add in incorrect text into the HTML document
            correctIncorrect.textContent = "Incorrect!";
            mainContain.append(correctIncorrect);
            //Increase increment to move to next question answer set
            increment++;
            //Penalty to score for incorrect answer
            oneMin15sec = oneMin15sec - 10;
            //Insert next question onto page
            var delayInMilliseconds = 500; //0.5 second
            setTimeout(function() {
              mainContain.innerHTML="";
              nextQues();
            }, delayInMilliseconds);
          }
        });
        //Add in answer text into the HTML page
        answerText.textContent = questionsAnswers[increment].answerChoices[i];
        mainContain.append(answerText);
        //Add score to local storage
        localStorage.setItem("Score: ", score);
      }
    }
  }
  //Function to end game
  function endGame() {
    //Clear the HTML screen
    mainContain.innerHTML = "";
    timerContain.innerHTML="";
    //Access score from local storage
    var finalScore = localStorage.getItem("Score: ");
    //Creat div element to add final score text into the HTML document
    var finalText = document.createElement("div");
    finalText.textContent = "Your final score is: " + finalScore;
    mainContain.append(finalText);
    //Create a form and input for user to add initials into
    var form = document.createElement("form");
    var inputInitials = document.createElement("input");
    inputInitials.setAttribute("id", "initial-input");
    inputInitials.setAttribute("type", "text");
    //Add a submit score button to form
    var formSubmit = document.createElement("button");
    formSubmit.setAttribute("id", "form-submit");
    mainContain.append(form);
    form.append(inputInitials);
    mainContain.append(formSubmit);
    formSubmit.textContent = "Submit Initials";
    //Prevent default for form submit button
    var formSubmit = document.getElementById("form-submit");
    formSubmit.addEventListener("click", function (event) {
      event.preventDefault();
      //Input for user initials
      var initials = document.getElementById("initial-input");
      //Put initials into local storage
      localStorage.setItem("Initials: ", initials.value);
      var finalInitials = localStorage.getItem("Initials: ");
      var scoreInitials = document.createElement("div");
      scoreInitials.textContent = "High Scores: " + " Initials: " + finalInitials + " Score: " + finalScore;
      mainContain.append(scoreInitials);
      //Create a div to put High score info into the HTML document
    })
  }
  //Event listeners to hide start card, unhide questions and start timer upon click of the start button
  startQuizBtn.addEventListener("click", startTimer);
  startQuizBtn.addEventListener("click", hideStart);
  startQuizBtn.addEventListener("click", nextQues);
}
//Call function to start the game
quizGame();
