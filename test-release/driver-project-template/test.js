const assert = require('assert')
const createMultiline = require('multiline-string')
const defaultMultiline = createMultiline()

const str = defaultMultiline(`
          - LINE1
            - LINE2
          - LINE3
          `)
assert.strictEqual(str, '- LINE1\n  - LINE2\n- LINE3\n')
