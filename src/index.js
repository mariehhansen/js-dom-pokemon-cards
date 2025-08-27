
const allCards = document.querySelector(".cards")

function onePokemon(aPokemonObject) {

    const newCard = document.createElement('li')
    newCard.classList.add('card')

    // title: name of the pokemon
    const cardTitle = document.createElement('h1')
    cardTitle.classList.add('card--title')
    cardTitle.textContent = aPokemonObject.name.charAt(0).toUpperCase() + aPokemonObject.name.slice(1)

    // image
    const cardImage = document.createElement('img')
    cardImage.classList.add('card--img')
    cardImage.setAttribute('src', aPokemonObject.sprites.other["official-artwork"].front_default)

    // add stats
    const cardStatList = document.createElement('ul')

    for (const stats of aPokemonObject.stats) {
        const statListItem = document.createElement('li')

        statListItem.classList.add('card--text')
        statListItem.textContent = stats.stat.name.toUpperCase() + ": " + stats.base_stat
        cardStatList.appendChild(statListItem)
    }

    // add games
    const cardGameList = document.createElement('ul')

    for (const games of aPokemonObject.game_indices) {
        console.log("HER")
        const gameListItem = document.createElement('li')

        gameListItem.classList.add('card--text')
        gameListItem.textContent = games.version.name.toUpperCase() + ": " + games.game_index
        cardGameList.appendChild(gameListItem)
    }

    // add all the info to the card
    newCard.appendChild(cardTitle)
    newCard.appendChild(cardImage)
    newCard.appendChild(cardStatList)
    newCard.appendChild(cardGameList)

    allCards.appendChild(newCard)

}

// render all cards 
function renderCards(allPokemonObjects) {
    
    allCards.innerHTML = ""

    for (const pokemon of allPokemonObjects) {
        onePokemon(pokemon)
    }
}


function main() {
    renderCards(data)
}

main()