
let time = starting = 60;

const countdownEL = document.getElementById('countdown');

setInterval(changeCountdown, 1000);
function changeCountdown() {
    
// const minutes = Math.floor(time / 60);
let seconds = time % 60;


// countdownEL.innerHTML = time;seconds;
if(time === 0) {
                clearInterval(changeCountdown);
            } else {
           time--;
           countdownEL.innerHTML = time;seconds;
                
          }
    // time--;
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
const choices = Array.from(document.getElementsByClassName("choice-text"));
console.log(choices);



//let currentQuestion = [];
let acceptingSelections = true;
let score = 0;
let questionCounter = 0;
let availableSelections = [];
var currentQuestionindex = 0;

let questions = [
    {
        question: "What is a Boolean expression?",

        choice1:"It has 2 possible paths, one is taken if the condition is true and the other is if its false",
        choice2:"When the condition is false",
        choice3:"An expression that can be evaluated as either true or false",
        answer:3
    },
    {
        question: "Inside which HTML element do we put the JavaScript?",

        choice1:" <js>",
        choice2:"<script>",
        choice3:"<scripting>",
        answer:2
    },
    {
        question: "How do you create a function?",

        choice1:"function myFunction()",
        choice2:"function:myFunction()",
        choice3:"myFunction():function",
        answer:1
    },
    {
        question: " A named element in a JavaScript program that is used to store and retrieve data is a _____.",

        choice1:"Variable",
        choice2:"Method",
        choice3:"String",
        answer:1
    },
    {
        question: "The majority of a typical Web document will be found in:",

        choice1:"The title tag",
        choice2:"The head tag",
        choice3:"The body tag",
        answer:3
    },
    {
        question: "When you want to use JavaScript to manipulate the browser window, the browser window's JavaScript object name is:",

        choice1:"browser_window",
        choice2:"document",
        choice3:"Window",
        answer:3
    }
];


const correctTotal = 15;
const MaxQuestions = 6;

function getCurrentQuestion(index){
    const currentQuestion = questions[index];
    questionEL.textContent = currentQuestion.question;

    choices.forEach(function(choice,index){
        choice.textContent = currentQuestion["choice"+ (index + 1)]
    })
}

for (let choice of choices) {
    choice.addEventListener("click", function(event) {
        const clickedQuestion = event.target;
        if (clickedQuestion.dataset.number == questions[currentQuestionindex].answer) {
            // correct
        } else {
            // wrong
           
            currentQuestionindex--;
            // getCurrentQuestion(currentQuestionindex);
        }  
       
    });
}

//console.log(currentQuestion);
 getCurrentQuestion(currentQuestionindex);





// let question1 = {
//     quest1: 'What are the three main building blocks for coding a website?',
//     solutions:['html css avascript', 'css python javascript', 'web apis  html css'],
//     correctAnswer: 2
// };

// function showQuestion(q1){
//     let quest1Div = document.getElementById('quest1');
//     quest1Div.textcontent = q1.title

//     let sol = document.querySelectorAll('.solutions');
//     console.log(sol);
    
//     sol.forEach(function(element, index){
//         element.textcontent = q1.solutions[index];
//     })
// };

// showQuestion(question1);