'use strict'

const onCreateGameSuccess = function (data) {
  $('#message').text(`x's turn!`)
  $('#message').css('background-color', 'green')
  console.log('onCreateGameSuccess ran. Data is :', data)
}

const onCreateGameFailure = function (error) {
  $('#message').text('Error on creating example')
  $('#message').css('background-color', 'red')
  console.error('onCreateGameFailure ran. Error is :', error)
}

const onGameIndexSuccess = function (data) {
  $('#message').text('All Games successfully received')
  $('#message').css('background-color', 'green')
  console.log('onGameIndexSuccess ran. Data is :', data.games)
}

const onGameIndexFailure = function (error) {
  $('#message').text('Error on getting examples')
  $('#message').css('background-color', 'red')
  console.error('onGameIndexFailure ran. Error is :', error)
}

const onShowGameSuccess = function (data) {
  $('#message').text('Previous game successfully retrieved')
  $('#message').css('background-color', 'green')
  console.log('onShowGameSuccess ran. Data is :', data)
}

const onShowGameFailure = function (error) {
  $('#message').text('Error on getting previous game')
  $('#message').css('background-color', 'red')
  console.error('onShowGameFailure ran. Error is :', error)
}

// const onDestroySuccess = function () {
//   $('#message').text('Example successfully deleted')
//   $('#message').css('background-color', 'green')
//   console.log('Example successfully deleted')
// }
//
// const onDestroyFailure = function (error) {
//   $('#message').text('Error on deleting example')
//   $('#message').css('background-color', 'red')
//   console.error('onDestroyFailure ran. Error is :', error)
// }

const onUpdateGameSuccess = function () {
  // $('#message').text('Game successfully updated')
  $('#message').css('background-color', 'green')
  console.log('Game successfully updated')
}

const onUpdateGameFailure = function (error) {
  $('#message').text('Choose another square')
  $('#message').css('background-color', 'red')
  console.error('onUpdateGameFailure ran. Error is :', error)
}

module.exports = {
  onCreateGameSuccess,
  onCreateGameFailure,
  onGameIndexSuccess,
  onGameIndexFailure,
  onShowGameSuccess,
  onShowGameFailure,
  // onDestroySuccess,
  // onDestroyFailure,
  onUpdateGameSuccess,
  onUpdateGameFailure
}
