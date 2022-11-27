let color = document.querySelector('.color')
let price = document.querySelector('.price')
let buttons = document.querySelectorAll('.btn')
let img = document.querySelector('.macbook-img')

let btns = document.querySelectorAll('.btn-img')
let white = document.querySelector('#modal_white')
let grey = document.querySelector('#modal_grey')

for (let item of btns) {
   item.onclick = () => {
      btns.forEach(elem => elem.classList.remove('active'))

      if (item.getAttribute('id') === 'modal_grey') {
         img.setAttribute('src', './img/Supercharged/grey.svg')
         color.innerHTML = 'Space Grey'
      } else {
         img.setAttribute('src', './img/Supercharged/white.svg')
         color.innerHTML = 'white'
      }

      item.classList.add('active')
   }
}

let a = 1999
price.innerHTML = `$${a}`

for (let item of buttons) {
   item.onclick = () => {
      buttons.forEach(elem => elem.classList.remove('active2'))
      item.classList.add('active2')

      if (item.getAttribute('data-price') === '512_gb') price.innerHTML = `$${a}`;
      if (item.getAttribute('data-price') === '1_tb') price.innerHTML = `$${a + 200}`;
      if (item.getAttribute('data-price') === '2_tb') price.innerHTML = `$${a + 600}`;
      if (item.getAttribute('data-price') === '4_tb') price.innerHTML = `$${a + 1200}`;
   }
}
   