var N_SIZE = 3,
  EMPTY = '&nbsp;',
  boxes = [],
  turn = 'X',
  score,
  moves;


function init() {
  var b1 = document.createElement('table');
  b1.setAttribute('border', 1);
  b1.setAttribute('c1spacing', 0);

  var identifier = 1;
  for (var i = 0; i < N_SIZE; i++) {
    var r = document.createElement('tr');
    b1.appendChild(r);
    for (var j = 0; j < N_SIZE; j++) {
      var c1 = document.createElement('td');
      c1.setAttribute('height', 120);
      c1.setAttribute('width', 120);
      c1.setAttribute('align', 'center');
      c1.setAttribute('valign', 'center');
      c1.classList.add('col' + j, 'r' + i);
      if (i == j) {
        c1.classList.add('diagonal0');
      }
      if (j == N_SIZE - i - 1) {
        c1.classList.add('diagonal1');
      }
      c1.identifier = identifier;
      c1.addEventListener('click', set);
      r.appendChild(c1);
      boxes.push(c1);
      identifier += identifier;
    }
  }

  document.getElementById('tictactoe').appendChild(b1);
  startNewGame();
}


function startNewGame() {
  score = {
    'X': 0,
    'O': 0
  };
  moves = 0;
  turn = 'X';
  boxes.forEach(function (square) {
    square.innerHTML = EMPTY;
  });
}


function win(clicked) {
  var member = clicked.className.split(/\s+/);
  for (var i = 0; i < member.length; i++) {
    var testClass = '.' + member[i];
    var items = contains('#tictactoe ' + testClass, turn);
    if (items.length == N_SIZE) {
      return true;
    }
  }
  return false;
}


function contains(selector, text) {
  var elements = document.querySelectorAll(selector);
  return [].filter.call(elements, function (element) {
    return RegExp(text).test(element.textContent);
  });
}


function set() {
  if (this.innerHTML !== EMPTY) {
    return;
  }
  this.innerHTML = turn;
  moves += 1;
  score[turn] += this.identifier;
  if (win(this)) {
    alert('Winner: Player ' + turn);
    startNewGame();
  } else if (moves === N_SIZE * N_SIZE) {
    alert('Draw');
    startNewGame();
  } else {
    turn = turn === 'X' ? 'O' : 'X';
    document.getElementById('turn').textContent = 'Player ' + turn;
  }
}

init();