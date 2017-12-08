import { AsyncStorage } from 'react-native'

const DECK_STORAGE_KEY = 'DeckStorageKey'

export function getDecks() {
  return AsyncStorage.getItem(DECK_STORAGE_KEY).then(results => {
    if (!results) return null
    return JSON.parse(results)
  })
}

export function getDeck(id) {}

export function saveDeckTitle(title) {
  return AsyncStorage.mergeItem(
    DECK_STORAGE_KEY,
    JSON.stringify({
      [title]: {
        title: title,
        questions: []
      }
    })
  )
}

export function addCardToDeck(deckTitle, card) {
  AsyncStorage.getItem(DECK_STORAGE_KEY)
    .then(result => JSON.parse(result))
    .then(json => {
      const questions = json[deckTitle].questions
      questions.push(card)
      AsyncStorage.mergeItem(
        DECK_STORAGE_KEY,
        JSON.stringify({
          [deckTitle]: {
            title: deckTitle,
            questions: questions
          }
        })
      )
    })
}
