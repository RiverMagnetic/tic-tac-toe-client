'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

// const config = require('./config')
const authEvents = require('./auth/events')
const gameEvents = require('./game/events')

$(() => {
  // set up game cells like so:
  //   0 | 1 | 2
  //   3 | 4 | 5
  //   6 | 7 | 8

  const game = {
    cells: ['', '', '', '', '', '', '', '', ''],
    love: ['X', 'O', 'X', 'O', 'X', 'O', 'X', 'O', 'X'],
    move: function (index) {
      this.cells[index] = this.love.pop()
      return this.cells[index]
    },
    // is the cell the player clicked on occupied? (this function is called in game/events.js)
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
      console.log(cell)
      let win = false
      // win possibilities: rows[0, 1, 2], [3, 4, 5], [6, 7, 8], columns [0,3,6], [1,4,7], [2,5,8], diagonals [0,4,8], [2,4,6]
      if ((cell[0] !== '' && cell[0] === cell[1] && cell[1] === cell[2]) || (cell[3] !== '' && cell[3] === cell[4] && cell[4] === cell[5]) || (cell[6] !== '' && cell[6] === cell[7] && cell[7] === cell[8]) || (cell[0] !== '' && cell[0] === cell[3] && cell[3] === cell[6]) || (cell[1] !== '' && cell[1] === cell[4] && cell[4] === cell[7]) || (cell[2] !== '' && cell[2] === cell[5] && cell[5] === cell[8]) || (cell[0] !== '' && cell[0] === cell[4] && cell[4] === cell[8]) || (cell[2] !== '' && cell[2] === cell[4] && cell[4] === cell[6])) {
        win = true
        console.log(win)
        return win
      } else {
        console.log(win)
        return win
      }
    },
    checkForWinMsg: function () {
      $('#message').html(`You win!`)
    }
  }

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
        if (game.checkForWin()) {
          game.checkForWinMsg()
        }
        if (affection === 'X') {
          $('#message').html(`O's turn!`)
        } else if (affection === 'O') {
          $('#message').html(`X's turn!`)
        }
        // TODO final mark in game should say "Game Over", not tell next player to take a turn.
      }
    }
  }

  // create a function to hold event handlers
  const addHandlers = () => {
    $('.cell').on('click', function (event) {
      event.preventDefault()
      mark(event.target.id)
    })
  }
  // call the addHandlers function that was just defined
  addHandlers()

  // authEvents.addHandlers()
  gameEvents.addHandlers()
  $('#create-account').on('submit', authEvents.openModal)
  $('#cancel-create-account').on('click', authEvents.cancelSignUpButton)
})
// module.exports = {
//   addHandlers
// }
