//Write a function that checks whether two strings are anagrams

const isAnagram = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
  }

  const charCount = {};
  for (let i = 0; i < str1.length; i++) {
    const char = str1[i];
    if (charCount[char]) {
      charCount[char] += 1;
    } else {
      charCount[char] = 1;
    }
  }

  for (let i = 0; i < str2.length; i++) {
    const char = str2[i];
    if (charCount[char]) {
      charCount[char] -= 1;
    } else {
      return false;
    }
  }

  for (let char in charCount) {
    if (charCount[char] !== 0) {
      return false;
    }
  }

  return true;
};

console.log(isAnagram("listen", "silent"));
