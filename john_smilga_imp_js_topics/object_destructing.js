const john = {
  name: 'john',
  age: 28,
  siblings: {
    sister: 'anna',
  },
}

const {
  name,
  age,
  siblings: { sister: favSister },
} = john
console.log(name, age, favSister)
