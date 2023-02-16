export async function getAllCharacters(){
    const characters = await fetch(`https://rickandmortyapi.com/api/character`, {
        method: 'GET',
        headers: {
            "Content-Type": 'application/json'
        }
    })
    .then((response) =>{
        if(response.ok){
            return response.json()
        }else{
            console.log('Erro na requisição, por favor verfique as informações tente novamente')
        }
    })
    return characters

    }

    export async function getCharactersByName(characterName){
        const characters = await fetch(`https://rickandmortyapi.com/api/character/?name=${characterName}`, {
            method: 'GET',
            'Content-Type' : 'application/json'
        })
        .then(response => response.json())
        .then(data =>{
            if(data.count !==0){
                window.location.replace('src/pages/characters.html')

            }  else{
                window.location.replace('src/pages/error.html')
            }         
        })
        return characters
    }

   