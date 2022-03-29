// object containing quesitons, answers and correct answer key
let questions = [
    {
        question: "What is the color of the sky",
        answers: ["Blue", "Red", "Green", "orange"],
        correctAnswer: "Blue",

    },
    {
        question: "What is the Grass",
        answers: ["dog", "Purple", "roof", "green"],
        correctAnswer: "green",

    },
    {
        question: "What is the color of the chewy",
        answers: ["Red", "Blue", "brown", "chewy"],
        correctAnswer: "brown",

    }
];

// time availiable for quiz
var timer = 120;
// keepts track of what questions user is on
var questionIndex = 0
// variable of progress of quiz
var progress = 0;
// variables that store # of right and wrong answers
var numbRightAnswers = 0;
var numbWrongAnswers = 0;

// function that updates the progress bar
function progressBar (){
    document.getElementById("progressBar").setAttribute("style", "width: " + progress + "%");
    document.getElementById("progressBar").textContent = progress + "%";

};

// event listner that runs start funtion on startButton click
document.getElementById("startButton").addEventListener("click", start);
// funtion for start button click- hids button, shows quiz, and starts and displays timer
function start () {
    // hides start button
    document.getElementById("startButtonDiv").style.display = 'none';
    // shows quiz
    document.getElementById("quiz").style.display = 'contents';
    // calls setTime to start timer countdown
    setTime();
    // calls funtion to display quesitons and answers
    displayQuestionsAndAnswers()
};

// if no more questions are left displays score, asks for user initials for recording


// sets timer for quiz
function setTime() {
    var timerInterval = setInterval(function() {
      timer--;
      document.getElementById("timeLeft").textContent = timer;
      if(timer === 0) {
        clearInterval(timerInterval);
      }
    }, 1000);
  };

//   funtion that displays questions and answers, includes checks for right answe button click with event listners for each
function displayQuestionsAndAnswers(){
    // varibles for current question and answers from questions object
    var questionDisplay = questions[questionIndex].question;
    var answers0 = questions[questionIndex].answers[0];
    var answers1 = questions[questionIndex].answers[1];
    var answers2 = questions[questionIndex].answers[2];
    var answers3 = questions[questionIndex].answers[3];
    // variable representing current questions correct answer
    var currentCorrectAnswer = questions[questionIndex].correctAnswer
    // populates the question area with text from the questions object
    document.getElementById("questionArea").textContent = questionDisplay;
    // populates the answer buttons with text of possible answers from questions object
    document.getElementById("answer0").textContent = answers0;
    document.getElementById("answer1").textContent = answers1;
    document.getElementById("answer2").textContent = answers2;
    document.getElementById("answer3").textContent = answers3;
    
    // event listenrs for click of button of each possible answer and checks if right answer with answerchecker function
    document.getElementById("answer0").addEventListener("click", answerchecker0);
    document.getElementById("answer1").addEventListener("click", answerchecker1);
    document.getElementById("answer2").addEventListener("click", answerchecker2);
    document.getElementById("answer3").addEventListener("click", answerchecker3);

    


};


// checks answer text value against the text value of the correct answe from questions object
function answerchecker0(){
    var currentCorrectAnswer = questions[questionIndex].correctAnswer;

    // if the text of the button clicked is same as the currect quesitons correct answer, 
    // alert user they are correct, else alert incorrect and subtract time. add to numb correct answer
    if (document.getElementById("answer0").textContent == currentCorrectAnswer){
        alert("Correct!");
        numbRightAnswers ++;
    }
    // if text of button clicked is not the same as the current correct answer, alert user, 
    // subtract time, and incremnt question index so display function shows next question
    else {
        alert("incorrect! Loose ten secounds");
        numbWrongAnswers ++;
        timer = timer - 10;
    };
    // add progress to progress variable and increment  question index to select next 
    // question for display and run display function
    questionIndex ++;
    progress = Math.ceil(progress + (100 / (questions.length)));
    progressBar();
    displayQuestionsAndAnswers();
};
function answerchecker1(){
    var currentCorrectAnswer = questions[questionIndex].correctAnswer;

    if (document.getElementById("answer1").textContent == currentCorrectAnswer){
        alert("Correct!");
        numbRightAnswers ++;
    }
    else {
        alert("incorrect! Loose ten secounds");
        timer = timer - 10;
        numbWrongAnswers ++;
    };
    
    questionIndex ++;
    progress = Math.ceil(progress + (100 / (questions.length)));
    progressBar();
    displayQuestionsAndAnswers();
};
function answerchecker2(){
    var currentCorrectAnswer = questions[questionIndex].correctAnswer;

    if (document.getElementById("answer2").textContent == currentCorrectAnswer){
        alert("Correct!");
        numbRightAnswers ++;
    }
    else {
        alert("incorrect! Loose ten secounds");
        timer = timer - 10;
        numbWrongAnswers ++;
    };
    
    questionIndex ++;
    progress = Math.ceil(progress + (100 / (questions.length)));
    progressBar();
    displayQuestionsAndAnswers();
};
function answerchecker3(){
    var currentCorrectAnswer = questions[questionIndex].correctAnswer;

    if (document.getElementById("answer3").textContent == currentCorrectAnswer){
        alert("Correct!");
        numbRightAnswers ++;
    }
    else {
        alert("incorrect! Loose ten secounds");
        timer = timer - 10;
        numbWrongAnswers ++;
    };
    questionIndex ++;
    progress = Math.ceil(progress + (100 / (questions.length)));
    progressBar();
    displayQuestionsAndAnswers();
};

// ends quiz when there are no questions left or time is out and brings user to score board. 


