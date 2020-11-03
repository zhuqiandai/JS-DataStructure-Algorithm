export function compareFn(a, b) {
  if (a > b) return true
  if (a <= b) return false
}

export function swap(array, a, b) {
  ;[array[a], array[b]] = [array[b], array[a]]
}
