'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)

const gameApi = require('./gameApi')
const gameUi = require('./gameUi')

const onCreateGame = function (event) {
  event.preventDefault()
  console.log('onCreateGame ran!')

  const data = getFormFields(event.target)
  gameApi.createGame(data)
    .then(gameUi.onCreateGameSuccess)
    .catch(gameUi.onCreateGameFailure)
}

const onIndexGames = function (event) {
  event.preventDefault()
  console.log('onIndexGames ran!')

  gameApi.index()
    .then(gameUi.onGameIndexSuccess)
    .catch(gameUi.onGameIndexFailure)
}

const onShowGame = function (event) {
  event.preventDefault()
  console.log('onShowGame ran!')

  const data = getFormFields(event.target)
  const game = data.game

  if (game.id.length !== 0) {
    gameApi.showGame(game)
      .then(gameUi.onShowGameSuccess)
      .catch(gameUi.onShowGameFailure)
  } else {
    // $('#message').html('<p>Please provide an example id!</p>')
    $('#message').css('background-color', 'red')
    console.log('May the force be with you!')
  }
}
// //
// // const onDeleteExample = function (event) {
// //   event.preventDefault()
// //   console.log('onDeleteExample ran!')
// //
// //   const data = getFormFields(event.target)
// //   const example = data.example
// //
// //   if (example.id.length !== 0) {
// //     gameApi.destroy(example.id)
// //       .then(gameUi.onDeleteSuccess)
// //       .catch(gameUi.onDeleteFailure)
// //   } else {
// //     $('#message').html('<p>Please provide an example id!</p>')
// //     $('#message').css('background-color', 'red')
// //     console.log('Please provide an example id!')
// //   }
// // }
// //
const onUpdateGame = function (event) {
  event.preventDefault()
  console.log('onUpdateGame ran!')

  const data = getFormFields(event.target)
  const game = data.game

  if (game.text === '') {
    //     $('#message').html('<p>Text is required</p>')
    $('#message').css('background-color', 'red')
    console.log('Letter is required!')
    return false
  }
  if (game.id.length !== 0) {
    gameApi.update(data)
      .then(gameUi.onUpdateGameSuccess)
      .catch(gameUi.onUpdateGameFailure)
  } else {
    //     $('#message').html('<p>Please provide a game id!</p>')
    $('#message').css('background-color', 'red')
    console.log('Please provide a game id!')
  }
}

const addHandlers = () => {
  $('#login').on('submit', onCreateGame)
  $('#game-index').on('submit', onIndexGames)
  $('#show-game').on('submit', onShowGame)
  // $('#example-delete').on('submit', onDeleteExample)
  $('#game-update').on('submit', onUpdateGame)
}

module.exports = {
  addHandlers,
  onCreateGame
}
