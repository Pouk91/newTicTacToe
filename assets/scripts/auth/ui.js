'use strict'

const store = require('../store.js')

// On signup success text will appear for 2 seconds and signup input dissappear
// Removes class hide-elements for for ids sign-up, sign-in, change-password, gameBoard,
// game-record, game-records
const signUpSuccess = (data) => {
  $('#messageBanner').text('Sign up successful!')
  $('#messageBanner').fadeOut(2000)
  $('#sign-up').addClass('hide-elements')
  $('#sign-in').removeClass('hide-elements')
  $('#change-password').removeClass('hide-elements')
  $('#new-game').removeClass('hide-elements')
}

// On signup failure message appears for 2 seconds
const signUpFailure = (data) => {
  $('#messageBanner').text('Wrong credentials try again.')
  $('#messageBanner').fadeOut(2000)
}

//
const signInSuccess = (data) => {
  store.user = data.user
  console.log(store.user, 'store.user')
  $('#messageBanner').text('Sign in successful!')
  $('#messageBanner').fadeOut(2000)
  $('#sign-up').addClass('hide-elements')
  $('#gameBoard').removeClass('hide-elements')
  $('#sign-in').addClass('hide-elements')
  $('#sign-out').removeClass('hide-elements')
  $('#new-game').removeClass('hide-elements')
  $('#game-record').removeClass('hide-elements')
  $('#game-records').removeClass('hide-elements')
}

const signInFailure = (data) => {
  $('#messageBanner').text('Wrong credentials try again!')
  $('#messageBanner').fadeOut(2000)
  $('#messageBanner').text('')
  console.log(data)
}

const changePasswordSuccess = (data) => {
  $('#messageBanner').text('Change password successful!')
  $('#messageBanner').fadeOut(2000)
  console.log(data)
}

const changePasswordFailure = (data) => {
  $('#messageBanner').text('Wrong credentials try again!')
  $('#messageBanner').fadeOut(2000)
  console.log(data)
}

const signOutSuccess = (data) => {
  $('#messageBanner').text('Thanks for playing!')
  $('#messageBanner').fadeOut(2000)
  $('#sign-up').removeClass('hide-elements')
  $('#gameBoard').addClass('hide-elements')
  $('#sign-in').removeClass('hide-elements')
  $('#sign-out').addClass('hide-elements')
  $('#new-game').addClass('hide-elements')
  $('#game-record').addClass('hide-elements')
  $('#game-records').addClass('hide-elements')
}

const signOutFailure = (data) => {
  console.eror(data)
}

const newGameSuccess = (data) => {
  console.log(data, 'this is new game data')
  $('.cell').text('')
  $('.cell').removeClass('avoid-clicks')
  $('#gameBoard').removeClass('avoid-clicks')
  $('#winner').text('')
}

const newGameFailure = (data) => {
  console.log(data)
}

const updateGameSuccess = (data) => {
  console.log(data)
}

const updateGameFailure = (data) => {
  console.error(data)
}

const getGamesSuccess = (data) => {
  const count = data.games.length
  $('.game-stats').show()
  $('#game-count').text(count)
}

const getGamesFailure = (data) => {
  console.error(data)
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
