[![Build Status](https://travis-ci.org/ryu1kn/multiline-string.svg?branch=master)](https://travis-ci.org/ryu1kn/multiline-string)
[![Coverage Status](https://coveralls.io/repos/github/ryu1kn/multiline-string/badge.svg?branch=master)](https://coveralls.io/github/ryu1kn/multiline-string?branch=master)

# multiline-string

Remove leading space characters to let you nicely indent your multiline strings in your code.

## Prerequisite

* Node v4+

## Usage

By default, `multiline` detects indentation by looking at the first non-empty line.
Notice that the first empty line is dropped from the output to let you to start
the first line with the indentation level you like.

```js
const multiline = require('multiline-string')()

const s = multiline(`
            1. xxx
              a. yyy
            2. zzz
            `)

console.log(s)
// => "1. xxx\n  a. yyy\n2. zzz"
```

If you want to start your string with an empty line, you can do:

```js
const s = multiline(`

            Line 1
            Line 2
            `)
// => "\nLine 1\nLine 2\n"
```

You can also give `marginMark` to identify the start of each line
to include indentation in the resulting text.

```js
const multiline = require('multiline-string')({ marginMark: '|' })

const s = multiline(`
            |  Usage: my-command file
            |
            |    -v, --version    Show version
            |    -h, --help       Show help information
            |`)

console.log(s)
// => "  Usage: ...\n\n    -v, --version ..."
```
