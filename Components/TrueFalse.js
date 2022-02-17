import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { connect } from "react-redux";

const TrueFalse = ({
  selectedMovie,
  setScene,
  increaseWinningStreak,
  resetWinningStreak,
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState();
  const answer = selectedMovie?.answer;

  const isCorrect = (selection) => {
    setSelectedAnswer(selection);
    if (selection === answer) {
      setTimeout(() => {
        increaseWinningStreak();
        setScene("CorrectAnswer");
      }, 1000);
    } else {
      setTimeout(() => {
        resetWinningStreak();
        setScene("GameOver");
      }, 1000);
    }
  };

  const getBorderColor = (button) => {
    if (typeof selectedAnswer === "undefined") {
      return "#00f";
    }
    if (button !== answer) {
      return "#f00";
    }
    if (button === answer) {
      return "#0f0";
    }
  };

  return (
    <View style={styles.container}>
      <Pressable
        key={1}
        style={[
          styles.option,
          { borderWidth: 2, borderColor: getBorderColor(true) },
        ]}
        onPress={() => isCorrect(true)}
      >
        <Text>True</Text>
      </Pressable>
      <Pressable
        key={0}
        style={[
          styles.option,
          { borderWidth: 2, borderColor: getBorderColor(false) },
        ]}
        onPress={() => isCorrect(false)}
      >
        <Text>False</Text>
      </Pressable>
    </View>
  );
};

const mapStateToProps = (state) => ({
  questions: state.questions,
  selectedMovie: state.selectedMovie,
});

function mapDispatchToProps(dispatch) {
  return {
    setScene: (name) =>
      dispatch({
        type: "SET_SCENE",
        name,
      }),
    increaseWinningStreak: () =>
      dispatch({
        type: "INCREASE_WINNING_STREAK",
      }),
    resetWinningStreak: () =>
      dispatch({
        type: "RESET_WINNING_STREAK",
      }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TrueFalse);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20, // StatusBar.currentHeight,
    paddingHorizontal: 20,
  },
  option: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    margin: 8,
    backgroundColor: "#afafaf",
  },
});