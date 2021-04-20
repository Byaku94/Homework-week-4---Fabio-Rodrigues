var time = 75;
var score = 0;
var qCount = 0;


var questions = [
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
      setQuestionData()
      var show = document.getElementsByClassName("hide");
      show.style.visibility = "visible";
    }

$("#startButton").on("click", startQuiz)





function setQuestionData() {
  document.getElementById('#quizQandA p').innerHTML = questions[qCount].title;
  document.getElementById('#quizQandA button:nth-of-type(1)').innerHTML = "1. ${questions[qCount].choices[0]}"
  document.getElementById('#quizQandA button:nth-of-type(2)').innerHTML = "2. ${questions[qCount].choices[1]}"
  document.getElementById('#quizQandA button:nth-of-type(3)').innerHTML = "3. ${questions[qCount].choices[2]}"
  document.getElementById('#quizQandA button:nth-of-type(4)').innerHTML = "4. ${questions[qCount].choices[3]}"
}
