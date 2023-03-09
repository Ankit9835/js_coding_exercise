// is given value array or not

// let arr1 = [2, 4, 5]
// console.log(toString.call(arr1))
// if (toString.call(arr1) === '[object Array]') {
//   console.log(true)
// } else {
//   console.log(false)
// }

// remove duplicate value from an array

// let arr = [1, 2, 3, 4, 5, 3, 5]
// let uarr = arr.filter((v, i) => {
//   return arr.indexOf(v) === i
// })

// let es = [...new Set(arr)]

// console.log(uarr)
// console.log('es', es)

// remove null,zero,undefined,nan etc

// let arr = [0, '', 'Hi', false, true, 'test']

// let new_array = arr.filter((v, i) => {
//   return v
// })

// console.log(new_array)

// find a factorial number

// n = parseInt(prompt('enter a number'))
// factorial = 1

// for (; n >= 1; n--) {
//   factorial = factorial * n
// }

// console.log(`factorial ` + factorial)

// is number a prime or not?

n = parseInt(prompt('enter a number'))
isPrime = true
for (let cnt = 2; cnt < n; cnt++) {
  if (n % cnt == 0) {
    isPrime = false
    break
  }
}

if (isPrime === true) {
  console.log(`${n} is a prime number`)
}
if (isPrime === false) {
  console.log(`${n} is not a prime number`)
}
if (isPrime === '') {
  console.log('something went wrong')
}
