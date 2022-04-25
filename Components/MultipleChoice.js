import { useState, useEffect } from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  useWindowDimensions,
  Platform,
} from "react-native";
import React from "react";
import { connect } from "react-redux";
import { FontAwesome } from "@expo/vector-icons";

const MultipleChoice = ({
  selectedMovie,
  setScene,
  increaseWinningStreak,
  lives,
  gamePlayMode,
  decreaseLives,
  resetLives,
  resetWinningStreak,
}) => {
  const [multipleAnswer, setMultipleAnswer] = useState(selectedMovie?.answer);
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [selectedAnswer, setSelectedAnswer] = useState();
  const [runRandom, setRunRandom] = useState(true);
  const [hasAnswered, setHasAnswered] = useState(false);
  const { width } = useWindowDimensions();

  const randomizeAnswer = (array) => {
    let currentIndex = array.length;
    while (currentIndex != 0) {
      const randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
  };

  useEffect(() => {
    setCorrectAnswer(multipleAnswer[0]);

    if (runRandom) {
      randomizeAnswer(multipleAnswer);
    }
  }, [multipleAnswer]);

  const isCorrect = (selection) => {
    if (hasAnswered) {
      return;
    }
    setHasAnswered(true);
    setRunRandom(false);
    setSelectedAnswer(selection);
    if (selection === correctAnswer) {
      setTimeout(() => {
        increaseWinningStreak();
        setScene("CorrectAnswer");
      }, 1000);
    } else if (gamePlayMode === "easySinglePlayer" && lives > 1) {
      setTimeout(() => {
        decreaseLives();
        setScene("WrongAnswer");
        resetWinningStreak();
      }, 1000);
    } else {
      setTimeout(() => {
        resetLives();
        setScene("GameOver");
      }, 1000);
    }
  };

  const getIcon = (selection) => {
    if (typeof selectedAnswer === "undefined") {
      return <FontAwesome name="star" size={12} color="#401323" />;
    } else if (selection === correctAnswer) {
      return <FontAwesome name="check" size={16} color="green" />;
    } else {
      return <FontAwesome name="close" size={16} color="#CA3D45" />;
    }
  };

  const getColor = (selection) => {
    if (typeof selectedAnswer === "undefined") {
      return styles.colorU;
    } else if (selection === correctAnswer) {
      return styles.colorT;
    } else {
      return styles.colorF;
    }
  };

  return (
    <View
      style={[
        styles.container,
        { flexDirection: width > 500 ? "row" : "column" },
      ]}
    >
      {multipleAnswer.map((item, index) => (
        <ImageBackground
          source={require("../Images/ticket2.png")}
          style={styles.ticket}
          key={index}
        >
          <TouchableOpacity
            key={index}
            onPress={() => isCorrect(item)}
            style={styles.ticketOption}
          >
            {getIcon(item)}
            <Text style={getColor(item)}>{item}</Text>
            {getIcon(item)}
          </TouchableOpacity>
        </ImageBackground>
      ))}
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
    decreaseLives: () =>
      dispatch({
        type: "DECREASE_LIVES",
      }),
    resetLives: () =>
      dispatch({
        type: "RESET_LIVES",
      }),
    resetWinningStreak: () =>
      dispatch({
        type: "RESET_WINNING_STREAK",
      }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MultipleChoice);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    margin: Platform.OS === "android" ? 1 : 4,
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
  },
  ticket: {
    justifyContent: "center",
    alignItems: "center",
    width: 160,
    height: 80,
    marginBottom: 5,
  },
  ticketOption: {
    flexDirection: "row",
    width: "90%",
    height: 80,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  colorT: {
    marginRight: 5,
    marginLeft: 5,
    textDecorationLine: "none",
    color: "green",
  },
  colorF: {
    marginRight: 5,
    marginLeft: 5,
    textDecorationLine: "line-through",
    color: "red",
  },
  colorU: {
    marginRight: 5,
    marginLeft: 5,
    textDecorationLine: "none",
    color: "black",
  },
});
