import React from 'react'
import {View, Text} from 'react-native'

export default function({navigation}) {
  const { numCorrect, totalCards } = navigation.state.params
  const score = `${Math.floor(numCorrect / totalCards * 100)}%`
  return (
    <View style={{flex: 1}}>
      <Text>You scored</Text>
      <Text>{score}</Text>
    </View>
  )
}
