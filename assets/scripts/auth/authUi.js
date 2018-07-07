'use strict'

const store = require('../store')

const signUpSuccess = function (data) {
  $('#message').text('Signed up successfully')
  $('#message').css('background-color', 'green')
  console.log('signUpSuccess ran. Data is :', data)
  $('#sign-up-modal').hide()
}

const signUpFailure = function (error) {
  $('#message').text('Missing email or password')
  $('#message').css('background-color', 'red')
  console.error('signUpFailure ran. Error is :', error)
}

const signInSuccess = function (data) {
  $('#message').text("x's turn!")
  $('#message').css('background-color', 'green')
  console.log('signInSuccess ran. Data is :', data)
  store.user = data.user
  $('#logInModal').modal('hide')
  $('#sign-in-modal').hide()
  $('#sign-up-modal').hide()
  $('#game-board').show()
  $('#game-create').show()
  $('#sign-out-modal').show()
}

const signInFailure = function (error) {
  $('#logInModal').modal('hide')
  $('#message').text('Incorrect Email or Password')
  $('#message').css('background-color', 'red')
  console.error('signInFailure ran. Error is :', error)
}

const signOutSuccess = function () {
  $('#message').text('Signed out')
  $('#message').css('background-color', 'green')
  console.log('signOutSuccess ran and nothing was returned!')
  store.user = null
  $('#sign-in-modal').show()
  $('#sign-up-modal').show()
  $('#game-board').hide()
  $('#sign-out-modal').hide()
  $('#signOutModal').modal('hide')
}

const signOutFailure = function (error) {
  $('#message').text('Error on sign out')
  $('#message').css('background-color', 'red')
  console.error('signOutFailure ran. Error is :', error)
}

// const changePasswordSuccess = function () {
//   $('#message').text('Changed password successfully')
//   $('#message').css('background-color', 'green')
//   console.log('changePasswordSuccess ran and nothing was returned!')
// }

// const changePasswordFailure = function (error) {
//   $('#message').text('Error on change password')
//   $('#message').css('background-color', 'red')
//   console.error('changePasswordFailure ran. Error is :', error)
// }

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure
  // ,
//   changePasswordSuccess,
//   changePasswordFailure
}
