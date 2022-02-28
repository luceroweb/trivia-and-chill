import { useState, useEffect } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { connect } from "react-redux";

const MultipleChoice = ({
  selectedMovie,
  setScene,
  increaseWinningStreak,
  resetWinningStreak,
}) => {
    const [multipleAnswer, setMultipleAnswer] = useState(['2022-2-18', '2021-6-1', '1985-4-7']);
    const [correctAnswer, setCorrectAnswer] = useState(multipleAnswer[0]);
    const [selectedAnswer, setSelectedAnswer] = useState();

    const randomizeAnswer = (array) => {
        let currentIndex = array.length;

        while (currentIndex != 0) {
            const randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            [array[currentIndex], array[randomIndex]] =
            [array[randomIndex], array[currentIndex]];
        }

        return array;
    }

    useEffect(() => {
        randomizeAnswer(multipleAnswer);
    }, [])

    const isCorrect = (selection) => {
        setSelectedAnswer(selection);
        if (selection === correctAnswer) {
            setTimeout(() => {
                increaseWinningStreak();
                setScene("CorrectAnswer");
            }, 1000);
        }
        else {
            setTimeout(() => {
                resetWinningStreak();
                setScene("GameOver");
            }, 1000);
        }
    };

    return (
        <View style={styles.container}>
            {
                multipleAnswer.map((item, index) => (
                    <Pressable
                        key={index}
                        style={styles.option}
                        onPress={() => isCorrect(item)}
                    >
                        <Text key={index}>{index + 1}) {item}</Text>
                        {/* selectedMovie.date.release_date */}
                    </Pressable> 
                )
            )}
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
    option: {
        paddingVertical: 12,
        paddingHorizontal: 20,
        margin: 8,
        backgroundColor: "#afafaf",
    },
});
