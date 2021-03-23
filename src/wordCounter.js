const wordCounter = (text) => {
  const wom = text.match(/\S+/g);
  return {
      charactersNoSpaces : text.replace(/\s+/g, '').length,
      characters         : text.length,
      words              : wom ? wom.length : 0,
      lines              : text.split(/\r*\n/).length
  }
}

export { wordCounter }
