import React from 'react'
import { View, Text, StyleSheet } from "react-native";

const GenerateQuestion = (props) => {

  return (
    <View>
        {props.madLibsArray[props.randomNumber].question}
    </View>
  )
}

export default GenerateQuestion;