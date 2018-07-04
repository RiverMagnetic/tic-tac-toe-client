const getFormFields = require('../../../lib/get-form-fields')

const api = require('./api')
const ui = require('./ui')
// Using your knowledge of jQuery write a function, 
// onSubmitForm or openModal, that console logs the input in the input field when "save changes" is clicked
// this will be referenced in index.js

const openModal = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)
  console.log(data.form)
  $('#signUpModal').modal('hide')
  $('#logInModal').modal('hide')
}
const onSignUp = function (event) {
  event.preventDefault()
  console.log('sign up ran!')
    const data = getFormFields(this)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

// testing export to index.js using a console log in a cancel button that I hope to use in the future...
// const cancelSignUpButton = function (event) {
//   console.log('cancelSiginUp creation!')
// }


const onSignIn = function (event) {
  event.preventDefault()
  console.log('sign in ran!')

  const data = getFormFields(this)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

// const onSignOut = function (event) {
//   event.preventDefault()
//   console.log('sign out ran')

//   api.signOut()
//     .then(ui.signOutSuccess)
//     .catch(ui.signOutFailure)
// }

// const onChangePassword = function (event) {
//   event.preventDefault()
//   console.log('change password ran!')

//   const data = getFormFields(this)
//   api.changePassword(data)
//     .then(ui.changePasswordSuccess)
//     .catch(ui.changePasswordFailure)
// }

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  // $('#sign-out').on('submit', onSignOut)
  // $('#change-password').on('submit', onChangePassword)
}

module.exports = {
  openModal,
  addHandlers
  // ,
  // cancelSignUpButton
}
