export default function sort(array) {
  const arr = array;
  for (let i = arr.length - 1; i > 0; i -= 1) {
    for (let j = 0; j < arr.length - 1; j += 1) {
      if (arr[j].health < arr[j + 1].health) {
        const elem = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = elem;
      }
    }
  }
  return arr;
}
