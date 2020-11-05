const arr = [2062, 90410, 71989, 30824, 47870, 65359]

// export function compareFn(a, b) {
//   if (a > b) return true
//   if (a <= b) return false
// }

// export function swap(array, a, b) {
//   ;[array[a], array[b]] = [array[b], array[a]]
// }

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
