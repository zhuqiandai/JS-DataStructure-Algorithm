// 迭代数组， 从最后一位和前面随机位置交换

import { swap, arr } from './util.js'

function fisheryates(array) {
  const { length } = array
  for (let i = length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1))
    swap(array, i, randomIndex)
  }
}

console.log(fisheryates(arr))
