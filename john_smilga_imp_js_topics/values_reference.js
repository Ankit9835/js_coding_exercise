// primitive data type (SNNUBO) which is not affected the original value while overwrite it but non-primitive data type(objects,functions) are affected while overwrite the value

let arr = 20
let arr1 = arr
arr1 = 30

console.log(`value of first is ${arr}`)
console.log(`value of second is ${arr1}`)

let obj1 = { name: 'bob' }
let obj2 = { ...obj1 }
obj2.name = 'susy'

console.log(`value of first is ${obj1.name}`)
console.log(`value of second is ${obj2.name}`)
