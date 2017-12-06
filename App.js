import React from 'react'
import { StyleSheet, Text, View, StatusBar } from 'react-native'
import { TabNavigator } from 'react-navigation'
import { Constants } from 'expo'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import { MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons'
import DeckList from './components/DeckList'
import NewDeck from './components/NewDeck'

function FlashcardsStatusBar({ backgroundColor, ...props }) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

const Tabs = TabNavigator({
  DeckList: {
    screen: DeckList,
    navigationOptions: {
      tabBarLabel: 'MY DECKS',
      tabBarIcon: () => (
        <MaterialCommunityIcons name="cards-outline" size={30} color="black" />
      )
    }
  },
  NewDeck: {
    screen: NewDeck,
    navigationOptions: {
      tabBarLabel: 'ADD DECK',
      tabBarIcon: () => (
        <FontAwesome name="plus-square-o" size={30} color="black" />
      )
    }
  }
})

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={{ flex: 1 }}>
          <FlashcardsStatusBar
            backgroundColor={'#0980ff'}
            barStyle="light-content"
          />
          <Tabs />
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
