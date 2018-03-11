const NEWLINE = '\n'
const INDENT_PATTERN = new RegExp(`^${NEWLINE}([ \t]*)`)

const dropLeading = leading => line =>
  line.startsWith(leading) ? line.replace(leading, '') : line

module.exports = options => {
  const marginChar = (options || {}).marginChar || ''
  return text => {
    const match = text.match(INDENT_PATTERN)
    return text
      .split(NEWLINE)
      .slice(1)
      .map(dropLeading(match[1] + marginChar))
      .join(NEWLINE)
  }
}
