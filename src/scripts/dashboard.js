import { render } from "./render.js"


function showDashboard() {
  const characters = JSON.parse(localStorage.getItem('searchCharacters'))

  render(false, characters.data)
}



showDashboard()
