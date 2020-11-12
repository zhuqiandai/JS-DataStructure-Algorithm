export const Compare = {
  BIGGER_THAN: 1,
  LESS_THAN: -1,
  EQUAL: 0,
}
export const arr = [2062, 90410, 71989, 30824, 47870, 11472, 15049, 96799, 65359]

export function defaultCompare(a, b) {
  if (a === b) {
    return Compare.EQUAL
  }
  return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN
}

export function lessEquals(a, b, compareFn) {
  const comp = compareFn(a, b)
  return comp === Compare.LESS_THAN || comp === Compare.EQUALS
}

export function biggerEquals(a, b, compareFn) {
  const comp = compareFn(a, b)
  return comp === Compare.BIGGER_THAN || comp === Compare.EQUALS
}

export function defaultEquals(a, b) {
  return a === b
}

export function lesserOrEquals(a, b, compareFn) {
  const comp = compareFn(a, b)
  return comp === Compare.LESS_THAN || Compare.EQUAL
}

export function swap(array, a, b) {
  ;[array[a], array[b]] = [array[b], array[a]]
}

export function findMaxValue(array) {
  let max = array[0]

  array.forEach((item) => {
    if (item > max) {
      max = item
    }
  })

  return max
}
