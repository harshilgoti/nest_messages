const bb = [1, 2, 3, 4, 3, 4, 5, 6, 5, 6, 6, 7, 8];

const aaa = (array) => {
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] > array[i + 1]) {
      return false;
    }
  }

  return true;
};

console.log(Math.max(...aa));
