import { HashTable } from './hashtable.js'

const hashtable = new HashTable()

hashtable.put('John', 'Lake Thomas')
hashtable.put('Tyrion', 'Naderport')
hashtable.put('Nikolaus', 'Destiney')

console.log(hashtable.hashCode('John'))

console.log(hashtable.get('Nikolaus'))
