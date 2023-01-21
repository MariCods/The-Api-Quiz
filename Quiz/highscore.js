var scoreInput = document.querySelector("#scores-text");
var scoreForm = document.querySelector("#scores-form");
var scoreList = document.querySelector("#todo-list");
var scoreCountSpan = document.querySelector("score-count");

var scores = [];

let highScores = window.localStorage.getItem('High-Score');
let intials = window.localStorage.getItem('intials');
 
console.log(highScores);
console.log(intials);