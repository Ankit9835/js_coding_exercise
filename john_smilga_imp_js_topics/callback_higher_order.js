function morning(name) {
  return `Good morning ${name.toUpperCase()}`
}

function greet(name, cb) {
  const myName = 'john'
  console.log(`${cb(name)} my name is ${myName}`)
}

greet('Ankit', morning)
