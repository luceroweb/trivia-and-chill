import { useState } from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Platform,
} from "react-native";
import React from "react";
import { connect } from "react-redux";
import { FontAwesome } from "@expo/vector-icons";
const TrueFalse = ({
  selectedMovie,
  setScene,
  increaseWinningStreak,
  resetWinningStreak,
  lives,
  gamePlayMode,
  decreaseLives,
  resetLives,
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
    } else if (gamePlayMode === "easySinglePlayer" && lives > 1) {
      setTimeout(() => {
        resetWinningStreak();
        decreaseLives();
        setScene("WrongAnswer");
      }, 1000);
    } else {
      setTimeout(() => {
        resetWinningStreak();
        resetLives();
        setScene("GameOver");
        resetLives();
      }, 1000);
    }
  };
console.log(answer)
  const getIcon = (button) => {
    if (typeof selectedAnswer === "undefined") {
      return <FontAwesome name="star" size={12} color="#401323" />;
    }
    if (button !== answer) {
      return <FontAwesome name="close" size={16} color="#CA3D45" />;
    }
    if (button === answer) {
      return <FontAwesome name="check" size={16} color="green" />;
    }
  };
  const getColorT = (button) => {
    if (typeof selectedAnswer === "undefined") {
      return (
        <Text
          style={{
            marginRight: 20,
            marginLeft: 20,
            textDecorationLine: "none",
            color: "black",
          }}
        >
          True{" "}
        </Text>
      );
    }
    if (button !== answer) {
      return (
        <Text
          style={{
            marginRight: 20,
            marginLeft: 20,
            textDecorationLine: "line-through",
            color: "red",
          }}
        >
          True{" "}
        </Text>
      );
    }
    if (button === answer) {
      return (
        <Text
          style={{
            marginRight: 20,
            marginLeft: 20,
            textDecorationLine: "none",
            color: "green",
          }}
        >
          True{" "}
        </Text>
      );
    }
  };
  const getColorF = (button) => {
    if (typeof selectedAnswer === "undefined") {
      return (
        <Text
          style={{
            marginRight: 20,
            marginLeft: 20,
            textDecorationLine: "none",
            color: "black",
          }}
        >
          False{" "}
        </Text>
      );
    }
    if (button !== answer) {
      return (
        <Text
          style={{
            marginRight: 20,
            marginLeft: 20,
            textDecorationLine: "line-through",
            color: "red",
          }}
        >
          False{" "}
        </Text>
      );
    }
    if (button === answer) {
      return (
        <Text
          style={{
            marginRight: 20,
            marginLeft: 20,
            textDecorationLine: "none",
            color: "green",
          }}
        >
          False{" "}
        </Text>
      );
    }
  };
  const getTextDecoration = (button) => {
    if (typeof selectedAnswer === "undefined") {
      return "none";
    }
    if (button !== answer) {
      return "line-through";
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.true}>
        <ImageBackground
          source={require("../Images/ticket2.png")}
          style={styles.ticket}
        >
          <TouchableOpacity
            onPress={() => isCorrect(true)}
            style={styles.ticketOption}
          >
            {getIcon(true)}
            {getColorT(true)}
            {getIcon(true)}
          </TouchableOpacity>
        </ImageBackground>
      </View>
      <View style={styles.false}>
        <ImageBackground
          source={require("../Images/ticket2.png")}
          style={styles.ticket}
        >
          <TouchableOpacity
            onPress={() => isCorrect(false)}
            style={styles.ticketOption}
          >
            {getIcon(false)}
            {getColorF(false)}
            {getIcon(false)}
          </TouchableOpacity>
        </ImageBackground>
      </View>
    </View>
  );
};
const mapStateToProps = (state) => ({
  questions: state.questions,
  selectedMovie: state.selectedMovie,
  lives: state.lives,
  gamePlayMode: state.gamePlayMode || "easySinglePlayer",
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
    decreaseLives: () =>
      dispatch({
        type: "DECREASE_LIVES",
      }),
    resetLives: () =>
      dispatch({
        type: "RESET_LIVES",
      }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TrueFalse);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    margin: Platform.OS === "android" ? 1 : 4,
    justifyContent: "center",
    alignItems: "center",
  },
  true: {
    marginTop: Platform.OS === "ios" ? 20 : 0,
  },
  false: {
    marginTop: Platform.OS === "ios" ? 80 : 20,
  },
  ticket: {
    justifyContent: "center",
    alignItems: "center",
    width: 160,
    height: 80,
  },
  ticketOption: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "90%",
    height: 80,
    flexDirection: "row",
  },
});
