import { render } from "./render.js"


function showDashboard() {
  const characters = JSON.parse(localStorage.getItem('personagens'))

  render(false, characters.data)
}

function handleNewSearch() {
  const button = document.querySelector('.voltar')

  button.addEventListener('click', () => {
    window.location.replace('/')
  })
}
showDashboard()
handleNewSearch()
