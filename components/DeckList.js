import React, { Component } from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import { connect } from 'react-redux'

class DeckList extends Component {
  renderDeckItem = ({ item }) => {
    return (
      <View style={styles.deckListItem}>
        <Text style={styles.deckTitle}>{item.title}</Text>
        <Text style={styles.numQuestions}>{item.questions.length} cards</Text>
      </View>
    )
  }
  render() {
    const { decks } = this.props
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data={decks}
          renderItem={this.renderDeckItem}
          keyExtractor={(item, index) => index}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  deckListItem: {
    padding: 30,
    borderBottomWidth: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  deckTitle: {
    fontSize: 20
  },
  numQuestions: {
    color: '#767676'
  }
})

function mapStateToProps(state) {
  return {
    decks: Object.values(state)
  }
}

export default connect(mapStateToProps)(DeckList)
