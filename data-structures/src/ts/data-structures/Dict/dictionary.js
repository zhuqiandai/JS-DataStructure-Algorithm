export class Dictionary {
  table
  toStrFn

  constructor(toStrFn = defaultToString) {
    this.table = {}
    this.toStrFn = toStrFn
  }

  set(key, value) {
    if (key !== null && value !== null) {
      const tableKey = this.toStrFn(key)
      this.table[tableKey] = new ValuePair(key, value)
      return true
    }
    return false
  }

  remove(key) {
    if (this.haskey) {
      delete this.table[this.toStrFn(key)]
      return true
    }
    return false
  }

  haskey(key) {
    return this.table[this.toStrFn(key)] != null
  }

  get(key) {
    const valuePair = this.table[this.toStrFn(key)]
    return valuePair === null ? undefined : valuePair
  }
  clear() {
    this.table = {}
  }
  size() {
    return Object.keys(this.keyValues()).length
  }
  isEmpty() {
    return this.size() === 0
  }
  keys() {
    return this.keyValues().map((valuePair) => valuePair.key)
  }
  values() {
    return this.keyValues().map((valuePair) => valuePair.value)
  }
  keyValues() {
    return Object.values(this.table)
  }
  forEach(callbackFn) {
    const valuePair = this.keyValues()

    for (let i = 0; i < valuePair.length; i++) {
      const result = callbackFn(valuePair[i].key, valuePair[i].value)
      if (result === false) {
        break
      }
    }
  }
  toStirng() {
    if (this.isEmpty()) {
      return ''
    }

    const valuePairs = this.keyValues()

    let objString = `${valuePairs[0].toStirng}`
    for (let i = 1; i < valuePairs.length; i++) {
      objString = `${objString}, ${valuePairs[i].toStirng()}`
    }

    return objString
  }
}

export class ValuePair {
  constructor(key, value) {
    this.key = key
    this.value = value
  }

  toStirng() {
    return `[#${this.key}: ${this.value}]`
  }
}

export function defaultToString(item) {
  if (item === null) {
    return 'NULL'
  } else if (item === undefined) {
    return 'UNDEFINED'
  } else if (typeof item === String || item instanceof String) {
    return `${item}`
  }
  return item.toString()
}
