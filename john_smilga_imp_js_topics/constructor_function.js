function Person(firstName, lastName) {
  this.firstName = firstName
  this.lastName = lastName
  this.fullName = () => {
    console.log(
      `here is details of that person ${this.firstName} ${this.lastName}`
    )
  }
}

const john = new Person('John', 'Smilga')
john.fullName()
