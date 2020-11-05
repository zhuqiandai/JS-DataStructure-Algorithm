import { defaultEquals, IEqualsFunction } from '../utils'
import { Node } from '../models/linked-list-models'

export default class LinkedList<T> {
  protected count = 0
  protected head: Node<T> | undefined

  constructor(protected equalsFn: IEqualsFunction<T> = defaultEquals) {}

  size() {
    return this.count
  }

  isEmpty() {
    return this.size() === 0
  }

  getHead() {
    return this.head
  }

  getElementAt(index: number) {
    if (index > 0 && index < this.count) {
      let node = this.head
      for (let i = 0; i < index && node !== null; i++) {
        node = node?.next
      }
      return node
    }
    return undefined
  }

  indexOf(element: T) {}

  push(element: T) {
    const node = new Node(element)
    let current

    if (this.head == null) {
      // catches null && undefined
      this.head = node
    } else {
      current = this.head

      while (current.next != null) {
        current = current.next
      }

      current.next = node
    }
    this.count++
  }

  insert(element: T, index: number) {
    if (index >= 0 && index < this.count) {
      const node = new Node(element)

      if (index === 0) {
        const current = this.head
        node.next = current
        this.head = node
      } else {
        const previous = this.getElementAt(index - 1) as Node<T>
        node.next = previous.next
        previous.next = node
      }

      this.count++
      return true
    }
    return false
  }

  remove() {}

  removeAt(index: number) {
    if (index > 0 && index < this.count) {
    }
    return undefined
  }

  clear() {}

  toString() {}
}

const list = new LinkedList()
list.push(1)
list.push(2)
list.push(3)
list.push(4)
list.push(5)
console.log(list)
