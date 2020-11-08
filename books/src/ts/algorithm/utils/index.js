export const arr = [2062, 90410, 71989, 30824, 47870, 11472, 15049, 96799, 65359]

// const COMPARE = {
//   BIGGER_THAN: 1,
//   LESS_THAN: -1,
//   EQUAL: 0,
// }

// export function compareFn(array, a, b) {
//   if (array[a] > array[b]) return COMPARE.BIGGER_THAN
//   if (array[a] < array[b]) return COMPARE.LESS_THAN
// }

// export function swap(array, a, b) {
//   ;[array[a], array[b]] = [array[b], array[a]]
// }

// export function findMaxMinValue(arr) {
//   let max = arr[0]
//   let min = arr[0]

//   arr.forEach((item) => {
//     if (item > max) {
//       max = item
//     }
//     if (item < min) {
//       min = item
//     }
//   })
//   return {
//     max,
//     min,
//   }
// }

export const Compare = {
  LESS_THAN: -1,
  BIGGER_THAN: 1,
  EQUALS: 0,
}

export const DOES_NOT_EXIST = -1

export function lesserEquals(a, b, compareFn) {
  const comp = compareFn(a, b)
  return comp === Compare.LESS_THAN || comp === Compare.EQUALS
}

export function biggerEquals(a, b, compareFn) {
  const comp = compareFn(a, b)
  return comp === Compare.BIGGER_THAN || comp === Compare.EQUALS
}

export function defaultCompare(a, b) {
  if (a === b) {
    return Compare.EQUALS
  }
  return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN
}

export function defaultEquals(a, b) {
  return a === b
}

export function defaultToString(item) {
  if (item === null) {
    return 'NULL'
  } else if (item === undefined) {
    return 'UNDEFINED'
  } else if (typeof item === 'string' || item instanceof String) {
    return `${item}`
  }
  return item.toString()
}

export function swap(array, a, b) {
  /* const temp = array[a];
  array[a] = array[b];
  array[b] = temp; */
  ;[array[a], array[b]] = [array[b], array[a]]
}
export function reverseCompare(compareFn) {
  return (a, b) => compareFn(b, a)
}

export function defaultDiff(a, b) {
  return Number(a) - Number(b)
}
