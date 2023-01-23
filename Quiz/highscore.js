
var gamePlayers = document.querySelector('#player-list');

var scores = [];

function renderScores() {
    // Clear todoList element and update todoCountSpan
    gamePlayer = document.getElementById('player-list').innerText = localStorage.getItem('High-Scores');
    // scores.textContent = gamePlayers.length;
  
    // Render a new li for each todo
   for (var i = 0; i < gamePlayers.length; i++) {
        // scores = gamePlayers[i];
  
    //  var li = document.createElement("li");
    //   li.textContent = scores;
    //  li.setAttribute(data-number, i);
  
    //  scores.appendChild(li);
   }
  }

//    function inIt() {

   
//      if (gamePlayers !== null) {
//         scores = '';
//      }
      renderScores();
//   }

// inIt()








