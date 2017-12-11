import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { blue, green, red } from '../utils/colors'

class Quiz extends Component {
  state = {
    currentCardIndex: 0,
    isQuestion: true,
    numCorrect: 0
  }
  static navigationOptions = ({ navigation }) => {
    const { deckTitle } = navigation.state.params
    return {
      title: `${deckTitle} Quiz`
    }
  }
  handleGradingButtonPress = isCorrect => {
    let { currentCardIndex, numCorrect } = this.state
    const totalCards = this.props.cards.length

    if (isCorrect) numCorrect = ++numCorrect
    currentCardIndex = ++currentCardIndex

    if (currentCardIndex === totalCards) {
      this.props.navigation.navigate('Score', {
        numCorrect,
        totalCards,
        quizNavigationKey: this.props.navigation.state.key
      })
    }

    this.setState({
      numCorrect: numCorrect % totalCards,
      currentCardIndex: currentCardIndex % totalCards
    })
  }
  render() {
    const { cards } = this.props
    const { currentCardIndex, isQuestion, numCorrect } = this.state
    const currentCard = cards[currentCardIndex]
    return (
      <View style={{ flex: 1 }}>
        <Text
          style={{ alignSelf: 'center', marginTop: 10 }}
        >{`${currentCardIndex + 1}/${cards.length}`}</Text>
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
          <View style={styles.card}>
            <Text style={styles.cardText}>
              {isQuestion ? currentCard.question : currentCard.answer}
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => this.setState({ isQuestion: !isQuestion })}
          >
            <Text style={{ color: blue }}>
              See {isQuestion ? 'Answer' : 'Question'}
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'stretch' }}
        >
          <TouchableOpacity
            style={[styles.gradingButtons, { backgroundColor: green }]}
            onPress={() => this.handleGradingButtonPress(true)}
          >
            <Text style={styles.gradingButtonsText}>Correct</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.gradingButtons, { backgroundColor: red }]}
            onPress={() => this.handleGradingButtonPress(false)}
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
    alignSelf: 'stretch',
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
    fontSize: 18,
    color: 'white'
  }
})

function mapStateToProps(state, { navigation }) {
  const { deckTitle } = navigation.state.params
  return {
    cards: state[deckTitle].questions
  }
}

export default connect(mapStateToProps)(Quiz)
