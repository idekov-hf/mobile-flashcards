import React from 'react'
import { TabNavigator, StackNavigator } from 'react-navigation'
import { MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons'
import DeckList from './components/DeckList'
import NewDeck from './components/NewDeck'
import IndividualDeck from './components/IndividualDeck'
import NewCard from './components/NewCard'
import Quiz from './components/Quiz'
import Score from './components/Score'
import { blue } from './utils/colors'

const Tabs = TabNavigator(
  {
    DeckList: {
      screen: DeckList,
      navigationOptions: {
        headerTitle: 'All Decks',
        tabBarLabel: 'MY DECKS',
        tabBarIcon: ({ tintColor }) => (
          <MaterialCommunityIcons
            name="cards-outline"
            size={30}
            color={tintColor}
          />
        )
      }
    },
    NewDeck: {
      screen: NewDeck,
      navigationOptions: {
        headerTitle: 'Add New Deck',
        tabBarLabel: 'ADD DECK',
        tabBarIcon: ({ tintColor }) => (
          <FontAwesome name="plus-square-o" size={30} color={tintColor} />
        )
      }
    }
  },
  {
    animationEnabled: true,
    swipeEnabled: true,
    tabBarOptions: {
      activeTintColor: blue
    }
  }
)

const stackNavigationOptions = {
  headerTintColor: 'white',
  headerStyle: {
    backgroundColor: blue
  }
}

export default (Stack = StackNavigator({
  Home: {
    screen: Tabs,
    navigationOptions: stackNavigationOptions
  },
  IndividualDeck: {
    screen: IndividualDeck,
    navigationOptions: stackNavigationOptions
  },
  NewCard: {
    screen: NewCard,
    navigationOptions: {
      ...stackNavigationOptions,
      headerTitle: 'Add New Card'
    }
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: stackNavigationOptions
  },
  Score: {
    screen: Score,
    navigationOptions: {
      ...stackNavigationOptions,
      headerTitle: 'Quiz Results'
    }
  }
}))
