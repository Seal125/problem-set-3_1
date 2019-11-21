const exercises = require('./exercises');

// Question 1
test('Question 1: isUpperCase', () => {
  expect(exercises.isUpperCase('t')).toBe(false);
  expect(exercises.isUpperCase('T')).toBe(true);
  expect(exercises.isUpperCase('Four Score')).toBe(false);
  expect(exercises.isUpperCase('FOUR SCORE')).toBe(true);
  expect(exercises.isUpperCase('4SCORE!')).toBe(true);
  expect(exercises.isUpperCase('')).toBe(true);
});

// Question 2
test('Question 2: removeVowels', () => {
  expect(exercises.removeVowels(['abcdefghijklmnopqrstuvwxyz'])).toEqual(["bcdfghjklmnpqrstvwxyz"]);
  expect(exercises.removeVowels(['green', 'YELLOW', 'black', 'white'])).toEqual(["grn", "YLLW", "blck", "wht"]);
  expect(exercises.removeVowels(['ABC', 'AEIOU', 'XYZ'])).toEqual(["BC", "", "XYZ"]);
});

// Question 3
test('Question 3: wordCap', () => {
  expect(exercises.wordCap('four score and seven')).toBe("Four Score And Seven");
  expect(exercises.wordCap('the javaScript language')).toBe("The Javascript Language");
  expect(exercises.wordCap('this is a "quoted" word')).toBe('This Is A "quoted" Word');
});

// Question 4
test('Question 4: swapCase', () => {
  expect(exercises.swapCase('CamelCase')).toBe("cAMELcASE");
  expect(exercises.swapCase('Tonight on XYZ-TV')).toBe("tONIGHT ON xyz-tv");
});

// Question 5
test('Question 5: staggeredCase', () => {
  expect(exercises.staggeredCase('I Love Launch School!')).toBe("I lOvE lAuNcH sChOoL!");
  expect(exercises.staggeredCase('ALL CAPS')).toBe("AlL cApS");
  expect(exercises.staggeredCase('ignore 77 the 444 numbers')).toBe("IgNoRe 77 ThE 444 nUmBeRs");
});

// Question 6
test('Question 6: wordLengths', () => {
  expect(exercises.wordLengths('cow sheep chicken')).toEqual(["cow 3", "sheep 5", "chicken 7"]);
  expect(exercises.wordLengths('baseball hot dogs and apple pie')).toEqual(["baseball 8", "hot 3", "dogs 4", "and 3", "apple 5", "pie 3"]);
  expect(exercises.wordLengths("It ain't easy, is it?")).toEqual(["It 2", "ain't 5", "easy, 5", "is 2", "it? 3"]);
  expect(exercises.wordLengths('Supercalifragilisticexpialidocious')).toEqual(["Supercalifragilisticexpialidocious 34"]);
  expect(exercises.wordLengths('')).toEqual([]);
  expect(exercises.wordLengths()).toEqual([]);
});

// Question 7
test('Question 7: searchWord', () => {
  let text = 'D Smoke is humble. The Inglewood native exudes an aura of maturation, needed for his quick ascension into popular culture as the first winner of Rhythm + Flow, Netflix’s hip-hop reality competition centered on the discovery of hip-hop’s next star. His signature authenticity shone throughout the 10-episode series and international audiences were drawn to his charisma as he proudly rapped about his lived experiences as a young black man in Inglewood.';
  expect(exercises.searchWord('his', text)).toBe(4);
  expect(exercises.searchWord('hip-hop', text)).toBe(2); // "hip-hop" SHOULD match "hip-hop's"
  expect(exercises.searchWord('flow', text)).toBe(1);
});

// Question 8
test('Question 8: highlightWord', () => {
  let text = 'D Smoke is humble. The Inglewood native exudes an aura of maturation, needed for his quick ascension into popular culture as the first winner of Rhythm + Flow, Netflix’s hip-hop reality competition centered on the discovery of hip-hop’s next star. His signature authenticity shone throughout the 10-episode series and international audiences were drawn to his charisma as he proudly rapped about his lived experiences as a young black man in Inglewood.';
  
  let highlightedText = 'D Smoke is humble. The Inglewood native exudes an aura of maturation, needed for <strong>his</strong> quick ascension into popular culture as the first winner of Rhythm + Flow, Netflix’s hip-hop reality competition centered on the discovery of hip-hop’s next star. <strong>His</strong> signature authenticity shone throughout the 10-episode series and international audiences were drawn to <strong>his</strong> charisma as he proudly rapped about <strong>his</strong> lived experiences as a young black man in Inglewood.';

  expect(exercises.highlightWord('his', text)).toBe(highlightedText);
});
