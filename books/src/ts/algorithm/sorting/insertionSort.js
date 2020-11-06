import { compareFn, arr } from '../utils/index.js'

function insertionSort(array, compare = compareFn) {
  const { length } = array
  let temp // 待插入元素
  for (let i = 0; i < length; i++) {
    let j = i
    temp = array[i]

    while (j > 0 && compare(array, j - 1, i) === 1) {
      array[j] = array[j - 1]
      j--
    }
    array[j] = temp
  }
  return array
}

console.log(insertionSort(arr))
