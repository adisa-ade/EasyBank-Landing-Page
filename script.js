const main = document.querySelector('.container')
const body = document.querySelector('body')
const openLabel = document.querySelector('.open')
const closeLabel = document.querySelector('.close')
const img1 = document.querySelector('#img1')
const img2 = document.querySelector('#img2')
const nav = document.querySelector('.nav')

openLabel.addEventListener('click', () => {
    body.style.overflow = 'hidden'
    openLabel.style.display = 'none'
    closeLabel.style.display = 'block'
    nav.style.display = 'block'
    img2.style.display = 'none'
    main.style.background = 'linear-gradient(100deg, #fafafa, #9698a6)'
})
closeLabel.addEventListener('click', () => {
    body.style.overflow = 'auto'
    openLabel.style.display = 'block'
    closeLabel.style.display = 'none'
    nav.style.display = 'none'
    img2.style.display = 'block'
    main.style.background = '#fafafa'
})