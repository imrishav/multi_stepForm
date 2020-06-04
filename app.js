console.log('hellow')
const next1 = document.querySelector('.next-1')
const next2 = document.querySelector('.next-2')
const next3 = document.querySelector('.next-3')

const back1 = document.querySelector('.back-1')
const back2 = document.querySelector('.back-2')
const back3 = document.querySelector('.back-3')

const step1 = document.querySelector('.step-1')
const step2 = document.querySelector('.step-2')
const step3 = document.querySelector('.step-3')
const step4 = document.querySelector('.step-4')

const progress = document.querySelector('.progress')
const info = document.querySelector('.infobox')

const submit = document.querySelector('.submit')

next1.addEventListener('click', function () {
  step1.classList.remove('active')
  step2.classList.add('active')
  progress.style.width = '25vw'
})

next2.addEventListener('click', function () {
  step2.classList.remove('active')
  step3.classList.add('active')
  progress.style.width = '50vw'
})

next3.addEventListener('click', function () {
  step3.classList.remove('active')
  step4.classList.add('active')
  progress.style.width = '75vw'
})

submit.addEventListener('click', function () {
  progress.style.width = '100vw'
  info.style.top = '1rem'
})

back1.addEventListener('click', function () {
  step2.classList.remove('active')
  step1.classList.add('active')
  progress.style.width = '0vw'
})

back2.addEventListener('click', function () {
  step3.classList.remove('active')
  step2.classList.add('active')
  progress.style.width = '25vw'
})

back3.addEventListener('click', function () {
  step4.classList.remove('active')
  step3.classList.add('active')
  progress.style.width = '50vw'
  info.style.top = '-10rem'
})
