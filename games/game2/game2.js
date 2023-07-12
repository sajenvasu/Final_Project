var descriptionBox;
  var score = 0;

function showDescription1(description, icon) {
  if (!descriptionBox) {
    descriptionBox = document.createElement('div');
    descriptionBox.className = 'description1';
    document.body.appendChild(descriptionBox);
  }
  descriptionBox.innerHTML += description + '<br><br>';

  var iconElement = icon.querySelector('.icon');
  iconElement.classList.toggle('checked');
  score++;
  icon.onclick = null;

  updateScore();
}


function showDescription2(description, icon) {
  if (!descriptionBox) {
    descriptionBox = document.createElement('div');
    descriptionBox.className = 'description1';
    document.body.appendChild(descriptionBox);
  }
  descriptionBox.innerHTML += description + '<br><br>';

  var iconElement = icon.querySelector('.icon');
  iconElement.classList.toggle('wrongchecked');
  score--;
  icon.onclick = null;

  updateScore();
}

function updateScore() {
    var scoreElement = document.getElementById('score');
    scoreElement.textContent = 'Score: ' + score;
  }

  function showResult(url) {
    var resultBox = document.createElement('div');
    resultBox.className = 'result-box';

    var scoreText = document.createElement('p');
    scoreText.textContent = 'Score: ' + score +'/5';

    var nextButton = document.createElement('button');
    nextButton.textContent = 'Next';
    nextButton.addEventListener('click', function() {
      
      window.location.href = url;
    });

    resultBox.appendChild(scoreText);
    resultBox.appendChild(nextButton);
    document.body.appendChild(resultBox);

    
  }