import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { blue, green, red } from '../utils/colors'

class Quiz extends Component {
  static navigationOptions = ({ navigation }) => {
    const { deckTitle } = navigation.state.params
    return {
      title: `${deckTitle} Quiz`
    }
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Text style={{ alignSelf: 'center', marginTop: 10 }}>1/2</Text>
        <View style={{ flex: 1, alignItems: 'center' }}>
          <View style={styles.card}>
            <Text style={styles.cardText}>
              Is this a long question with a lot of words in it?
            </Text>
          </View>
          <TouchableOpacity>
            <Text style={{ color: blue }}>See Answer</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'stretch' }}
        >
          <TouchableOpacity
            style={[styles.gradingButtons, { backgroundColor: green }]}
          >
            <Text style={styles.gradingButtonsText}>Correct</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.gradingButtons, { backgroundColor: red }]}
          >
            <Text style={styles.gradingButtonsText}>Incorrect</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    padding: 50,
    margin: 35,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.05)',
    borderRadius: 7,
    shadowRadius: 10,
    shadowOpacity: 0.9,
    shadowColor: 'rgba(0,0,0,0.24)',
    shadowOffset: {
      width: 0,
      height: 10
    }
  },
  cardText: {
    textAlign: 'center',
    fontSize: 25
  },
  gradingButtons: {
    marginVertical: 5,
    marginHorizontal: 55,
    padding: 20,
    borderRadius: 7,
    alignItems: 'center'
  },
  gradingButtonsText: {
    fontSize: 16,
    color: 'white'
  }
})

export default Quiz
