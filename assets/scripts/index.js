'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const game = require('./game')
const authEvents = require('./auth/authEvents')
const gameEvents = require('./game/gameEvents')



// on document ready
$(() => {

  $('#game-board').hide()
  $('#sign-out-modal').hide()
  $('#game-create').hide()

  // create a function to hold event handlers
  const addHandlers = () => {
    $('.cell').on('click', function (event) {
      event.preventDefault()
      game.mark(event.target.id)
    })
    $('#game-create').on('click', function (event) {
      event.preventDefault()
      game.createGame()
    })
  }
  // call the addHandlers function that was just defined
  addHandlers()

  authEvents.addHandlers()
  gameEvents.addHandlers()
  $('#sign-up').on('submit', authEvents.openModal)
})
// module.exports = {
//   addHandlers
// }
