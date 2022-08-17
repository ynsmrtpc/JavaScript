const $ = (id) => document.getElementById(id)
const myName = $('myName')
const myClock = $('myClock')
const name = prompt('Adınızı girin')
const days = [
  'Pazar',
  'Pazartesi',
  'Salı',
  'Çarşamba',
  'Perşembe',
  'Cuma',
  'Cumartesi',
]
myName.innerHTML = name.toUpperCase()

setInterval(() => {
  const date = new Date()
  myClock.innerHTML = date.toLocaleTimeString() + ' ' + days[date.getDay()]
}, 1000)
