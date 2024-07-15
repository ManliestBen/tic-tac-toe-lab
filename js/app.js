/*---------------- Constants ---------------*/
const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

/*--------- Variables (state) ----------*/
let board, turn, winner, tie


/*------- Cached Element References ------*/
const squareEls = document.querySelectorAll('.sqr')
const messageEl = document.getElementById('message')


/*-------- Functions -----------------*/
init()

function init() {
  board = ['', '', '', '', '', '', '', '', '']
  turn = 'X'
  winner = false
  tie = false
  render()
}

function render() {
  updateBoard()
  updateMessage()
}

function updateBoard() {
  board.forEach((cell, idx) => {
    if (cell === 'X') {
      squareEls[idx].textContent = 'X'
      // squareEls[idx].style.backgroundColor = 'green'
    } else if (cell === 'O') {
      squareEls[idx].textContent = 'O'
      // squareEls[idx].style.backgroundColor = 'blue'
    } else {
      squareEls[idx].textContent = ''
      // squareEls[idx].style.backgroundColor = 'white'
    }
  })
}

function updateMessage() {
  if (!winner && !tie) {
    messageEl.textContent = `It is ${turn}'s turn`
  } else if (!winner && tie) {
    messageEl.textContent = "Cat's game.  Meow!!! 😻"
  } else {
    messageEl.textContent = `${turn} wins the game!`
  }
}

function handleClick(evt) {
  const squareIndex = parseInt(evt.target.id)
  if (board[squareIndex] === 'X' || board[squareIndex] === 'O' || winner) {
    return
  }
  placePiece(squareIndex)
  checkForWinner()
  checkForTie()
  switchPlayerTurn()
  render()
}

function placePiece(index) {
  board[index] = turn
}

function checkForWinner() {
  if (
    (board[0] !== '' && board[0] === board[1] && board[0] === board[2]) ||
    (board[3] !== '' && board[3] === board[4] && board[3] === board[5]) ||
    (board[6] !== '' && board[6] === board[7] && board[6] === board[8]) ||
    (board[0] !== '' && board[0] === board[3] && board[0] === board[6]) ||
    (board[1] !== '' && board[1] === board[4] && board[1] === board[7]) ||
    (board[2] !== '' && board[2] === board[5] && board[2] === board[8]) ||
    (board[0] !== '' && board[0] === board[4] && board[0] === board[8]) ||
    (board[2] !== '' && board[2] === board[4] && board[2] === board[6])
  ) {
    winner = true
  }
}

function checkForTie() {
  if (winner) {
    return
  }
  if (!board.includes('')) {
    tie = true
  }
}

function switchPlayerTurn() {
  if (winner) {
    return
  }
  if (turn === 'X') {
    turn = 'O'
  } else {
    turn = 'X'
  }
  // turn = turn === 'X' ? 'O' : 'X'
}

/*----------- Event Listeners ----------*/
squareEls.forEach((squareEl) => {
  squareEl.addEventListener('click', handleClick)
})

////1) Define the required variables used to track the state of the game.

////2) Store cached element references.

//3) Upon loading, the game state should be initialized, and a function should 
//   be called to render this game state.

//4) The state of the game should be rendered to the user.

//5) Define the required constants.

//6) Handle a player clicking a square with a `handleClick` function.

//7) Create Reset functionality.

