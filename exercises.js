const isUpperCase = (str) => {
  if(str.match(/^[^a-z]*$/)) { 
    return true;
  }
  return false;
};

const removeVowels = (arr) => {
  let result = arr.map(words => {
      return words.replace(/[aeiouAEIOU]/g, '');
  });
  return result;
};

const wordCap = (str) => {
  const newStr = str.toLowerCase().split(' ');
  let result = newStr.map(word => {
    return word.replace(/^[a-z]/g, word[0].toUpperCase());
  });
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
  
  for(let letter of str) {
    if(letter.match(/[a-z]/)) {
      newStr += letter.replace(/[a-z]/, upper);
    }
    else{
      newStr += letter.replace(/[A-Z]/, lower);
    }
  }
  return newStr;
};

const staggeredCase = (str) => {
  let result = '';
  let lastLetterLower = true;
  
  for(let char of str) {
    if (char.match(/[a-z]/i)) {
      if(lastLetterLower == false) {
        result += char.toLowerCase();
        lastLetterLower = true;
      }
      else if(lastLetterLower == true) {
        result += char.toUpperCase();
        lastLetterLower = false;
      }
    }
    else {
      result += char;
    }
  }
  return result;
};

const wordLengths = (str) => {
  let emptyArr = [];
  if(str === undefined) {
    return emptyArr;
  }
  if(str.length === 0) {
    return emptyArr;
  }
  
  let newStr = str.split(' ');
  let result = newStr.map(word => {
    return `${word} ${word.length}`
  });
  return result;
};

const searchWord = (word, str) => {
  let regex = new RegExp(word + '\s', 'gi');
  return str.match(regex).length;
};

const highlightWord = (word, str) => {
  let regex = new RegExp(word + '\\s', 'gi');
  if(str.match(regex)) {
    let newStr = `<strong>${word}</strong>`;
    return str.replace(word, newStr);
  }
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
