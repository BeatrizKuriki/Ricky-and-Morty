import { render } from "./render.js"


function showDashboard() {
  const personagens = JSON.parse(localStorage.getItem('personagens'))

  render(false, personagens)
  
}

function handleNewSearch() {
  const button = document.querySelector('.voltar')

  button.addEventListener('click', () => {    
    window.location.replace('../pages/search.html')
  })
}
showDashboard()
handleNewSearch()
