//Write a function that counts the character frequency

const charFrequency = (str) => {
  const obj = {};

  for (let i = 0; i < str.length; i++) {
    const char = str[i].toLowerCase();
    if (obj[char]) {
      obj[char] += 1;
    } else {
      obj[char] = 1;
    }
  }

  return obj;
};

console.log(charFrequency("hello"));
