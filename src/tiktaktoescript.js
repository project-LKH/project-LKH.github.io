const winner = document.getElementById("winner");

function fillXorO(id) {
  const div = document.getElementById(id);
  const currentPlayer = document.getElementById("currentPlayer");
  winner.style.display = "none";
  if (div.innerHTML == "X" || div.innerHTML == "O") {
    return;
  }
  if (currentPlayer.innerHTML == "X") {
    div.innerHTML = "X";
    currentPlayer.innerHTML = "O";
    checkForWin();
    checkForTie();
  } else {
    div.innerHTML = "O";
    currentPlayer.innerHTML = "X";
    checkForWin();
    checkForTie();
  }
}

const b1 = document.getElementById("block1");
const b2 = document.getElementById("block2");
const b3 = document.getElementById("block3");
const b4 = document.getElementById("block4");
const b5 = document.getElementById("block5");
const b6 = document.getElementById("block6");
const b7 = document.getElementById("block7");
const b8 = document.getElementById("block8");
const b9 = document.getElementById("block9");

function checkForWin() {
  const winConditions = [
    [b1, b2, b3],
    [b4, b5, b6],
    [b7, b8, b9],
    [b1, b4, b7],
    [b2, b5, b8],
    [b3, b6, b9],
    [b1, b5, b9],
    [b3, b5, b7],
  ];
  for (let i = 0; i < winConditions.length; i++) {
    let x = 0;
    let o = 0;
    for (let j = 0; j < winConditions[i].length; j++) {
      if (winConditions[i][j].innerHTML == "") {
        x = 0;
        y = 0;
        break;
      }
      if (winConditions[i][j].innerHTML == "X") {
        x++;
        if (x == 3) {
          window.alert("player X wins");
          return;
        }
      } else if (winConditions[i][j].innerHTML == "O") {
        o++;
        if (o == 3) {
          window.alert("player O wins");
          return;
        }
      }
    }
  }
}
function reset() {
  b1.innerHTML = "";
  b2.innerHTML = "";
  b3.innerHTML = "";
  b4.innerHTML = "";
  b5.innerHTML = "";
  b6.innerHTML = "";
  b7.innerHTML = "";
  b8.innerHTML = "";
  b9.innerHTML = "";
  winner.style.display="none"
}
function checkForTie() {
  if (
    (b1.innerHTML == "X" || b1.innerHTML == "O") &&
    (b2.innerHTML == "X" || b2.innerHTML == "O") &&
    (b3.innerHTML == "X" || b3.innerHTML == "O") &&
    (b4.innerHTML == "X" || b4.innerHTML == "O") &&
    (b5.innerHTML == "X" || b5.innerHTML == "O") &&
    (b6.innerHTML == "X" || b6.innerHTML == "O") &&
    (b7.innerHTML == "X" || b7.innerHTML == "O") &&
    (b8.innerHTML == "X" || b8.innerHTML == "O") &&
    (b9.innerHTML == "X" || b9.innerHTML == "O")
  ) {
    winner.innerHTML = "It's a Tie";
    winner.style.display = "block";
    return
  }
}
