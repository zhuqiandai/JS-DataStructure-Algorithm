export class Set {
  items
  constructor() {
    this.items = {}
  }
  add(element) {
    if (!this.has(element)) {
      this.items[element] = element
      return true
    }
    return false
  }

  delete(element) {
    if (this.has(element)) {
      delete this.items[element]
      return true
    }
    return false
  }

  has(element) {
    // return element in items //验证是不是元素的属性

    // 等于想判断  this.items.hasOwnPorperty(element)，
    // 但是this指向不同先使用call改变this指向，call返回this.items的this的值
    return Object.prototype.hasOwnProperty.call(this.items, element)
  }

  clear() {
    this.items = {}
  }

  size() {
    return Object.keys(this.items).length
  }

  values() {
    return Object.values(this.items)
  }
}
