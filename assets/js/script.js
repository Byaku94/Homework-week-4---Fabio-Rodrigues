var time = 75;
var score = 0;
var qCount = 0;
var timeset;
var answers = document.querySelectorAll('#quizQandA button');

let questions = [
    {
      title: "Commonly used data types DO NOT include:",
      choices: ["strings", "booleans", "alerts", "numbers"],
      answer: "alerts"
    },
    {
      title: "The condition in an if / else statement is enclosed within ____.",
      choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
      answer: "parentheses"
    },
    {
      title: "Which of these is not used to loop?",
      choices: ["for", "while", "foreach", "sequence"],
      answer: "sequence"
    },
    {
      title: "Which of these is not a way to save a variable",
      choices: ["vet", "var", "let", "const"],
      answer: "vet"
    },
    {
      title: "JS date function starts in seconds to current day from what day in 1970",
      choices: ["January 1", "December 31", "June 1", "April 23"],
      answer: "January 1"
    },
    ]
function startQuiz() {
      var hide = document.getElementById("quizDisplay");
      if (hide.style.display === "none") {
        hide.style.display = "block";
      } else {
        hide.style.display = "none";
      }
      setQuestionData();
      var show = document.getElementById("quizQandA");
      show.style.visibility = "visible";
    }
  
$("#startButton").on("click", startQuiz)





setQuestionData = () => {
  queryElement('#quizQandA p').innerHTML = questions[qCount].title;
  queryElement('#quizQandA button:nth-of-type(1)').innerHTML = "1. ${questions[qCount].choices[0]}"
  queryElement('#quizQandA button:nth-of-type(2)').innerHTML = "2. ${questions[qCount].choices[1]}"
  queryElement('#quizQandA button:nth-of-type(3)').innerHTML = "3. ${questions[qCount].choices[2]}"
  queryElement('#quizQandA button:nth-of-type(4)').innerHTML = "4. ${questions[qCount].choices[3]}"
}

var recordsArray = [];
// Retrieve data if it exists or keep empty array otherwise.
(localStorage.getItem('recordsArray')) ? recordsArray = JSON.parse(localStorage.getItem('recordsArray')): recordsArray = [];
  
Array.from(answers).forEach(check => {
  check.addEventListener('click', function (event) {
    // Handles events if a question is answered correctly
    if (this.innerHTML.substring(3, this.length) === questions[qCount].answer) {
      score = score + 1;
      qCount = qCount + 1;
      quizUpdate("Correct");
    }else{
      // Handles events if a question is answered incorrectly.
      time = time - 10;
      qCount = qCount + 1;
      quizUpdate("Wrong");
    }
  });
});



