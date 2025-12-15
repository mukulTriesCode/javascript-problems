//Remove specific elements of an array
// e.g. Remove "1" from the array [1, 32, 2, 1]
// Output => [32, 2]

const removeElement = (arr, elem) => {
  const updatedArray = [];

  for (let i = 0; i < arr.length; i++) {
    if (elem !== arr[i]) {
      updatedArray.push(arr[i]);
    }
  }

  return updatedArray;
};

console.log(removeElement([1, 32, 2, 1], 1));
