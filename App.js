import React from 'react'
import { StyleSheet, Text, View, StatusBar } from 'react-native'
import { TabNavigator, StackNavigator } from 'react-navigation'
import { Constants } from 'expo'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import { MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons'
import DeckList from './components/DeckList'
import NewDeck from './components/NewDeck'
import IndividualDeck from './components/IndividualDeck'
import { blue } from './utils/colors'

function FlashcardsStatusBar({ backgroundColor, ...props }) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

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

const Stack = StackNavigator({
  Home: {
    screen: Tabs,
    navigationOptions: {
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: blue
      }
    }
  },
  IndividualDeck: {
    screen: IndividualDeck,
    navigationOptions: {
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: blue
      }
    }
  }
})

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={{ flex: 1 }}>
          <FlashcardsStatusBar
            backgroundColor={blue}
            barStyle="light-content"
          />
          <Stack />
        </View>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
