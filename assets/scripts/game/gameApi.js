'use strict'

const config = require('../config')
const store = require('../store')

const createGame = function (data) {
  console.log('data: ', data)
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
    // data: data
  })
}

// const index = function () {
//   return $.ajax({
//     url: config.apiUrl + '/examples',
//     method: 'GET',
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     }
//   })
// }
//
// const showGame = function (game) {
//   return $.ajax({
//     url: config.apiUrl + '/games/' + game.id,
//     method: 'GET',
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     }
//   })
// }
//
// const destroy = function (id) {
//   return $.ajax({
//     url: config.apiUrl + '/examples/' + id,
//     method: 'DELETE',
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     }
//   })
// }
//

const update = function (data) {
  console.log(store.game.id)
  console.log(data)
  return $.ajax({
    url: config.apiUrl + '/games/' + store.game.id, 
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: { 
      "game": { 
        "cell": { 
          "index": data.index,
          "value": data.affection
        },
        "over": data.gameOver
      }
    }
  })
}

module.exports = {
  createGame,
  // ,
//   index,
//   showGame,
// //   destroy,
  update
}
