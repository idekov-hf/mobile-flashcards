import React, { Component } from 'react'
import { View, Text, FlatList } from 'react-native'
import { connect } from 'react-redux'

class DeckList extends Component {
  renderDeckItem = ({ item }) => {
    return (
      <View>
        <Text>{item.title}</Text>
        <Text>{item.questions.length}</Text>
      </View>
    )
  }
  render() {
    const { decks } = this.props
    return (
      <View>
        <FlatList
          data={decks}
          renderItem={this.renderDeckItem}
          keyExtractor={(item, index) => index}
        />
      </View>
    )
  }
}

function mapStateToProps(state) {
  return {
    decks: Object.values(state)
  }
}

export default connect(mapStateToProps)(DeckList)
