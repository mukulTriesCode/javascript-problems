// Write a function that returns the longest word from a sentence.
// longestWord("I love JavaScript very much") -> "JavaScript"
// longestWord("Hello world")                 ->"Hello"
// longestWord("")                            -> null

const longestWord = (str) => {
  let longest;
  let current;
  for (let i = 0; i <= str.length - 1; i++) {
    const char = str[i];
    if (char === " ") {
      if (longest) {
        if (current.length > longest.length) {
          longest = current;
          current === null;
        } else if (current.length === longest.length) {
          current === null;
        }
      } else {
        longest = current;
        current = null;
      }
      current = null;
    }
    if (current) {
      current += char;
    } else {
      current = char;
    }
  }
  return;
};

console.log(longestWord("hello worlds"));
