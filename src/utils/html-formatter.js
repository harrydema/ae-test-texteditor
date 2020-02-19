function isBold(word) {
  return word.match(/<b>(.*?)<\/b>/);
}

function isItalic(word) {
  return word.match(/<i>(.*?)<\/i>/);
}

function isUnderline(word) {
  return word.match(/<u>(.*?)<\/u>/);
}

function boldWord(word) {
  if (isBold(word)) {
    return word.replace('<b>', '').replace('</b>', '');
  }
  return `<b>${word}</b>`;
}

function italicWord(word) {
  if (isItalic(word)) {
    return word.replace('<i>', '').replace('</i>', '');
  }
  return `<i>${word}</i>`;
}

function underlineWord(word) {
  if (isUnderline(word)) {
    return word.replace('<u>', '').replace('</u>', '');
  }
  return `<u>${word}</u>`;
}

export default {
  isBold,
  isItalic,
  isUnderline,
  boldWord,
  italicWord,
  underlineWord,
}