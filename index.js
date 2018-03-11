const NEWLINE = '\n'
const MULTILINE_PATTERN = new RegExp(`^${NEWLINE}([ \t]*)`)

function multiline (text) {
  const match = text.match(MULTILINE_PATTERN)
  const indent = match[1]
  return text
    .split(NEWLINE)
    .slice(1)
    .map(line => (line.startsWith(indent) ? line.replace(indent, '') : line))
    .join(NEWLINE)
}

module.exports = () => multiline
