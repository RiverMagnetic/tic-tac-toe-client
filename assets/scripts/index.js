'use strict'

const config = require('./config.js')
// const authEvents = require('./auth/events.js')
// const examplesEvents = require('./examples/events.js')
// const events = require('./events.js')
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // authEvents.addHandlers()
  // examplesEvents.addHandlers()
  // $('#create-account').on('submit', events.onSubmitForm)
  // $('#cancel').on('click', events.cancelButton)
})

// set up game cells like so:
//   0 | 1 | 2
//   3 | 4 | 5
//   6 | 7 | 8

const game = {
  cells: ['', '', '', '', '', '', '', '', ''],
  love: ['X', 'O', 'X', 'O', 'X', 'O', 'X', 'O', 'X'],

  // is the cell the player clicked on occupied? (this function is called in events.js)
  marked: function (index) {
    if (this.cells[index] === 'X' || this.cells[index] === 'O') {
      return true
    } else {
      return false
    }
  },
  // check the cells to see if there's a winner
  checkForWin: function () {
    console.log('checking for win')
    const cell = this.cells
    // win possibilities: rows[0, 1, 2], [3, 4, 5], [6, 7, 8], columns [0,3,6], [1,4,7], [2,5,8], diagonals [0,4,8], [2,4,6]
    if ((cell[0] !== '' && cell[0] === cell[1] && cell[1] === cell[2]) || (cell[3] !== '' && cell[3] === cell[4] && cell[4] === cell[5]) || (cell[6] !== '' && cell[6] === cell[7] && cell[7] === cell[8]) || (cell[0] !== '' && cell[0] === cell[3] && cell[3] === cell[6]) || (cell[1] !== '' && cell[1] === cell[4] && cell[4] === cell[7]) || (cell[2] !== '' && cell[2] === cell[5] && cell[5] === cell[8]) || (cell[0] !== '' && cell[0] === cell[4] && cell[4] === cell[8]) || (cell[2] !== '' && cell[2] === cell[4] && cell[4] === cell[6])) {
      console.log(true)
      return true
    } else {
      console.log(false)
      return false
    }
  },
  move: function (index) {
    this.cells[index] = this.love.pop()
    return this.cells[index]
  }
}

// now that you have the index of the cell that was clicked,
// and you know which player is currently playing,
// find a way to record the move at it's given index for this player
// either "x" or "o" ... somewhere
const mark = function (index) {
  // console.log(index)
// only allow player to mark the board if the game has not been won
  if (game.checkForWin() === false) {
  // only allow player to mark the board if the cell player clicked on has not been marked
  // together, these two if statements disallow player from marking board after game is over
    if (game.marked(index) === false) {
      // console.log(game.marked(index))
      const affection = game.move(index)
      console.log(affection)
      // mark the board by placing the letter in the cell
      $('#' + index).append(affection)
      // prompting the player to take their turn
      if (affection === 'X') {
        $('#prompt').html(`O's turn!`)
      } else if (affection === 'O') {
        $('#prompt').html(`X's turn!`)
      }
      // TODO final mark in game should say "Game Over", not prompt next player to take a turn.
    }
  }
}

const addHandlers = () => {
  $('.cell').on('click', function (event) {
    event.preventDefault()
    mark(event.target.id)
  })
}

addHandlers()

// module.exports = {
//   addHandlers
// }
