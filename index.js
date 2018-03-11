const NEWLINE = '\n'
const INDENT_PATTERN = new RegExp(`^${NEWLINE}([ \t]*)`)

module.exports = options => {
  const marginChar = (options || {}).marginChar || ''
  return text => {
    const match = text.match(INDENT_PATTERN)
    const process = match ? dropLeadings(match[1] + marginChar) : id
    return process(text)
  }
}

function dropLeadings (leading) {
  return text =>
    text
      .split(NEWLINE)
      .slice(1)
      .map(dropLeading(leading))
      .join(NEWLINE)
}

function id (text) {
  return text
}

function dropLeading (leading) {
  return line => (line.startsWith(leading) ? line.replace(leading, '') : line)
}
