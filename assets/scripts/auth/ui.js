'use strict'

const store = require('../store.js')

// On signup success text will appear for 2 seconds and signup input dissappear
// Removes class hide-elements for for ids sign-up, sign-in, change-password, gameBoard,
// game-record, game-records
const signUpSuccess = (data) => {
  $('#signed-up').text('Sign up successful!')
  $('#signed-up').fadeOut(2000)
  $('#sign-up').addClass('hide-elements')
  $('#sign-in').removeClass('hide-elements')
  $('#change-password').removeClass('hide-elements')
  $('#new-game').removeClass('hide-elements')
  $('#gameBoard').removeClass('hide-elements')
}

// On signup failure message appears for 2 seconds
const signUpFailure = (data) => {
  $('#signed-up').text('Wrong credentials try again.')
  $('#signed-up').fadeOut(2000)
}

//
const signInSuccess = (data) => {
  console.log(store.user)
  store.user = data.user
  $('#signed-in').text('Sign in successful!')
  $('#signed-in').fadeOut(2000)
  $('#sign-up').addClass('hide-elements')
  $('#gameBoard').removeClass('hide-elements')
  $('#sign-in').addClass('hide-elements')
  $('#sign-out').removeClass('hide-elements')
  $('#game-record').removeClass('hide-elements')
  $('#game-records').removeClass('hide-elements')
}

const signInFailure = (data) => {
  $('#signed-in').text('Wrong credentials try again!')
  $('#signed-in').fadeOut(2000)
  $('signed-in').text('')
  console.log(data)
}

const changePasswordSuccess = (data) => {
  $('#changePW').text('Change password successful!')
  $('#changePW').fadeOut(2000)
  console.log(data)
}

const changePasswordFailure = (data) => {
  $('#changePW').text('Wrong credentials try again!')
  $('#changePW').fadeOut(2000)
  console.log(data)
}

const signOutSuccess = (data) => {
  $('#signed-out').text('Thanks for playing!')
  $('#signed-out').fadeOut(2000)
  console.log(data)
}

const signOutFailure = (data) => {
  console.eror(data)
}

const newGameSuccess = (data) => {
  console.log(data)
  store.user = data.user
}

const newGameFailure = (data) => {
  console.log(data)
}

const updateGameSuccess = (id) => {
}

const updateGameFailure = (error) => {
  console.error(error)
}

const getGamesSuccess = (data) => {
  const count = data.games.length
  $('.game-stats').show()
  $('#game-count').text(count)
}

const getGamesFailure = (error) => {
  console.error(error)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure,
  newGameSuccess,
  newGameFailure,
  updateGameSuccess,
  updateGameFailure,
  getGamesSuccess,
  getGamesFailure
}
