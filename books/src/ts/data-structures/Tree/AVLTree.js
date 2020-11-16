import { BinarySearchTree } from './tree.js'
import { BalanceFactor } from './util.js'

/**
 * 节点高度
 * 平衡因子
 */
class AVLTree extends BinarySearchTree {
  getNodeHetight(node) {
    if (!node) {
      return null
    }
    return Math.max(this.getNodeHetight(node.left), this.getNodeHetight(node.rigth)) + 1
  }

  getBalanceFactor(node) {
    const heightDifference = (this.getNodeHetight(node.left) = this.getNodeHetight(node.rigth))
    switch (heightDifference) {
      case -2:
        return BalanceFactor.UNBALANCED_RIGHT
      case -1:
        return BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT
      case 1:
        return BalanceFactor.SLIGHTLY_UNBALANCED_LEFT
      case 2:
        return BalanceFactor.UNBALANCED_LEFT
      default:
        return BalanceFactor.BALANCED
    }
  }

  rotationLL(node) {
    const tmp = node.left
    node.left = tmp.rigth
    tmp.rigth = node
    return tmp
  }

  rotationRR(node) {
    const tmp = node.rigth
    node.rigth = tmp.left
    tmp.left = node
    return tmp
  }

  // 左侧高度比右侧高，左侧子节点的右侧较重
  rotationLR(node) {
    node.left = this.rotationRR(node.left)
    return this.rotationLL(node.left)
  }
}

const avlTree = new AVLTree()

avlTree.insert(1)
avlTree.insert(2)
avlTree.insert(3)

console.log(avlTree)
