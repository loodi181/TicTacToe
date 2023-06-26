let squares = document.querySelectorAll("[data-num]");
let parent = document.querySelector("#parent");
let playerId = document.querySelector("#playerId");
let btn = document.querySelector("#btn");
let playerX = "X";
let playerO = "O";
let currentPlayer = playerX;
let winner = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];
let oCollect = [];
let xCollect = [];
let isGameOver = false;


// music function
// const bgMusic = document.getElementById("bgMusic");
// bgMusic.play();

squares.forEach((square) => {
  square.addEventListener("click", handleClick, { once: true });
});

function handleClick(e) {
  if (isGameOver) return;
  const place = e.target;
  const turn = currentPlayer === playerX ? playerX : playerO;
  printThePlayer(place, turn);
  if (checkWinner(currentPlayer)) {
    playerId.innerHTML = `${currentPlayer}' Win's`;
    isGameOver = true;
    return; // Exit the function if a winner is found
  }
  if (checkDraw()) {
    playerId.innerHTML = `It's Draw`;
    isGameOver = true;
    return;
  }
  currentPlayer = turn === playerX ? playerO : playerX;
}

function printThePlayer(place, turn) {
  place.textContent = turn;
}

function checkWinner(currentPlayer) {
  return winner.some((cells) => {
    return cells.every((index) => {
      return squares[index - 1].textContent === currentPlayer;
    });
  });
}

function checkDraw() {
  return Array.from(squares).every((square) => {
    return square.textContent === playerX || square.textContent === playerO;
  });
}

btn.addEventListener("click", () => {
  location.reload();
});
