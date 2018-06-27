const getFormFields = require('../../lib/get-form-fields')
// Using your knowledge of jQuery write a function, onSubmitForm, that console
// logs the input in the input field when "save changes" is clicked

const openModal = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)
  console.log(data.form)
  $('#signUpModal').modal('hide')
}

// const cancelButton = function (event) {
//
// }

module.exports = {
  openModal
  // cancelButton
}
