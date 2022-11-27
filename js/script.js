let start = document.querySelector('.start')
let back = document.querySelector('.back')
let reset = document.querySelector('.reset')
let number = document.querySelector('.number')

let counter = 0
number.innerHTML = counter

let startitv
let backtitv

start.onclick = () => {
   clearInterval(backtitv)
   clearInterval(startitv)
   startitv = setInterval(() => {
      counter++
      number.innerHTML = counter
   }, 1000)

   reset.onclick = () => {
      clearInterval(startitv)
      clearInterval(backtitv)
      counter = 0
      number.innerHTML = counter
   }
}

back.onclick = () => {
   clearInterval(startitv)
   clearInterval(backtitv)
   backtitv = setInterval(() => {
      counter--
      number.innerHTML = counter
   }, 1000)

   reset.onclick = () => {
      clearInterval(startitv)
      clearInterval(backtitv)
      counter = 0
      number.innerHTML = counter
   }
}