import { View, Text, Pressable } from 'react-native'
import React from 'react'

const WinningModal = ({ hideModal }) => {
    return (
        <View style={{ margin: 20, borderWidth: 1, alignItems: 'center', justifyContent: 'center', flex: 1 }} >
            <Text>You won!</Text>
            <Pressable onPress={hideModal} >OK</Pressable>
        </View>
    )
}

export default WinningModal