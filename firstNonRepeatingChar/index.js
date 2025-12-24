// Write a function that returns the first character that does not repeat in a string.

const firstNonRepeatingChar = (str) => {
  let nonRepeatingChar;
  const charFreq = {};
  for (let i = 0; i <= str.length - 1; i++) {
    const char = str[i];
    if (charFreq[char]) {
      charFreq[char] += 1;
    } else {
      charFreq[char] = 1;
    }
  }
  for (let i = 0; i <= str.length - 1; i++) {
    const char = str[i];
    if (charFreq[char] === 1) {
      return char;
    }
  }
};

console.log(firstNonRepeatingChar("hello"));
