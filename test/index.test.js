const test = require('tape')
const multiline = require('../index')()

test('it ignores the first empty line', t => {
  t.plan(1)

  const str = multiline(`
LINE1
`)
  t.equal(str, 'LINE1\n')
})

test('it removes all leading space characters', t => {
  t.plan(1)

  const str = multiline(`
              LINE1`)
  t.equal(str, 'LINE1')
})

test('it sets the indent of the 2nd line as the indent for all lines', t => {
  t.plan(1)

  const str = multiline(`
              - LINE1
                - LINE2
              - LINE3
              `)
  t.equal(str, '- LINE1\n  - LINE2\n- LINE3\n')
})
