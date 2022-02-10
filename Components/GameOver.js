import { View, Text, Pressable } from 'react-native'
import React from 'react'

const GameOver = ({ hideModal }) => {
  return (
    <View style={{ margin: 20, borderWidth: 1, alignItems: 'center', justifyContent: 'center', flex: 1 }} >
      <Text>GameOver</Text>
      <Pressable onPress={hideModal} >OK</Pressable>
    </View>
  )
}

export default GameOver