'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
})

// set up game board like so:
//   0 | 1 | 2
//   3 | 4 | 5
//   6 | 7 | 8
const game = {
  board: ['', '', '', '', '', '', '', '', ''],
  love: ['X', 'O', 'X', 'O', 'X', 'O', 'X', 'O', 'X'],

  // is the box the user clicked on occupied? (this function is called in events.js)
  marked: function (index) {
    if (this.board[index] === 'X' || this.board[index] === 'O') {
      return true
    } else {
      return false
    }
  },
  // check the board to see if there's a winner
  checkForWin: function () {
    const box = this.board
    // win possibilities: rows[0, 1, 2], [3, 4, 5], [6, 7, 8], columns [0,3,6], [1,4,7], [2,5,8], diagonals [0,4,8], [2,4,6]
    if ((box[0] === box[1] && box[1] === box[2]) || (box[3] === box[4] && box[4] === box[5]) || (box[6] === box[7] && box[7] === box[8]) || (box[0] === box[3] && box[3] === box[6]) || (box[1] === box[4] && box[4] === box[7]) || (box[2] === box[5] && box[5] === box[8]) || (box[0] === box[4] && box[4] === box[8]) || (box[2] === box[4] && box[4] === box[6])) {
      return true
    } else {
      return false
    }
  }
}
// let turn = '<which player>'

const mark = function (index) {
  console.log(index)

  // now that you have the index of the cell that was clicked,
  // and you know which player is currently playing,
  // find a way to record the move at it's given index for this player
  // either "x" or "o" ... somewhere

  // if the box the user clicked on is not occupied then proceed
  if (game.marked(index) === false) {
    // create counter for turns 0-8
    // create a function using modulo that puts an X or O in the box depending on if the turn is even or odd
    // isOdd(cuurentTurn) { return currentTurn % 2;}
    // put X or O in the box
    console.log('x')
  }
}
const addHandlers = () => {
  $('.box').on('click', function (event) {
    event.preventDefault()
    mark(event.target.id)
  })
}

addHandlers()

// module.exports = {
//   addHandlers
// }
