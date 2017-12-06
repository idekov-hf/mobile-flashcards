import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'

class IndividualDeck extends Component {
  static navigationOptions = ({ navigation }) => {
    const { deckTitle } = navigation.state.params
    return {
      title: deckTitle
    }
  }
  render() {
    return (
      <View>
        <Text>Individual Deck</Text>
      </View>
    )
  }
}

export default connect()(IndividualDeck)
