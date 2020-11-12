import quickSort from '../sort/quickSort.js'
import { Compare } from '../sort/util.js'
import { arr, defaultCompare, lesserOrEquals } from './util.js'

function binarySearch(array, value, compareFn = defaultCompare) {
  // 1. 排序
  const sortedArray = quickSort(array)
  const { length } = sortedArray

  // 2. 搜索中间值

  // 左右指针
  let low = 0
  let high = length - 1

  while (lesserOrEquals(low, high, compareFn)) {
    const mid = Math.floor(low + high / 2)
    const ele = sortedArray[mid]

    if (compareFn(ele, value) === Compare.LESS_THAN) {
      low = mid + 1
    } else if (compareFn(ele, value) === Compare.BIGGER_THAN) {
      high = mid - 1
    } else {
      return mid
    }
    return -1
  }
}
