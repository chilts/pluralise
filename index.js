// --------------------------------------------------------------------------------------------------------------------
//
// https://www.npmjs.com/package/plurals
//
// Copyright (c) 2015 Andrew Chilton.
//
// License: MIT
//
// --------------------------------------------------------------------------------------------------------------------

function pluralise(count, singular, plural, none) {
  if ( !singular ) {
    throw new Error('pluralise: You must provide a singular option')
  }
  if ( !plural ) {
    plural = singular + 's'
  }
  if ( !none ) {
    none = plural
  }

  var msg
  if ( count === 0 ) {
    msg = none
  }
  else if ( count === 1 ) {
    msg = singular
  }
  else {
    msg = plural
  }

  return msg
}

// --------------------------------------------------------------------------------------------------------------------

module.exports = pluralise

// --------------------------------------------------------------------------------------------------------------------
