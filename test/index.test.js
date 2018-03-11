const expect = require('chai').expect
const createMultiline = require('../index')
const defaultMultiline = createMultiline()

describe('multiline', () => {
  it('ignores the first empty line', () => {
    const str = defaultMultiline(`
LINE1`)
    expect(str).to.eql('LINE1')
  })

  it('does nothing if given string does not begin with newline', () => {
    const str = defaultMultiline(`LINE1`)
    expect(str).to.eql('LINE1')
  })

  it('uses the indent size of the first non-empty line', () => {
    const str = defaultMultiline(`

      LINE1
      LINE2`)
    expect(str).to.eql('\nLINE1\nLINE2')
  })

  it('removes all leading space characters', () => {
    const str = defaultMultiline(`
              LINE1`)
    expect(str).to.eql('LINE1')
  })

  it('sets the indent of the 2nd line as the indent for all lines', () => {
    const str = defaultMultiline(`
              - LINE1
                - LINE2
              - LINE3
              `)
    expect(str).to.eql('- LINE1\n  - LINE2\n- LINE3\n')
  })

  it('recognises tabs as an indent', () => {
    /* eslint-disable no-tabs */
    const str = defaultMultiline(`
		- LINE1
		- LINE2`)
    /* eslint-enable no-tabs */
    expect(str).to.eql('- LINE1\n- LINE2')
  })

  it('removes indents only if it is the same with the first indent', () => {
    const str = defaultMultiline(`
        - LINE1
      x - LINE2`)
    expect(str).to.eql('- LINE1\n      x - LINE2')
  })

  it('does not remove matching spaces if they appear in the middle of a line', () => {
    const str = defaultMultiline(`
        - LINE1
      - LINE2        x`)
    expect(str).to.eql('- LINE1\n      - LINE2        x')
  })

  it('drops all characters until it encounters the first margin character', () => {
    const multiline = createMultiline({ marginMark: '|' })
    const str = multiline(`
        |  *
        | ***
        |*****`)
    expect(str).to.eql('  *\n ***\n*****')
  })

  it('does nothing if it encounters non-margin-mark or non-spaces first', () => {
    const multiline = createMultiline({ marginMark: '|' })
    const str = multiline(`
      x |  *
        | ***`)
    expect(str).to.eql('      x |  *\n        | ***')
  })
})
