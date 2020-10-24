// 并集 交集 差集 子集

import { Set } from './set.js'

const setA = new Set()
setA.add(1)
setA.add(2)
setA.add(3)

const setB = new Set()
setB.add(2)
setB.add(3)
setB.add(4)
setB.add(5)
setB.add(6)

// union
const union = (setA, setB) => {
  const unionSet = new Set()

  setA.values().forEach((value) => unionSet.add(value))
  setB.values().forEach((value) => unionSet.add(value))

  return unionSet
}

console.log(union(setA, setB).values())

// intersection
const intersection = (setA, setB) => {
  const intersectionSet = new Set()

  // 两次循环有些奇怪
  // setA.values().forEach((item) => {
  //   setB.values().forEach((itemB) => {
  //     if (item === itemB) {
  //       intersectionSet.add(item)
  //     }
  //   })
  // })

  // 使用刚刚写好的has就好啦
  // setB.values().forEach((item) => {
  //   if (setA.has(item)) {
  //     intersectionSet.add(item)
  //   }
  // })

  // 优化一下刚刚的代码！
  // setA 和 setB 那个更短，迭代哪一个更省时哦

  let shortSet = setA
  let longSet = setB

  if (setA.length - setB.length > 0) {
    shortSet = setB
    longSet = setA
  }

  shortSet.values().forEach((item) => {
    if (longSet.has(item)) {
      intersectionSet.add(item)
    }
  })

  return intersectionSet
}

console.log(intersection(setA, setB).values())

// difference
const difference = (setA, setB) => {
  // 这只是B对A的差集
  // setB.values().forEach((item) => {
  //   if (!setA.has(item)) {
  //     differenceSet.add(item)
  //   }
  // })

  // 这才是二者的差集 哈哈哈
  const unionSet = union(setA, setB)
  const intersectionSet = intersection(setA, setB)

  intersectionSet.values().forEach((item) => {
    unionSet.delete(item)
  })

  return unionSet
}

console.log(difference(setA, setB).values())

// 子集
// 判断 setA 是否是 setB 的子集
const isSubsetOf = (setA, setB) => {
  if (setA.length > setB.length) {
    return false
  }

  let isSubset = true
  setA.values().every((item) => {
    if (!setB.has(item)) {
      isSubset = false
      return false
    }
    return true
  })

  return isSubset
}

console.log(isSubsetOf(setA, setB))
