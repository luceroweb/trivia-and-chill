import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { connect } from "react-redux";

function GameOver() {
  const backToStartHandler = () => {

  };

  return (
    <View style={styles.layout}>
      <Text style={styles.heading}>Oh no! You picked the wrong answer!</Text>
      <Text style={styles.gameOver}>Game Over</Text>
      <View>
        <Pressable
          onPress={backToStartHandler}
          style={styles.backToStartButton}
        >
          <Text style={styles.backToStartButtonText}>Back to Start</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  heading: {
    fontSize: 40,
    marginBottom: 100,
    textAlign: "center",
  },
  gameOver: {
    fontSize: 100,
    marginBottom: 100,
    textAlign: "center",
  },
  backToStartButton: {
    padding: 10,
    backgroundColor: "black",
    width: 120,
    borderRadius: 10,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    height: 100,
  },
  backToStartButtonText: {
    textAlign: "center",
    fontSize: 20,
    color: "white",
  },
});

export default GameOver;
