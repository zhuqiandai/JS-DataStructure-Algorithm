import { defaultCompare, Compare } from '../util.js'
import { TreeNode } from './TreeNode.js'

export class BinarySearchTree {
  constructor(compareFn = defaultCompare) {
    this.compareFn = compareFn
    this.root = null
  }

  insert(key) {
    if (this.root === null) {
      this.root = new TreeNode(key)
    } else {
      this.insertNode(this.root, key)
    }
  }

  /**
   *
   * @param {*} node : root
   * @param {*} key ： 插入的节点的值
   */
  insertNode(node, key) {
    if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
      if (node.left == null) {
        node.left = new TreeNode(key)
      } else {
        this.insertNode(node.left, key)
      }
    } else {
      if (node.right == null) {
        node.right = new TreeNode(key)
      } else {
        this.insertNode(node.right, key)
      }
    }
  }

  /**
   *  中序遍历
   *  就是左右遍历，使用callback捕获当前值
   */
  inOrderTraverse(callback) {
    this.inOrderTRaverseNode(this.root, callback)
  }

  inOrderTRaverseNode(node, callback) {
    if (node != null) {
      this.inOrderTRaverseNode(node.left, callback)
      callback(node.key)
      this.inOrderTRaverseNode(node.right, callback)
    }
  }

  min() {
    return this.minNode(this.root)
  }

  minNode(root) {
    let current = root
    while (current !== null && current.left !== null) {
      current = current.left
    }

    return current
  }

  max() {
    return this.maxNode(this.root)
  }

  maxNode(root) {
    let current = root
    while (current !== null && current.right !== null) {
      current = current.right
    }

    return current
  }

  search(key) {
    return this.searchNode(this.root, key)
  }

  searchNode(root, key) {
    if (root === null) {
      return false
    }

    if (this.compareFn(key, root.key) === Compare.LESS_THAN) {
      return this.searchNode(root.left, key)
    } else if (this.compareFn(key, root.key) === Compare.BIGGER_THAN) {
      return this.searchNode(root.right, key)
    } else {
      return true
    }
  }

  remove(key) {
    return this.removeNode(this.root, key)
  }

  /**
   *
   * @param {*} root
   * @param {*} key
   *
   * @description: 先search，再移除
   *  1. 没有左右子节点的情况
   *  2. 有一侧节点
   *  3. 两侧都有节点
   */
  removeNode(node, key) {
    if (node === null) {
      return false
    }
    // 找到节点
    if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
      const node = this.removeNode(node.left, key)
      return node
    } else if (this.compareFn(key, node.key) === Compare.BIGGER_THAN) {
      const node = this.removeNode(node.right, key)
      return node
    } else {
      // 第一种情况
      if (node.left === null && node.right === null) {
        node = null
        return node
      }

      // 第二种情况
      if (node.left === null) {
        node = node.right
        return node
      } else if (node.right === null) {
        node = node.left
        return node
      }

      // 第三种情况
      const aux = this.minNode(node.right)
      node.key = aux.key
      node.right = this.removeNode(node.right, aux.key)
      return node
    }
  }
}
