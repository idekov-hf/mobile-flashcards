import { ADD_DECK, ADD_CARD } from '../actions'
import { testData } from '../utils/testData'

function decks(state = testData, action) {
  switch (action.type) {
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
