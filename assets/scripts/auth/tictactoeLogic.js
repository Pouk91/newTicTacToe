'use strict'

// const updateGame = require('./api.js').updateGame
// console.log(updateGame)

const isNoWinner = function () {
  if (
    ($('#c1').text() !== '') &&
    ($('#c2').text() !== '') &&
    ($('#c3').text() !== '') &&
    ($('#c4').text() !== '') &&
    ($('#c5').text() !== '') &&
    ($('#c6').text() !== '') &&
    ($('#c7').text() !== '') &&
    ($('#c8').text() !== '') &&
    ($('#c9').text() !== '') &&
    (isWinnerX === false) &&
    (isWinnerO === false)
  ) {
    $('#winner').text('No winner! Play again!')
    $('#gameBoard').addClass('avoid-clicks')
  }
}

// isWinnerX checks gameBoard cells for X win combiantions and dispays Player 1 win
const isWinnerX = function () {
  if (($('#c1').text() === 'X') && ($('#c2').text() === 'X') && ($('#c3').text() === 'X')) {
    $('#winner').text('Player 1 Wins!')
    $('#gameBoard').addClass('avoid-clicks')
  }

  if (($('#c4').text() === 'X') && ($('#c5').text() === 'X') && ($('#c6').text() === 'X')) {
    $('#winner').text('Player 1 Wins!')
    $('#gameBoard').addClass('avoid-clicks')
  }

  if (($('#c7').text() === 'X') && ($('#c8').text() === 'X') && ($('#c9').text() === 'X')) {
    $('#winner').text('Player 1 Wins!')
    $('#gameBoard').addClass('avoid-clicks')
  }

  if (($('#c1').text() === 'X') && ($('#c4').text() === 'X') && ($('#c7').text() === 'X')) {
    $('#winner').text('Player 1 Wins!')
    $('#gameBoard').addClass('avoid-clicks')
  }

  if (($('#c2').text() === 'X') && ($('#c5').text() === 'X') && ($('#c8').text() === 'X')) {
    $('#winner').text('Player 1 Wins!')
    $('#gameBoard').addClass('avoid-clicks')
  }

  if (($('#c3').text() === 'X') && ($('#c6').text() === 'X') && ($('#c9').text() === 'X')) {
    $('#winner').text('Player 1 Wins!')
    $('#gameBoard').addClass('avoid-clicks')
  }

  if (($('#c1').text() === 'X') && ($('#c5').text() === 'X') && ($('#c9').text() === 'X')) {
    $('#winner').text('Player 1 Wins!')
    $('#gameBoard').addClass('avoid-clicks')
  }

  if (($('#c3').text() === 'X') && ($('#c5').text() === 'X') && ($('#c7').text() === 'X')) {
    $('#winner').text('Player 1 Wins!')
    $('#gameBoard').addClass('avoid-clicks')
  }
}

// isWinnerO checks gameBoard cells for y win combiantions and displays Player 2 Wins!
const isWinnerO = function () {
  if (($('#c1').text() === 'O') && ($('#c2').text() === 'O') && ($('#c3').text() === 'O')) {
    $('#winner').text('Player 2 Wins!')
    $('#gameBoard').addClass('avoid-clicks')
  }

  if (($('#c4').text() === 'O') && ($('#c5').text() === 'O') && ($('#c6').text() === 'O')) {
    $('#winner').text('Player 2 Wins!')
    $('#gameBoard').addClass('avoid-clicks')
  }

  if (($('#c7').text() === 'O') && ($('#c8').text() === 'O') && ($('#c9').text() === 'O')) {
    $('#winner').text('Player 2 Wins!')
    $('#gameBoard').addClass('avoid-clicks')
  }

  if (($('#c1').text() === 'O') && ($('#c4').text() === 'O') && ($('#c7').text() === 'O')) {
    $('#winner').text('Player 2 Wins!')
    $('#gameBoard').addClass('avoid-clicks')
  }

  if (($('#c2').text() === 'O') && ($('#c5').text() === 'O') && ($('#c8').text() === 'O')) {
    $('#winner').text('Player 2 Wins!')
    $('#gameBoard').addClass('avoid-clicks')
  }

  if (($('#c3').text() === 'O') && ($('#c6').text() === 'O') && ($('#c9').text() === 'O')) {
    $('#winner').text('Player 2 Wins!')
    $('#gameBoard').addClass('avoid-clicks')
  }

  if (($('#c1').text() === 'O') && ($('#c5').text() === 'O') && ($('#c9').text() === 'O')) {
    $('#winner').text('Player 2 Wins!')
    $('#gameBoard').addClass('avoid-clicks')
  }

  if (($('#c3').text() === 'O') && ($('#c5').text() === 'O') && ($('#c7').text() === 'O')) {
    $('#winner').text('Player 2 Wins!')
    $('#gameBoard').addClass('avoid-clicks')
  }
}


module.exports = {
  isWinnerX,
  isWinnerO,
  isNoWinner
}
