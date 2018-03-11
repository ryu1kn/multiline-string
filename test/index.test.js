const expect = require('chai').expect
const multiline = require('../index')()

describe('multiline', () => {
  it('ignores the first empty line', () => {
    const str = multiline(`
LINE1`)
    expect(str).to.eql('LINE1')
  })

  it('removes all leading space characters', () => {
    const str = multiline(`
              LINE1`)
    expect(str).to.eql('LINE1')
  })

  it('sets the indent of the 2nd line as the indent for all lines', () => {
    const str = multiline(`
              - LINE1
                - LINE2
              - LINE3
              `)
    expect(str).to.eql('- LINE1\n  - LINE2\n- LINE3\n')
  })

  it('recognises tabs as an indent', () => {
    /* eslint-disable no-tabs */
    const str = multiline(`
		- LINE1
		- LINE2`)
    /* eslint-enable no-tabs */
    expect(str).to.eql('- LINE1\n- LINE2')
  })

  it('removes indents only if it is the same with the first indent', () => {
    const str = multiline(`
        - LINE1
      x - LINE2`)
    expect(str).to.eql('- LINE1\n      x - LINE2')
  })

  it('does not remove matching spaces if they appear in the middle of a line', () => {
    const str = multiline(`
        - LINE1
      - LINE2        x`)
    expect(str).to.eql('- LINE1\n      - LINE2        x')
  })
})
