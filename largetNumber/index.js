//Find the largest number in an array in JavaScript

const largetNumber = (arr) => {
  let largest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (largest < arr[i]) {
      largest = arr[i];
    }
  }
  return largest;
};

console.log(largetNumber([1, 3, 5, 5]));
