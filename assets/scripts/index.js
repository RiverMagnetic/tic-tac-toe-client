'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
// board: [0, 1, 2, 3, 4, 5, 6, 7, 8],
// const love = ['X', 'O', 'X', 'O', 'X', 'O', 'X', 'O', 'X'],
// let turn = '<which player>'
isMarked: function (index) {
  if (this.board[index] === 'X' || this.board[index] === 'O') {
    return true
  } else {
    return false
  }
},
})
