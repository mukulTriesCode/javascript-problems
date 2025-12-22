//Write a function that counts the vowels present

const countVowels = (str) => {
  const obj = {};
  //OPTIONAL
  //const vowels = "aeiou"
  const vowels = ["a", "e", "i", "o", "u"];

  for (let i = 0; i < str.length; i++) {
    const char = str[i].toLowerCase();
    for (let j = 0; j < vowels.length; j++) {
      const vowel = vowels[j];
      if (char === vowel) {
        if (obj[char]) {
          obj[char] += 1;
        } else {
          obj[char] = 1;
        }
      }
    }
  }

  return obj;
};

console.log(countVowels("hello"));
