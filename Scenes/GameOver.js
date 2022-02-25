import React from "react";
import { View, Text, Pressable, StyleSheet, ImageBackground } from "react-native";
import { connect } from "react-redux";
import BGImage from "../Images/drive-in-movie.jpg"

function GameOver({ setScene, resetWinningStreak }) {
  const backToStartHandler = () => {
    resetWinningStreak();
    setScene('Main');
  };

  return (
    <View style={styles.layout}>
      <ImageBackground source={BGImage} resizeMode="cover" style={styles.image}>
        <View style={styles.gameOverWrap}>
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
      </ImageBackground>
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
    backgroundColor: 'red',
    height: '100%',
  },
  image: {
    width: '100%',
    height: '100%',
    padding: 40,
    alignItems: 'center',
    height: '100%',
  },
  heading: {
    fontSize: 40,
    marginBottom: 70,
    textAlign: "center",
  },
  gameOverWrap: {
    backgroundColor: '#12121C',
    padding: 20,
    width: '52%',
    marginTop: '21vh',
  },
  gameOver: {
    fontSize: 70,
    marginBottom: 70,
    textAlign: "center",
    color: '#F2E6C4',
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
