// const result = document.querySelector('#result')
// const red = document.querySelector('.red')
// const inputValue = document.getElementById('input')

// const para = document.createElement('div')
// const text = document.createTextNode('i m here')
// para.appendChild(text)
// //para.insertBefore(text, result)
// console.log(para)
// result.insertBefore(para, red)

// const smallHeading = document.createElement('h3')
// const value = document.createTextNode('some value')
// smallHeading.appendChild(value)

// result.replaceChild(smallHeading, para)

// const newHeading = document.createElement('h2')
// newHeading.innerText = 'new text element'
// document.body.prepend(newHeading)

// const test = result.querySelector('h3')
// console.log('test', test)
// const removeChild = result.removeChild(red)
// console.log('remove', removeChild)

// const ul = document.querySelector('ul')
// ul.innerHTML = `<li>
//   test
// </li>`
// ul.textContent = 'some value'

// const btn = document.querySelector('.btn')
// btn.addEventListener('click', () => {
//   ul.classList.add('red')
// })

// red.addEventListener('mousedown', () => {
//   console.log('you clicked me')
// })

// red.addEventListener('mouseup', () => {
//   console.log('button released')
// })

// red.addEventListener('mouseenter', () => {
//   red.style.backgroundColor = 'blue'
// })

// red.addEventListener('mouseleave', () => {
//   red.style.backgroundColor = ''
// })

// inputValue.addEventListener('keypress', () => {
//   console.log('you pressed a key')
// })

// inputValue.addEventListener('keydown', () => {
//   console.log('you pressed a key')
// })

// inputValue.addEventListener('keyup', () => {
//   console.log(inputValue.value)
// })

// red.addEventListener('click', (e) => {
//   e.currentTarget.classList.add('colors')
// })

// const btns = document.querySelectorAll('.btn')
// btns.forEach((btn) => {
//   console.log(btn)
//   btn.addEventListener('click', (e) => {
//     // console.log('current target', e.currentTarget)
//     console.log('target', e.target)
//   })
// })

const container = document.querySelector('.container')
const listItem = document.querySelector('.list-items')

function showBubbling(e) {
  console.log('current target', e.currentTarget)
  console.log('target', e.target)
}

function stop(e) {
  console.log('you clicked me')
  e.stopPropagation()
}

listItem.addEventListener('click', stop)
container.addEventListener('click', showBubbling)
