// time availiable for quiz
var timer = 120;
// keepts track of what questions user is on
var questionIndex = 0


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

//   funtion that displays questions and answers
function displayQuestionsAndAnswers(){
    // varibles for current question and answers from questions object
    var question = questions[questionIndex].question;
    var answers0=questions[questionIndex].answers[0];
    var answers1=questions[questionIndex].answers[1];
    var answers2=questions[questionIndex].answers[2];
    var answers3=questions[questionIndex].answers[3]
    console.log(question)
    // populates the question area with text from the questions object
    document.getElementById("questionArea").textContent = question;
    // populates the answer buttons with text of possible answers from questions object
    document.getElementById("answer0").textContent = answers0;
    document.getElementById("answer1").textContent = answers1;
    document.getElementById("answer2").textContent = answers2;
    document.getElementById("answer3").textContent = answers3;
};



// object containing quesitons, answers and correct answer key
let questions = [
    {
        question: "What is the color of the sky",
        answers: ["Red", "Blue", "Green", "orange"],
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