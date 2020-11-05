/**
 * @description: 排序中的问题
 */
const number: number[] = []
for (let i = 1; i <= 20; i++) {
  number.push(i)
}
number.reverse()
function compare(a, b) {
  if (a > b) return 1
  if (a < b) return -1
  return 0
}
number.sort(compare)
console.log(number)

console.log('4' > '10')

// 这里find的回调函数参数需要有返回值
console.log(
  number.find((item) => {
    return item < 3
  })
)

// includes(item, index)  从index开始搜索
console.log(number.includes(10, 11))

function isEven(x) {
  return x % 2 === 0 ? true : false
}
console.log(number.every(isEven))
console.log(number.some(isEven))

//  n --> item
for (const n of number) {
  console.log(n, 'for of')
}

//  n --> index
for (const n in number) {
  console.log(n, 'for in')
}

// 输出成字符串
console.log(number.toString(), 'toString')
console.log(number.join('-,.'), 'join')

interface Person {
  name: string
  age: number
}
const friends = [
  {
    name: 'John',
    age: 30,
  },
  {
    name: 'Ana',
    age: 20,
  },
  {
    name: 'Chris',
    age: 25,
  },
]
function comparePerson(a: Person, b: Person) {
  //  compare
}
