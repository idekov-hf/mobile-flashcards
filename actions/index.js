import { ADD_DECK, ADD_DECKS, ADD_CARD } from './types'

export function addDeck(title) {
  return {
    type: ADD_DECK,
    title
  }
}

export function addDecks(decks) {
  return {
    type: ADD_DECKS,
    decks
  }
}

export function addCard(deckTitle, card) {
  return {
    type: ADD_CARD,
    deckTitle,
    card
  }
}
