export const arr = [2062, 90410, 71989, 30824, 47870, 65359]

const COMPARE = {
  BIGGER_THAN: 1,
  LESS_THAN: -1,
  EQUAL: 0,
}

export function compareFn(array, a, b) {
  if (array[a] > array[b]) return COMPARE.BIGGER_THAN
  if (array[a] < array[b]) return COMPARE.LESS_THAN
}

export function swap(array, a, b) {
  ;[array[a], array[b]] = [array[b], array[a]]
}

export function findMaxMinValue(arr) {
  let max = arr[0]
  let min = arr[0]

  arr.forEach((item) => {
    if (item > max) {
      max = item
    }
    if (item < min) {
      min = item
    }
  })
  return {
    max,
    min,
  }
}
