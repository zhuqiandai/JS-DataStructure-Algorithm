import { compareFn, swap, arr } from '../utils/index.js'

function bubbleSort(array, compare = compareFn) {
  const { length } = array
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - 1 - i; j++) {
      if (compare(array, j, j + 1) === 1) {
        swap(array, j, j + 1)
      }
    }
  }
  return array
}

console.log(bubbleSort(arr))
