const barbtn = document.getElementById('bar')
const hamburgerNav = document.getElementById('hamburger')

barbtn.addEventListener('click', () => {
  if (hamburgerNav.style.display === 'flex') {
    hamburgerNav.style.display = 'none'
  } else {
    hamburgerNav.style.display = 'flex'
  }
})