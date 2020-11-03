/**
 * @description:
 * @method: * put
 * @method: * remove
 * @method：* delete
 */

import { defaultToString, ValuePair } from '../Dict/dictionary.js'

export class HashTable {
  constructor(toStrFn = defaultToString) {
    this.table = {}
    this.toStrFn = toStrFn
  }

  loseloseHashCode(key) {
    if (typeof key === 'number') {
      return key
    }

    const tableKey = this.toStrFn(key)
    let hash = 0
    for (let i = 0; i < tableKey.length; i++) {
      hash += tableKey.charCodeAt(i)
    }

    // 这里使用和任意数除法的余数，防止hash数组过大超出范围
    return hash % 37
  }

  hashCode(key) {
    return this.loseloseHashCode(key)
  }

  put(key, value) {
    if (key !== null && value !== null) {
      const position = this.hashCode(key)
      this.table[position] = new ValuePair(key, value)
      return true
    }
    return false
  }

  // delete
  remove(key) {
    const hash = this.hashCode(key)
    const valuePair = this.table[hash]
    if (valuePair !== null) {
      delete this.table[hash]
      return true
    }
    return false
  }

  get(key) {
    const valuePair = this.table[this.hashCode(key)]
    return valuePair === null ? undefined : valuePair.value
  }
}
