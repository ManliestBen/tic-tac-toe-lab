/*---------------- Constants ---------------*/


/*--------- Variables (state) ----------*/
let board, turn, winner, tie


/*------- Cached Element References ------*/
const squareEls = document.querySelectorAll('.sqr')
const messageEl = document.getElementById('message')


/*-------- Functions -----------------*/
init()

function init() {
  board = ['', 'X', '', '', 'O', '', 'X', '', '']
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

/*----------- Event Listeners ----------*/


////1) Define the required variables used to track the state of the game.

////2) Store cached element references.

//3) Upon loading, the game state should be initialized, and a function should 
//   be called to render this game state.

//4) The state of the game should be rendered to the user.

//5) Define the required constants.

//6) Handle a player clicking a square with a `handleClick` function.

//7) Create Reset functionality.

