const arr1 = [1, 2, 3, 4, 5]
const arr2 = [3, 4, 5, 6, 7]
// union
console.log(new Set([...arr1, ...arr2]))

// insection
const set1 = new Set(arr1)
const set2 = new Set(arr2)
console.log(new Set([...set1].filter((item) => set2.has(item))))

// difference
console.log(new Set([...set1].filter((item) => !set2.has(item))))
