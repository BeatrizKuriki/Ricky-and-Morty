import { getCharactersByName } from "./request.js"

export function searchCharacter() {
  const input = document.querySelector('#nome') 
  const button = document.querySelector('.busca__nome')
  

  button.addEventListener('click', async (event) => {
    event.preventDefault()
    const characters = await getCharactersByName(input.value)
  })

}
