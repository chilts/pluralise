var test = require('tape')

var pluralise = require('../')

test('a few simple tests', function(t) {
  t.plan(12)

  // book - regular noun
  t.equal(pluralise(0, 'book'), 'books', '0 - books is correct')
  t.equal(pluralise(1, 'book'), 'book',  '1 - book  is correct')
  t.equal(pluralise(2, 'book'), 'books', '2 - books is correct')

  // sheep/sheep
  t.equal(pluralise(0, 'sheep', 'sheep'), 'sheep', '0 - sheep is correct')
  t.equal(pluralise(1, 'sheep', 'sheep'), 'sheep', '1 - sheep is correct')
  t.equal(pluralise(2, 'sheep', 'sheep'), 'sheep', '2 - sheep is correct')

  // wolf/wolves
  t.equal(pluralise(0, 'wolf', 'wolves'), 'wolves', '0 - wolves is correct')
  t.equal(pluralise(1, 'wolf', 'wolves'), 'wolf',   '1 - wolf is correct')
  t.equal(pluralise(2, 'wolf', 'wolves'), 'wolves', '2 - wolves is correct')

  // with a 'none' option
  t.equal(pluralise(0, 'wolf', 'wolves', 'no wolves'), 'no wolves', '0 - no wolves is correct')
  t.equal(pluralise(1, 'wolf', 'wolves', 'no wolves'), 'wolf',   '1 - wolf is correct')
  t.equal(pluralise(2, 'wolf', 'wolves', 'no wolves'), 'wolves', '2 - wolves is correct')
})

test('check that singular is required', function(t) {
  t.plan(2)

  try {
    pluralise(1)
    t.fail('This should have thrown a wobbly')
  }
  catch (err) {
    t.pass('Yes, we threw an error')
    t.equal('' + err, 'Error: pluralise: You must provide a singular option', 'The error was as expected')
  }
})
