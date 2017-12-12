import React from 'react'
import { StyleSheet, Text, View, StatusBar } from 'react-native'
import { Constants } from 'expo'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import Stack from './Navigators'
import { setLocalNotification } from './utils/helpers'
import { blue } from './utils/colors'

function FlashcardsStatusBar({ backgroundColor, ...props }) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

export default class App extends React.Component {
  componentDidMount() {
    setLocalNotification()
  }
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
