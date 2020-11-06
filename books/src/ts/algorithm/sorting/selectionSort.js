import { compareFn, swap, arr, findMaxMinValue } from '../utils/index.js'

function selectionSort(array, compare = compareFn) {
  const { length } = array
  let indexMin
  for (let i = 0; i < length; i++) {
    indexMin = i
    // 前面已经排序， 从i个开始查找最小值，和j位置交换
    for (let j = i; j < length; j++) {
      if (compare(array, i, j) === 1) {
        indexMin = j
      }
      if (i !== indexMin) {
        swap(array, i, j)
      }
    }
  }
  return array
}

console.log(selectionSort(arr))
