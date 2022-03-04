import { useState } from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  ImageBackground,
} from "react-native";
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
      return "#000";
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
      <View style={{ margin: 4, flex: 1, flexDirection: "row" }}>
        <View style={{ marginRight: 15 }}>
          <ImageBackground
            source={require("../Images/ticket.png")}
            style={{ width: 160, height: 80 }}
          >
            <View
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Pressable onPress={() => isCorrect(true)}>
                <Text style={{ color: getBorderColor(true) }}>True</Text>
              </Pressable>
            </View>
          </ImageBackground>
        </View>
        <View>
          <ImageBackground
            source={require("../Images/ticket.png")}
            style={{ width: 160, height: 80 }}
          >
            <View
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Pressable onPress={() => isCorrect(false)}>
                <Text style={{ color: getBorderColor(false) }}>False</Text>
              </Pressable>
            </View>
          </ImageBackground>
        </View>
      </View>
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
    marginTop: 20,
    paddingHorizontal: 20,
    flexDirection: "row",
  },
});
