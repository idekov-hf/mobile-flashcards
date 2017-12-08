export const ADD_DECK = 'ADD_DECK'
export function addDeck(title) {
  return {
    type: ADD_DECK,
    title
  }
}

export const ADD_DECKS = 'ADD_DECKS'
export function addDecks(decks) {
  return {
    type: ADD_DECKS,
    decks
  }
}

export const ADD_CARD = 'ADD_CARD'
export function addCard(deckTitle, card) {
  return {
    type: ADD_CARD,
    deckTitle,
    card
  }
}
