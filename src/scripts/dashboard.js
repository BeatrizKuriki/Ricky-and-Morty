import { render } from "./render.js"


function showDashboard() {
  const characters = JSON.parse(localStorage.getItem('personagens'))

  render(false, characters.results)
}

function handleNewSearch() {
  const button = document.querySelector('.busca__nome')

  button.addEventListener('click', () => {
    window.location.replace('/')
  })
}
showDashboard()
handleNewSearch()
