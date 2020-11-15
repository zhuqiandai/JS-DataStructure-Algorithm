import { defaultCompare, Compare } from '../util'
import { TreeNode } from './TreeNode'

export class BinarySearchTree {
  constructor(compareFn = defaultCompare) {
    this.compareFn = compareFn
    this.root = null
  }

  insert(node, key) {
    if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
      if (node.left === null) {
        node.left = new Node(key)
      } else {
        this.insert(node.left, key)
      }
    } else {
      if (node.right === null) {
        node.right = new Node(key)
      } else {
        this.insert(node.right, key)
      }
    }
  }
}
