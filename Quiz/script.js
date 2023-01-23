var countdownEL = document.getElementById('countdown');
var pointsEL = document.getElementById('points')
var submitEl = document.getElementById('submit');
var winCounter = 0;
var isWin = false;


let time = 90;
let timerId;
timerId = setInterval(changeCountdown, 1000);
function changeCountdown() {


    let seconds = time % 60;
    let minutes = Math.floor(time / 60)


    if (time < 0) {
        clearInterval(changeCountdown);
        return;
    } else {
        time--;
    }
    const timeStr = time < 60 ? seconds + "s" : minutes + "m " + seconds + "s";
    countdownEL.innerHTML = timeStr;


}




// function move() {
//     const element = document.getElementById("myBar");
//     let width = 0;
//     const id = setInterval(frame, 1000);
//     function frame() {
//         if(width == 50) {
//             clearInterval(id);
//         } else {
//             width++;
//             element.style.width = width + '%';
//         }
//     }
// }

const questionEL = document.getElementById("question");
const quizDiv = document.getElementById("quiz");
const choices = Array.from(document.getElementsByClassName("choice-text"));
console.log(choices);



// let currentQuestion = [];
// let acceptingSelections = true;
let score = 0;
// let questionCounter = 0;
// let availableSelections = [];
var currentQuestionindex = 0;

let questions = [
    {
        question: "What is a Boolean expression?",

        choice1: "It has 2 possible paths, one is taken if the condition is true and the other is if its false",
        choice2: "When the condition is false",
        choice3: "An expression that can be evaluated as either true or false",
        answer: 3
    },
    {
        question: "Inside which HTML element do we put the JavaScript?",

        choice1: " <js>",
        choice2: "<script>",
        choice3: "<scripting>",
        answer: 2
    },
    {
        question: "How do you create a function?",

        choice1: "function myFunction()",
        choice2: "function:myFunction()",
        choice3: "myFunction():function",
        answer: 1
    },
    {
        question: " A named element in a JavaScript program that is used to store and retrieve data is a _____.",

        choice1: "Variable",
        choice2: "Method",
        choice3: "String",
        answer: 1
    },
    {
        question: "The majority of a typical Web document will be found in:",

        choice1: "The title tag",
        choice2: "The head tag",
        choice3: "The body tag",
        answer: 3
    },
    {
        question: "When you want to use JavaScript to manipulate the browser window, the browser window's JavaScript object name is:",

        choice1: "browser_window",
        choice2: "document",
        choice3: "Window",
        answer: 3
    }
];





function getCurrentQuestion(index) {
    const currentQuestion = questions[index];
    questionEL.textContent = currentQuestion.question;

    choices.forEach(function (choice, index) {
        choice.textContent = currentQuestion["choice" + (index + 1)]
    })
}

for (let choice of choices) {
    choice.addEventListener("click", function (event) {
        const clickedQuestion = event.target;
        if (clickedQuestion.dataset.number == questions[currentQuestionindex].answer) {
            // correct
            console.log("correct");
            score += 15;
            pointsEL.textContent = score
        } else {
            //     // wrong
            console.log("wrong");
            time -= 15;
        }
        currentQuestionindex++;
        if (currentQuestionindex === questions.length || time <= 0) {
            endQuiz();
        } else {
            getCurrentQuestion(currentQuestionindex);
        }

    });
}
function endQuiz() {

    clearInterval(timerId);
    quizDiv.setAttribute("class", "hide");
    let endDiv = document.getElementById("end-div");
    endDiv.removeAttribute("class");
}
console.log(currentQuestionindex);
getCurrentQuestion(currentQuestionindex);




function saveToLocalStorage() {
    console.log('submit-score')
    let intialsEl = document.getElementById('intials');
    console.log(intialsEl);
    let intials = intialsEl.value.trim();
    console.log(intials);
    if (intials !== '') {
        let highScores = JSON.parse(localStorage.getItem('High-Scores')) || [];

        let currentScore = {
            score: score,
            intials: intials,
        }
        highScores.push(currentScore);
        localStorage.setItem('High-Scores', JSON.stringify(highScores));
        window.location.href = 'highscore.html';
    }

}

submitEl.onclick = saveToLocalStorage;

