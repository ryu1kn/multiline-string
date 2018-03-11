
const NEWLINE = '\n'
const MULTILINE_PATTERN = new RegExp(`^${NEWLINE}( *)`)

function multiline(text) {
  const match = text.match(MULTILINE_PATTERN)
  const skipLength = match[1].length
  return text.split(NEWLINE)
    .slice(1)
    .map(line => line.substr(skipLength))
    .join(NEWLINE)
}

module.exports = () => multiline
