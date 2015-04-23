// --------------------------------------------------------------------------------------------------------------------
//
// https://www.npmjs.com/package/plurals
//
// Copyright (c) 2015 Andrew Chilton.
//
// License: MIT
//
// --------------------------------------------------------------------------------------------------------------------

function pluralise(count, singular, plural) {
  if ( !singular ) {
    throw new Error('pluralise: You must provide a singular option')
  }
  if ( !plural ) {
    plural = singular + 's'
  }

  if ( count === 1 ) return singular
  return plural
}

function withCount(count, singular, plural, none) {
  if ( !singular ) {
    throw new Error('pluralise:withCount: You must provide a singular option')
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

  return msg.replace('%', count)
}

// --------------------------------------------------------------------------------------------------------------------

// stick the withCount onto the pluralise object (well, function)
pluralise.withCount = withCount

module.exports = pluralise

// --------------------------------------------------------------------------------------------------------------------
