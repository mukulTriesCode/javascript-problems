//Write a function that moves zeros to end in an array

const moveZerosToEnd = (arr) => {
  const newArr = [];
  let zeroCount = 0;

  for (let i = 0; i < arr.length; i++) {
    const char = arr[i];
    if (char === 0) {
      zeroCount += 1;
    } else {
      newArr.push(char);
    }
  }

  for (let i = 0; i < zeroCount; i++) {
    newArr.push(0);
  }

  return newArr;
};

console.log(moveZerosToEnd([1, 0, 2, 32, 0]));
