const getFormFields = require('../../../lib/get-form-fields')
// Using your knowledge of jQuery write a function, onSubmitForm or openModal, that console logs the input in the input field when "save changes" is clicked
// this will be referenced in index.js

const openModal = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)
  console.log(data.form)
  $('#signUpModal').modal('hide')
  $('#logInModal').modal('hide')
}

// testing export to index.js using a console log in a cancel button that I hope to use in the future...
const cancelSignUpButton = function (event) {
  console.log('cancelSiginUp creation!')
}

module.exports = {
  openModal,
  cancelSignUpButton
}
