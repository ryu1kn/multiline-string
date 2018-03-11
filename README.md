
# multiline-string

Remove leading space characters to let you nicely indent your multiline string in your code.

## Prerequisite

* Node v4+

## Usage

```js
const multiline = require('multiline-string')()

const s = multiline(`
            * Item 1
              * Item 1-1
            * Item 2
            `)

console.log(s)
```

This prints out:

```
* Item 1
  * Item 1-1
* Item 2
```
