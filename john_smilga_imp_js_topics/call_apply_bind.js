const john = {
  name: 'john',
  age: 24,
}

const lisha = {
  name: 'lisha',
  age: 20,
}

function greet(city) {
  console.log(this)
  console.log(
    `hello i am ${this.name} and i am ${this.age} old lives in ${city}`
  )
}

greet.call(john, 'LA') // list of items
greet.apply(lisha, ['Florida']) // array of items
const lishu = greet.bind(lisha, 'New York')
lishu()
