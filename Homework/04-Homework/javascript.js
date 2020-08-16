document.body.style.backgroundColor = "#ecf4f9";
var h1Title = document.getElementById("welcome-text");
h1Title.style.fontFamily = "Russo One";

//HTML document variables
var startQuizBtn = document.getElementById("start-button");
var timer = document.getElementById("timer");
timer.style.fontSize = "x-large";
timer.style.fontFamily = "Russo One";
var startContain = document.getElementById("start-container");
var clickStart = document.getElementById("click-start");
clickStart.style.fontSize = "x-large";
clickStart.style.fontFamily = "Russo One"
var mainContain = document.getElementById("main-container");
var timerContain = document.getElementById("timer-container")

//Questions and answers object
var questionsAnswers = [{
    question: "How are single line comments denoted in JavaScript?",
    answerChoices: ["single slash /", "double slash //", "slash with star /*", "star *"],
    correctAnswer: "double slash //",
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
      oneMin15sec =0;
      timerContain.innerHTML = "";
      //If not at the end of the object.. 
    } else {
      //Create a div to add the question text into the HTML document
      var questionText = document.createElement("div");
      questionText.style.backgroundColor = "#f0f0f0";
      //Add the question into the div created
      mainContain.innerHTML = ""
      mainContain.append(questionText);
      //Increment the questions into the page sequentially
      questionText.textContent = questionsAnswers[increment].question;
      questionText.style.marginTop = "25px"
      questionText.style.fontSize = "x-large";
      questionText.style.padding = "10px";
      questionText.style.borderStyle = "solid";
      questionText.style.borderWidth = "1px";
      questionText.style.borderColor = "#dddddd";
      questionText.style.borderRadius = "5px";
      questionText.style.fontFamily = "Russo One"
      //For loop to increment through the questions and answers
      for (var i = 0; i < questionsAnswers[increment].answerChoices.length; i++) {
        //Create buttons to add the answer choices into the HTML document
        var answerText = document.createElement("button");
        var answerBtn = document.createElement("div");
        answerText.setAttribute("class", "btn btn-info btn-lg")
        answerText.style.marginLeft = "15px";
        answerText.style.marginBottom = "15px";
        answerText.style.marginTop = "15px";
        answerBtn.style.backgroundColor = "white";
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
            correctIncorrect.style.fontSize = "xx-large";
            correctIncorrect.style.fontWeight = "bold";
            correctIncorrect.style.color = "green";
            correctIncorrect.style.fontFamily = "Russo One"
            mainContain.append(correctIncorrect);
            //Increase increment to move to next question answer set
            increment++;
            //Increase score
            score++;
            //Insert next question onto page
            var delayInMilliseconds = 500; //0.5 second
            setTimeout(function () {
              mainContain.innerHTML = ""
              nextQues();
            }, delayInMilliseconds);
          } else {
            //If incorrect, add in incorrect text into the HTML document
            correctIncorrect.textContent = "Incorrect!";
            correctIncorrect.style.fontSize = "xx-large";
            correctIncorrect.style.fontWeight = "bold";
            correctIncorrect.style.color = "red";
            correctIncorrect.style.fontFamily = "Russo One"
            mainContain.append(correctIncorrect);
            //Increase increment to move to next question answer set
            increment++;
            //Penalty to score for incorrect answer
            oneMin15sec = oneMin15sec - 10;
            //Insert next question onto page
            var delayInMilliseconds = 500; //0.5 second
            setTimeout(function () {
              mainContain.innerHTML = "";
              nextQues();
            }, delayInMilliseconds);
          }
        });
        //Add in answer text into the HTML page
        answerText.textContent = questionsAnswers[increment].answerChoices[i];
        mainContain.append(answerBtn);
        answerBtn.append(answerText);
        //Add score to local storage
        localStorage.setItem("Score: ", score);
      }
    }
  }
  //Function to end game
  function endGame() {
    //Clear the HTML screen
    mainContain.innerHTML = "";
    timerContain.innerHTML = "";
    //Access score from local storage
    var finalScore = localStorage.getItem("Score: ");
    //Creat div element to add final score text into the HTML document
    var gameOver = document.createElement("div");
    gameOver.textContent = "GAME OVER!";
    gameOver.style.fontFamily = "Russo One"
    gameOver.style.marginTop = "25px"
    gameOver.style.backgroundColor = "#f0f0f0";
    gameOver.style.padding = "10px";
    gameOver.style.fontSize = "xx-large";
    gameOver.style.textAlign = "center";
    gameOver.style.borderStyle = "solid";
    gameOver.style.borderWidth = "1px";
    gameOver.style.borderColor = "#dddddd";
    gameOver.style.borderRadius = "5px";
    mainContain.append(gameOver)
    var finalText = document.createElement("div");
    finalText.textContent = "Your final score is: " + finalScore;
    mainContain.append(finalText);
    finalText.style.fontSize = "x-large";
    finalText.style.fontFamily = "Russo One"
    finalText.style.backgroundColor = "white";
    //Create a form and input for user to add initials into
    var form = document.createElement("form");
    form.style.backgroundColor = "white";
    var inputInitials = document.createElement("input");
    inputInitials.style.marginBottom = "10px";
    var inputForm = document.createElement("div");
    inputInitials.setAttribute("id", "initial-input");
    inputInitials.setAttribute("type", "text");
    //Add a submit score button to form
    var formSubmit = document.createElement("button");
    var formButton = document.createElement("div");
    formButton.style.backgroundColor = "white";
    formSubmit.setAttribute("class", "btn btn-info btn-lg")
    formSubmit.setAttribute("id", "form-submit");
    formButton.style.marginLeft = "10px;"
    mainContain.append(form);
    form.append(inputForm);
    inputForm.append(inputInitials);
    mainContain.append(formButton);
    formButton.append(formSubmit);
    formSubmit.textContent = "Submit Initials";
    //Prevent default for form submit button
    var formSubmit = document.getElementById("form-submit");
    formSubmit.addEventListener("click", function (event) {
      event.preventDefault();
      //Input for user initials
      var initials = document.getElementById("initial-input");
      //Put initials into local storage
      localStorage.setItem("Initials: ", initials.value);
      mainContain.innerHTML = "";
      var finalInitials = localStorage.getItem("Initials: ");
      var highScores = document.createElement("div");
      highScores.textContent = "High Scores:"
      highScores.style.marginTop = "25px"
      highScores.style.fontFamily = "Russo One"
      highScores.style.fontSize = "xx-large";
      highScores.style.backgroundColor = "#f0f0f0";
      highScores.style.borderStyle = "solid";
      highScores.style.borderWidth = "1px";
      highScores.style.borderColor = "#dddddd";
      highScores.style.borderRadius = "5px";
      highScores.style.textAlign = "center";
      var initialsScore = document.createElement("div");
      initialsScore.textContent = "Initials: " + finalInitials + " Score: " + finalScore;
      initialsScore.style.fontFamily = "Russo One"
      initialsScore.style.fontSize = "x-large";
      initialsScore.style.textAlign = "center";
      initialsScore.style.backgroundColor = "white";
      initialsScore.style.borderStyle = "solid";
      initialsScore.style.borderWidth = "1px";
      initialsScore.style.borderColor = "#dddddd";
      initialsScore.style.borderRadius = "5px";
      mainContain.append(highScores);
      mainContain.append(initialsScore);
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