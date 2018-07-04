// 'use strict'
//
const config = require('../config')
const store = require('../store')
//
// const createGame = function (data) {
//   console.log('data: ', data)
//   return $.ajax({
//     url: config.apiUrl + '/examples',
//     method: 'POST',
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     },
//     data
//     // data: data
//   })
// }
//GET all games: 
// const index = function () {
//   return $.ajax({
//     url: config.apiUrl + '/examples',
//     method: 'GET',
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     }
//   })
// }
//GET one game:
const showGame = function (game) {
  return $.ajax({
    url: config.apiUrl + '/games/' + game.id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
//
// We don't need DELETE for the game API
//
// const update = function (data) {
//   return $.ajax({
//     url: config.apiUrl + '/examples/' + data.example.id,
//     method: 'PATCH',
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     },
//     data
//     // data: data
//   })
// }
//
module.exports = {
//   createGame,
//   index,
  showGame
//   destroy,
//   update
}
