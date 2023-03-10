// it returns a first value from filtering the data

const people = [
  { name: 'bob', age: 20, position: 'developer' },
  { name: 'peter', age: 25, position: 'designer' },
  { name: 'susy', age: 30, position: 'the boss' },
  { name: 'anna', age: 35, position: 'the boss' },
]

const find = people.find((prsn) => {
  return prsn.age >= 25
})

console.log(find)
