import { getCharactersByName } from "./requests.js"

export function searchCharacter() {
  const input = document.querySelector('#nome')
  const inputGenero = document.querySelector('#genero')
  const button = document.querySelector('.busca__nome')
  const buttonGenero = document.querySelector('.busca__genero')

  button.addEventListener('click', async () => {
    const characters = await getCharactersByName(input.value)
  })

  button.addEventListener('click',async() =>{
    const genero = await getCharactersByGender(input.value)
  } )
}