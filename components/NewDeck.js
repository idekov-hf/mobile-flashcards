import React, { Component } from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView
} from 'react-native'
import { connect } from 'react-redux'
import { addDeck } from '../actions'
import { saveDeckTitle } from '../utils/api'
import { blue } from '../utils/colors'

class NewDeck extends Component {
  state = {
    deckTitle: ''
  }
  handleAddNewDeck = () => {
    const deckTitle = this.state.deckTitle.trim()

    if (deckTitle === '') return

    this.props.addDeck(deckTitle)
    saveDeckTitle(deckTitle)
    this.props.navigation.navigate('IndividualDeck', {
      deckTitle
    })
    this.setState({ deckTitle: '' })
  }
  render() {
    return (
      <KeyboardAvoidingView
        behavior="padding"
        style={styles.container}
        keyboardVerticalOffset={-10}
      >
        <TextInput
          style={styles.titleInput}
          onChangeText={deckTitle => this.setState({ deckTitle })}
          value={this.state.deckTitle}
          placeholder="Enter deck title here"
        />
        <TouchableOpacity
          style={styles.createButton}
          onPress={this.handleAddNewDeck}
        >
          <Text style={styles.createButtonText}>Create Deck</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch'
  },
  titleInput: {
    height: 40,
    textAlign: 'center',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    borderRadius: 7,
    marginRight: 20,
    marginLeft: 20,
    backgroundColor: 'white'
  },
  createButton: {
    backgroundColor: blue,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    padding: 10,
    borderRadius: 7,
    marginRight: 60,
    marginLeft: 60
  },
  createButtonText: {
    color: 'white',
    fontSize: 18
  }
})

export default connect(null, { addDeck })(NewDeck)
