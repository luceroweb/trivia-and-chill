import React, { useState, useEffect } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { Audio } from 'expo-av';
import lose from '../Sounds/lose.wav';

function GameOver({ setScene, resetWinningStreak }) {
  const [sound, setSound] = useState();
 
  async function playSound() {
    const { sound } = await Audio.Sound.createAsync(
      lose
    );
    setSound(sound);

    await sound.playAsync();
  }

  const backToStartHandler = () => {
    resetWinningStreak();
    setScene('Main');
  };

  useEffect(() => {
    playSound();
    return sound
      ? () => {
        sound.unloadAsync();
      }
      : undefined;
  }, []);

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

function mapStateToProps(state) {
  return {
    winningStreak: state.winningStreak,
    scene: state.scene
  };
}

function mapDispatchToProps(dispatch) {
  return {
    resetWinningStreak: () =>
      dispatch({
        type: "RESET_WINNING_STREAK",
      }),
      setScene: (name) =>
      dispatch({
        type: "SET_SCENE",
        name
      })
  };
}

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: 40,
  },
  heading: {
    fontSize: 40,
    marginBottom: 70,
    textAlign: "center",
  },
  gameOver: {
    fontSize: 100,
    marginBottom: 70,
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

export default connect(mapStateToProps, mapDispatchToProps)(GameOver);
