const result = document.querySelector('#result')
const red = document.querySelector('.red')

const para = document.createElement('div')
const text = document.createTextNode('i m here')
para.appendChild(text)
//para.insertBefore(text, result)
console.log(para)
result.insertBefore(para, red)

const smallHeading = document.createElement('h3')
const value = document.createTextNode('some value')
smallHeading.appendChild(value)

result.replaceChild(smallHeading, para)

const newHeading = document.createElement('h2')
newHeading.innerText = 'new text element'
document.body.prepend(newHeading)

const test = result.querySelector('h3')
console.log('test', test)
const removeChild = result.removeChild(red)
console.log('remove', removeChild)

const ul = document.querySelector('ul')
ul.innerHTML = `<li> 
  test
</li>`
ul.textContent = 'some value'

const btn = document.querySelector('.btn')
btn.addEventListener('click', () => {
  ul.classList.add('red')
})
