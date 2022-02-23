import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { connect } from "react-redux";
import { FontAwesome5 } from '@expo/vector-icons'; 

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
<Pressable onPress={() => isCorrect(true)} style={styles.start}>

<FontAwesome5 name="ticket-alt" size={124} color="#A0947C"/>
<View styles={styles.border}>
 <Text style={styles.text}>True</Text>
 <View style={styles.border}></View>
 </View>
    </Pressable>
    <Pressable onPress={() => isCorrect(false)} style={styles.start}>

<FontAwesome5 name="ticket-alt" size={124} color="#A0947C"/>
<View styles={styles.border}>
 <Text style={styles.text}>False</Text>
 <View style={styles.border}></View>
 </View>
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
    flexDirection:"row"
  },
  start: {
    borderRadius: 5,
    backgroundColor: "white",
    padding: 10,
    marginBottom: 10,
  },
  text: {
    position: 'relative',
    top: -78,
    marginLeft: 42,
    fontSize: 24,
  },
  border: {
    borderWidth: 4,
    borderColor: "#401323",
    width: 85,
    marginLeft: 27,
    height: 54,
    top: -123,
  }
});


