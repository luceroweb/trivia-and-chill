import { useState, useEffect } from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  ImageBackground,
} from "react-native";
import React from "react";
import { connect } from "react-redux";
import { FontAwesome } from "@expo/vector-icons";

const MultipleChoice = ({
  selectedMovie,
  setScene,
  increaseWinningStreak,
  resetWinningStreak,
}) => {
  const [multipleAnswer, setMultipleAnswer] = useState(selectedMovie?.answer);
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [selectedAnswer, setSelectedAnswer] = useState();
  const [runRandom, setRunRandom] = useState(true);
  
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
    setRunRandom(false);
    setSelectedAnswer(selection);
    if (selection === correctAnswer) {
      setTimeout(() => {
        increaseWinningStreak();
        setScene("CorrectAnswer");
      }, 2000);
    } else {
      setTimeout(() => {
        resetWinningStreak();
        setScene("GameOver");
      }, 2000);
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
      return styles.colorU
        
    } else if (selection === correctAnswer) {
      return styles.colorT
    } else {
      return styles.colorF
    }
  };
  const getTextDecoration = (selection) => {
    if (typeof selectedAnswer === "undefined") {
      return "none";
    } else if (selection === correctAnswer) {
      return "none";
    } else {
      return "line-through";
    }
  };

  return (
    <View>
      {multipleAnswer.map((item, index) => (
        <ImageBackground
          source={require("../Images/ticket2.png")}
          style={{ width: 160, height: 80, padding: 10 }}
          key={index}
        >
          <View
            style={[
              {
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                justifyContent: "center",
                alignItems: "center",
              }
            ]}
          >
            <TouchableOpacity key={index} onPress={() => isCorrect(item)}>
              <Text key={index}>
                {getIcon(item)}
                <Text
									style={getColor(item)}
								>
									{item}
								</Text>

                {getIcon(item)}
              </Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      ))}
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

export default connect(mapStateToProps, mapDispatchToProps)(MultipleChoice);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    paddingHorizontal: 20,
  },
  colorT: {
    marginRight: 5, 
    marginLeft: 5 ,
    textDecorationLine: "none",
    color:"green"
  },
  colorF: {
    marginRight: 5, 
    marginLeft: 5 ,
    textDecorationLine: "line-through",
    color:"red"
  },
  colorU: {
    marginRight: 5, 
    marginLeft: 5 ,
    textDecorationLine: "none",
    color:"black"
  }
});
