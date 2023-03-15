const john = {
  name: 'Ankit',
  age: 28,
  profession: 'developer',
}

// const newKeys = Object.keys(john)
// console.log(newKeys)

// const newValues = Object.values(john)
// console.log(newValues)

const newEntries = Object.entries(john)
console.log(newEntries)

const items = newEntries.map((entry) => {
  const [first, second] = entry
  return first
})

console.log(items)
