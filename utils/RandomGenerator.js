import React from 'react';
import { Text, StyleSheet } from "react-native";

const randomNumber = Math.floor(Math.random() * 700);
const RandomGenerator = () => {

  return (
    <Text>{randomNumber}</Text>
  )
}

export default RandomGenerator

