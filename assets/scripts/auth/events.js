'use strict'
const store = require('../store.js')
const getFormFields = require(`../../../lib/get-form-fields`)

const tictactoeLogic = require('./tictactoeLogic')
const api = require('./api')
const ui = require('./ui')

// player sign-up
const onSignUp = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  // console.log(data, 'hi')
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

// player sign-in
const onSignIn = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

// player change-password
const onChangePassword = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

// player sign-out
const onSignOut = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.signOut(data)
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const onNewGame = function (event) {
  event.preventDefault()
  api.newGame()
  .then(ui.newGameSuccess)
  .catch(ui.newGameFailure)
}

const onUpdateGame = function () {
  if (tictactoeLogic.isNoWinner() || tictactoeLogic.isWinnerX() || tictactoeLogic.isWinnerO()) {
    store.game.over = true
    const data = store
    console.log(data, store)
    api.updateGame(data)
     .then(ui.updateGameSuccess)
     .catch(ui.updateGameFailure)
  }
}

const onGetGames = function (event) {
  event.preventDefault()
  api.getGames()
  .then(ui.getGamesSuccess)
  .catch(ui.getGamesFailure)
}

let currentPlayer = 'X'

// changes X & O on game board and checks winner from tictactoeLogic
const cellClick = function (event) {
  $(this).addClass('avoid-clicks') // connected as .avoid-clicks on gameboard.css to prevent X or O from replacing each other in cells
  if (currentPlayer === 'O') {
    $(this).text('O')
    tictactoeLogic.isWinnerO()
    currentPlayer = 'X'
  } else {
    $(this).text('X')
    tictactoeLogic.isWinnerX()
    currentPlayer = 'O'
  }

  tictactoeLogic.totalClicks++
  onUpdateGame()
}

// event handlers
const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#change-password').on('submit', onChangePassword)
  $('#sign-out').on('submit', onSignOut)
  $('#new-game').on('submit', onNewGame)
  $('#get-games').on('click', onGetGames)
  $('.cell').on('click', cellClick)
  $('#totalGamesBanner').addClass('hide-elements')
  $('#gameBoard').addClass('hide-elements')
  $('#change-password').addClass('hide-elements')
  $('#sign-out').addClass('hide-elements')
  $('#new-game').addClass('hide-elements')
  $('#game-record').addClass('hide-elements')
  $('#game-records').addClass('hide-elements')
  $('#get-games').addClass('hide-elements')
}

module.exports = {
  addHandlers
}
