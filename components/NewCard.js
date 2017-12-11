import React, { Component } from 'react'
import {
  View,
  Text,
  KeyboardAvoidingView,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Keyboard
} from 'react-native'
import { connect } from 'react-redux'
import { addCard } from '../actions'
import { addCardToDeck } from '../utils/api'
import { blue } from '../utils/colors'

class NewCard extends Component {
  state = {
    question: '',
    answer: ''
  }
  handleAddNewQuestion = () => {
    Keyboard.dismiss()
    this.props.navigation.goBack()
    const { deckTitle } = this.props.navigation.state.params
    const newCard = {
      question: this.state.question,
      answer: this.state.answer
    }
    this.props.dispatch(addCard(deckTitle, newCard))
    addCardToDeck(deckTitle, newCard)
  }
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <TextInput
          style={styles.input}
          onChangeText={question => this.setState({ question })}
          value={this.state.question}
          placeholder="Enter the question here"
        />
        <TextInput
          style={styles.input}
          onChangeText={answer => this.setState({ answer })}
          value={this.state.answer}
          placeholder="Enter the answer here"
        />
        <TouchableOpacity
          style={styles.createButton}
          onPress={this.handleAddNewQuestion}
        >
          <Text style={styles.createButtonText}>Create Card</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    height: 40,
    textAlign: 'center',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    borderRadius: 7,
    marginRight: 20,
    marginLeft: 20,
    backgroundColor: 'white',
    alignSelf: 'stretch'
  },
  createButton: {
    backgroundColor: blue,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 7
  },
  createButtonText: {
    color: 'white',
    fontSize: 25
  }
})

export default connect()(NewCard)
