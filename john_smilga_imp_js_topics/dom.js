// let result = document.querySelector('#result')
// const children = result.childNodes // childNodes is capturing white spaces also
// //console.log(children)
// const newChildren = result.children
// console.log(newChildren)

// const parentElement = result.parentElement
// parentElement.style.background = 'red'
// console.log(parentElement)

// const element = document.querySelector('.first')
// //const sibling = element.nextSibling.nextSibling
// const sibling = element.nextElementSibling
// console.log(sibling)

// const lelement = document.querySelector('#last')
// //const lsibling = lelement.previousSibling.previousSibling
// const lsibling = lelement.previousElementSibling
// console.log(lsibling)

// const element = document.querySelector('.special')
// const sibling = element.nextElementSibling.textContent
// console.log(sibling)

// const element = document.querySelector('.special')
// const newElement = element.getAttribute('class')
// console.log(newElement)

const firstElement = document.querySelector('#first')
const secondElement = document.querySelector('#second')
const thirdElement = document.querySelector('#third')

firstElement.classList.add('colors')
secondElement.classList.add('colors', 'text')
secondElement.classList.remove('text')
const result = secondElement.classList.contains('colors')

if (result) {
  console.log('test')
} else {
  console.log('new test')
}
