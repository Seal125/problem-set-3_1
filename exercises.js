const isUpperCase = (str) => {
  if (str.match(/^[^a-z]*$/)) {
    return true;
  }
  return false;
};

const removeVowels = (arr) => {
  const result = arr.map((words) => words.replace(/[aeiouAEIOU]/g, ''));
  return result;
};

const wordCap = (str) => {
  const newStr = str.toLowerCase().split(' ');
  const result = newStr.map((word) => word.replace(/^[a-z]/g, word[0].toUpperCase()));
  return result.join(' ');
};

const swapCase = (str) => {
  let newStr = '';
  function upper(letter) {
    return letter.toUpperCase();
  }
  function lower(letter) {
    return letter.toLowerCase();
  }

  for (const letter of str) {
    if (letter.match(/[a-z]/)) {
      newStr += letter.replace(/[a-z]/, upper);
    } else {
      newStr += letter.replace(/[A-Z]/, lower);
    }
  }
  return newStr;
};

const staggeredCase = (str) => {
  let result = '';
  let lastLetterLower = true;

  for (const char of str) {
    if (char.match(/[a-z]/i)) {
      if (lastLetterLower === false) {
        result += char.toLowerCase();
        lastLetterLower = true;
      } else if (lastLetterLower === true) {
        result += char.toUpperCase();
        lastLetterLower = false;
      }
    } else {
      result += char;
    }
  }
  return result;
};

const wordLengths = (str) => {
  const emptyArr = [];
  if (str === undefined) {
    return emptyArr;
  }
  if (str.length === 0) {
    return emptyArr;
  }

  const newStr = str.split(' ');
  const result = newStr.map((word) => `${word} ${word.length}`);
  return result;
};

const searchWord = (word, str) => {
  const regex = new RegExp(word, 'gi');
  return str.match(regex).length;
};

const highlightWord = (word, str) => {
  const regex = new RegExp(word, 'gi');
  if (str.match(regex)) {
    const newStr = `<strong>${word}</strong>`;
    return str.replace(word, newStr);
  }
  return str;
};
// The code below ensures that this file can talk to our test file.
module.exports = {
  isUpperCase,
  removeVowels,
  wordCap,
  swapCase,
  staggeredCase,
  wordLengths,
  searchWord,
  highlightWord,
};
