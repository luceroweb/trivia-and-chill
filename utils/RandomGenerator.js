import React from 'react';
import { Text, StyleSheet } from "react-native";

const RandomGenerator = () => {
    const randomNumber = Math.floor(Math.random() * 1000);
  return (
    <Text>{randomNumber}</Text>
  )
}

export default RandomGenerator