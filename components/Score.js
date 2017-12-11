import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { NavigationActions } from 'react-navigation'
import { mustard, blue, blue2 } from '../utils/colors'

export default function({ navigation }) {
  const { numCorrect, totalCards } = navigation.state.params
  const score = `${Math.floor(numCorrect / totalCards * 100)}%`
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>You scored</Text>
      <Text style={styles.scoreText}>{score}</Text>
      <View style={{ padding: 10 }} />
      <TouchableOpacity
        style={[styles.button, { backgroundColor: mustard }]}
        onPress={() => {
          navigation.goBack()
        }}
      >
        <Text style={styles.buttonText}>Restart Quiz</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: blue }]}
        onPress={() => {
          navigation.goBack(navigation.state.params.quizNavigationKey)
        }}
      >
        <Text style={styles.buttonText}>Back To Deck</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    width: 170,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    padding: 15,
    borderRadius: 7,
    marginRight: 60,
    marginLeft: 60
  },
  buttonText: {
    color: 'white',
    fontSize: 20
  },
  scoreText: {
    fontWeight: 'bold',
    fontSize: 60,
    color: blue2
  }
})
