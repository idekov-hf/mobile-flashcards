import React, { Component } from 'react'
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity
} from 'react-native'
import { connect } from 'react-redux'
import { getDecks } from '../utils/api'
import { addDecks } from '../actions'

class DeckList extends Component {
  componentDidMount() {
    getDecks().then(data => {
      if (!data) return
      this.props.addDecks(data)
    })
  }
  renderDeckItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.deckListItem}
        onPress={() =>
          this.props.navigation.navigate('IndividualDeck', {
            deckTitle: item.title
          })
        }
      >
        <Text style={styles.deckTitle}>{item.title}</Text>
        <Text style={styles.numQuestions}>{item.questions.length} cards</Text>
      </TouchableOpacity>
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
    backgroundColor: 'white',
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

export default connect(mapStateToProps, { addDecks })(DeckList)
