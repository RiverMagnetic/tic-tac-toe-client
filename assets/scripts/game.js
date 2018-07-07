// const element = document.createElement('div')
// element.id = 'myDiv'
// element.innerHTML = 'Hello World!'
// document.body.appendChild(element)
// const gameEvents = require('./game/events')
// const authEvents = require('./auth/events')
// const config = require('./config')

// set up game cells like so:
  //   0 | 1 | 2
  //   3 | 4 | 5
  //   6 | 7 | 8
  
  const game = {
    cells: ['', '', '', '', '', '', '', '', ''],
    love: ['x', 'o', 'x', 'o', 'x', 'o', 'x', 'o', 'x'],
    move: function (index) {
      this.cells[index] = this.love.pop()
      return this.cells[index]
    },
    // is the cell the player clicked on occupied? (this function is called in game/events.js)
    marked: function (index) {
      if (this.cells[index] === 'x' || this.cells[index] === 'o') {
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
    //this method is called in the mark function, 
    // in which affection is defined and ultimately passed in to the method
    checkForWinMsg: function (affection) {
      $('#message').html(`${affection} wins!`)
    }
  }
  
  const mark = function (index) {
    // console.log(index)
    // only allow player to mark the board if the game has not been won
    if (game.checkForWin() === false) {
      // only allow player to mark the board if the cell player clicked on has not been marked.
      // together, these two if statements disallow player from marking board after game is over
      if (game.marked(index) === false) {
        // console.log(game.marked(index))
        const affection = game.move(index)
        console.log(affection)
        // mark the board by placing the letter in the cell
        $('#' + index).append(affection)
        // prompting the player to take their turn
        if (affection === 'x') {
          $('#message').html(`o's turn!`)
        } else if (affection === 'o') {
          $('#message').html(`x's turn!`)
        }
        // if this is the winning mark, tell the player they won
        if (game.checkForWin(affection) === true) {
          game.checkForWinMsg(affection)
        } else if (game.love.length === 0) {
          $('#game-board').hide()
          $('#message').html(`It's a draw! Game Over.`)
        }
      // if player tries to put mark in marked cell, prompt to choose another cell
      } else if (game.marked(index) === true) {
        $('#message').html(`That square has already been taken. Choose another.`)
      }
    }
  }

  // to wipe the board/start a new game
  const createGame = function () {
    game.cells = ['', '', '', '', '', '', '', '', '']
    console.log(game.cells)
    game.love = ['x', 'o', 'x', 'o', 'x', 'o', 'x', 'o', 'x']
    console.log(game.love)
    $('.cell').html('')
    //TODO connect this to gameUI's onCreateGameSuccess to make correct message appear
  }

  module.exports = {
    game,
    mark,
    createGame
  }