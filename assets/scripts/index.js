'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const game = require('./game')
const authEvents = require('./auth/events')





$(() => {
  

  create a function to hold event handlers
  const addHandlers = () => {
    $('.cell').on('click', function (event) {
      event.preventDefault()
      mark(event.target.id)
    })
  }
  // call the addHandlers function that was just defined
  addHandlers()

  authEvents.addHandlers()
  gameEvents.addHandlers()

  $('#cancel-create-account').on('click', authEvents.cancelSignUpButton)
})
// module.exports = {
//   addHandlers
// }
