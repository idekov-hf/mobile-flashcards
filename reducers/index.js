import { ADD_DECKS, ADD_DECK, ADD_CARD } from '../actions'

function decks(state = {}, action) {
  switch (action.type) {
    case ADD_DECKS:
      return {
        ...action.decks
      }
    case ADD_DECK:
      const { title } = action
      return {
        ...state,
        [title]: {
          title: `${title}`,
          questions: []
        }
      }
    case ADD_CARD:
      const { deckTitle, card } = action
      return {
        ...state,
        [deckTitle]: {
          ...state[deckTitle],
          questions: [...state[deckTitle].questions, card]
        }
      }
    default:
      return state
  }
}

export default decks
