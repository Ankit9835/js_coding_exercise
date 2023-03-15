// const friends = Array.of('john', true, 2)
// console.log(friends)
const udemy = 'udemy'
console.log(Array.from(udemy))

function count() {
  let total = Array.from(arguments).map((nu) => nu)
  console.log(total)
}

count(30, 40)
