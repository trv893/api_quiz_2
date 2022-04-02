// object containing quesitons, answers and correct answer key
let questions = [
    {
        question: "How do you find the first child of body using js?",
        answers: ["document.body.children[1]", "document.body.children[0]", "document(body)children[1]", "document.body(children[1])"],
        correctAnswer: "document.body.children[0]",

    },
    {
        question: "Which is the correct syntax for javascipt to select element by ID?",
        answers: ['document.querySelector("change2")', 'document.querySelector("#change2")', 'document.getElementById("#submitButton")', 'document.("submitButton")'],
        correctAnswer: 'document.querySelector("#change2")',

    },
    {
        question: "What is the correct order for creating a new element using javascript?",
        answers: ["create, give attributes(text/style etc), append", "create, append, give attributes(text/style etc)", "append, create, set attr", "give attributes, create, append"],
        correctAnswer: "create, give attributes(text/style etc), append",

    },
    {
        question: "Which is the JS method that repeatedly calls a function or executes a code snippet, with a fixed time delay between each cal",
        answers: ['clearInterval()', 'setInterval()', 'setInt()', 'setTimeInterval()'],
        correctAnswer: 'setInterval()',

    },
    {
        question: "Which is the correct way add an event listner to an element using javasript?",
        answers: ['document.querySelector("element"("click",...', 'document.element.on("click",...', 'document.querySelector("element"(if (click",...', 'setTimeInterval()'],
        correctAnswer: 'document.querySelector("element"("click",...',

    },
    {
        question: "Which javascript event listner is activated when a keyboard button is pressed?",
        answers: ['.addEventListener("keyup"', '.addEventListener("keydown"', '.addEventListener("pressKey"', '.addEventListener("click"'],
        correctAnswer: '.addEventListener("keydown"',

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

//selector for form elements
var formElement = document.getElementById("form")
var submitBtn = document.getElementById("submitButton")
var formInput = document.getElementById("name-input")
var nameList = document.getElementById("name-list")


function handleFormSubmit(event) {
    event.preventDefault();
    console.log("test")
    var userScore = Math.floor((numbRightAnswers / questions.length) *100);
  
    var userName = formInput.value;
  
    if (!userName) {
      console.log('No name entered!');
      return;
    }
    var li1 = document.createElement("li");
    li1.textContent = formInput.value + " scored: " + userScore + "%";
    // var userNameItemEl = nameList.innerHTML;
    // userNameItemEl.append('<li class="flex-row justify-space-between align-center p-2 bg-light text-dark">');
    // ;
    // userNameItemEl +
    //   '<input type="text" value="' + userName + '" disabled />'
    // ;
      // print to the page
      nameList.appendChild(li1);

  // clear the form input element
  formInput.value = '';
};

formElement.addEventListener("submit", handleFormSubmit)
// formElement.on("submit", handleFormSubmit);


// creates array from html collection for answer buttons
var answersButtons = Array.from(document.getElementsByClassName("answerbutton"));

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
    display(questionIndex);
};

// if no more questions are left displays score, asks for user initials for recording

if (questionIndex >= questions.length){
    var userScore = questions.length / numbRightAnswers;
    document.getElementById("quiz").style.display = 'none';
    document.getElementById("form").style.display = 'contents';
    document.getElementById("userScore").textContent = userScore;
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

// read question from question array set by questionIndex and renders html with 
// current question when there are still questions to be displayed. If there are 
// no more questions or time is out, displays user score and form for user input
function display (){
    // if there are questions and time left, display questions
    if((questionIndex < questions.length) && timer > 0){
        var q = questions[questionIndex];
        document.getElementById("questionArea").textContent = q.question;
        for (i=0; i<q.answers.length; i++){
            answersButtons[i].textContent = q.answers[i];
            let isCorerct = (q.answers[i] == q.correctAnswer);
            answersButtons[i].setAttribute("correct", isCorerct);
        };
        // when time is up or no questions left, display form
    }else{
        var userScore = Math.floor((numbRightAnswers / questions.length) *100);
        document.getElementById("quiz").style.display = 'none';
        document.getElementById("form").style.display = 'contents';
        document.getElementById("userScore").textContent ="Your score: " + userScore + "%";
    }
};

function answerButtonHandeler(e){
  let buttonClicked = e.srcElement;
  if (buttonClicked.getAttribute("correct") == "true") {
    alert("Correct!");
    numbRightAnswers ++;
    questionIndex ++;
  }
  else{
    alert("incorrect! Loose ten secounds");
    timer = timer - 10;
    numbWrongAnswers ++;
    questionIndex ++;
  };
  progress = Math.floor(progress + (100 / (questions.length)));
  display();
  progressBar();
};

answersButtons.forEach(element => {
    element.addEventListener("click", answerButtonHandeler);
});





// //   funtion that displays questions and answers, includes checks for right answe button click with event listners for each
// function displayQuestionsAndAnswers(){
//     // varibles for current question and answers from questions object
//     var questionDisplay = questions[questionIndex].question;
//     var answers0 = questions[questionIndex].answers[0];
//     var answers1 = questions[questionIndex].answers[1];
//     var answers2 = questions[questionIndex].answers[2];
//     var answers3 = questions[questionIndex].answers[3];
//     // variable representing current questions correct answer
//     var currentCorrectAnswer = questions[questionIndex].correctAnswer
//     // populates the question area with text from the questions object
//     document.getElementById("questionArea").textContent = questionDisplay;
//     // populates the answer buttons with text of possible answers from questions object
//     document.getElementById("answer0").textContent = answers0;
//     document.getElementById("answer1").textContent = answers1;
//     document.getElementById("answer2").textContent = answers2;
//     document.getElementById("answer3").textContent = answers3;
    
//     // event listenrs for click of button of each possible answer and checks if right answer with answerchecker function
//     document.getElementById("answer0").addEventListener("click", answerchecker0);
//     document.getElementById("answer1").addEventListener("click", answerchecker1);
//     document.getElementById("answer2").addEventListener("click", answerchecker2);
//     document.getElementById("answer3").addEventListener("click", answerchecker3);
// };


// // checks answer text value against the text value of the correct answe from questions object
// function answerchecker0(){
//     var currentCorrectAnswer = questions[questionIndex].correctAnswer;

//     // if the text of the button clicked is same as the currect quesitons correct answer, 
//     // alert user they are correct, else alert incorrect and subtract time. add to numb correct answer
//     if (document.getElementById("answer0").textContent == currentCorrectAnswer){
//         alert("Correct!");
//         numbRightAnswers ++;
//     }
//     // if text of button clicked is not the same as the current correct answer, alert user, 
//     // subtract time, and incremnt question index so display function shows next question
//     else {
//         alert("incorrect! Loose ten secounds");
//         numbWrongAnswers ++;
//         timer = timer - 10;
//     };
//     // add progress to progress variable and increment  question index to select next 
//     // question for display and run display function
//     questionIndex ++;
//     progress = Math.ceil(progress + (100 / (questions.length)));
//     progressBar();
//     displayQuestionsAndAnswers();
// };
// function answerchecker1(){
//     var currentCorrectAnswer = questions[questionIndex].correctAnswer;

//     if (document.getElementById("answer1").textContent == currentCorrectAnswer){
//         alert("Correct!");
//         numbRightAnswers ++;
//     }
//     else {
//         alert("incorrect! Loose ten secounds");
//         timer = timer - 10;
//         numbWrongAnswers ++;
//     };
    
//     questionIndex ++;
//     progress = Math.ceil(progress + (100 / (questions.length)));
//     progressBar();
//     displayQuestionsAndAnswers();
// };
// function answerchecker2(){
//     var currentCorrectAnswer = questions[questionIndex].correctAnswer;

//     if (document.getElementById("answer2").textContent == currentCorrectAnswer){
//         alert("Correct!");
//         numbRightAnswers ++;
//     }
//     else {
//         alert("incorrect! Loose ten secounds");
//         timer = timer - 10;
//         numbWrongAnswers ++;
//     };
    
//     questionIndex ++;
//     progress = Math.ceil(progress + (100 / (questions.length)));
//     progressBar();
//     displayQuestionsAndAnswers();
// };
// function answerchecker3(){
//     var currentCorrectAnswer = questions[questionIndex].correctAnswer;

//     if (document.getElementById("answer3").textContent == currentCorrectAnswer){
//         alert("Correct!");
//         numbRightAnswers ++;
//     }
//     else {
//         alert("incorrect! Loose ten secounds");
//         timer = timer - 10;
//         numbWrongAnswers ++;
//     };
//     questionIndex ++;
//     progress = Math.ceil(progress + (100 / (questions.length)));
//     progressBar();
//     displayQuestionsAndAnswers();
// };

// ends quiz when there are no questions left or time is out and brings user to score board. 


