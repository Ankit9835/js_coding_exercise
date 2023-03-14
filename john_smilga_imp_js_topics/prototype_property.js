function Account(name, initialBalance) {
  this.name = name
  this.balance = initialBalance
}

const john = new Account('ankit', 200)

Account.prototype.bank = 'yes'
Account.prototype.deposit = function (amount) {
  this.balance += amount
  console.log(`hello ${this.name} your balance is ${this.balance}`)
}

john.deposit(300)
