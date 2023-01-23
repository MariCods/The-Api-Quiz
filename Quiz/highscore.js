
var gamePlayers = document.querySelector('#player-list');

var scores = JSON.parse(localStorage.getItem('High-Scores'));

function renderScores() {
   
    // gamePlayer = document.getElementById('player-list').innerText = localStorage.getItem('High-Scores');
    // scores.textContent = gamePlayers.length;
  
    
   for (var i = 0; i < scores.length; i++) {
        // scores = gamePlayers[i];
  
     var li = document.createElement("li");
      li.textContent = scores[i].intials + ':' + scores[i].score;
    //  li.setAttribute(data-number, i);
  
      gamePlayers.appendChild(li);
   }
  }


      renderScores();








