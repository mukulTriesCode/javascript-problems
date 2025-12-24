// Write a function that returns the longest word from a sentence.
// longestWord("I love JavaScript very much") -> "JavaScript"
// longestWord("Hello world")                 ->"Hello"
// longestWord("")                            -> null

const longestWord = (str) => {
  let longest;
  let current;
  for (let i = 0; i <= str.length - 1; i++) {
    const char = str[i];
    if (current) {
      current += char;
    } else {
      current = char;
    }
    if (char === " ") {
      console.log(current)
      if (longest) {
        if (current.length > longest.length) {
          longest = current;
        } else if (current.length === longest.length) {
          current === null;
        }
      } else {
        longest = current;
        current = null;
      }
    }
  }
  return ;
};

console.log(longestWord("hello worlds"));
