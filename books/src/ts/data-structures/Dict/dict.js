import { Dictionary } from './dictionary.js'

const dictionary = new Dictionary()

dictionary.set('John', 'Lake Thomas')
dictionary.set('Tyrion', 'Naderport')
dictionary.set('Nikolaus', 'Destiney')

console.log(dictionary.haskey('John'))

console.log(dictionary.size())

console.log(dictionary.keys())
console.log(dictionary.values())
console.log(dictionary.keyValues())
