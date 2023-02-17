
import {  getAllCharacters } from "./request.js";

export async function render(first, array = []) {
  const list = document.querySelector('.list')

  list.innerHTML = ''

  if(first) {
    const allCharacters = await getAllCharacters()   

    allCharacters.results.forEach(element => {
      const card = createCard(element)
  
      list.appendChild(card)
    });
  } else {
    array.forEach(element => {
      const card = createCard(element)
  
      list.appendChild(card)
    });
  }

}

function createCard(element) {
  const cardContainer = document.createElement('li')
  const cardFigure = document.createElement('figure')
  const cardImage = document.createElement('img')
  const cardName = document.createElement('figcaption')
  const cardStatus = document.createElement('p')
  const cardGender = document.createElement('p')
  const cardSpecie = document.createElement('p')

  cardImage.src = element.image
  cardImage.alt = element.name

  cardName.innerText = element.name
  cardStatus.innerText = `Status: ${element.status}`
  cardGender.innerText = `Gender: ${element.gender}`
  cardSpecie.innerText = `Specie: ${element.species}`

  cardFigure.append(cardImage, cardName, cardStatus, cardGender, cardSpecie)

  cardContainer.appendChild(cardFigure)

  return cardContainer

}

// function showModal(){
  
// }