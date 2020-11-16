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

export const BalanceFactor = {
  UNBALANCED_RIGHT = 1,
  SLIGHTLY_UNBALANCED_RIGHT = 2,
  BALANCED = 3,
  SLIGHTLY_UNBALANCED_LEFT = 4,
  UNBALANCED_LEFT = 5,
}
