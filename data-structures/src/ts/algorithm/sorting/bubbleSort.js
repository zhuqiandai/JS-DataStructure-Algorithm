function compareFn(a, b) {
  if (a > b) return false
  if (a <= b) return true
}
function swap(array, a, b) {
  ;[array[a], array[b]] = [array[b], array[a]]
}

function bubbleSort(array, compareFn) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array - 1 - i; j++) {
      if (compareFn(array[j], array[j + 1])) {
        swap(arr, j, j + 1)
      }
    }
  }
  return array
}

const arr = [7, 3, 4, 2, 1, 6]

console.log(bubbleSort(arr, compareFn))
