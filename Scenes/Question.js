import { useState, useEffect } from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { connect } from "react-redux";
import FetchApi from "../Utils/FetchApi";
import GenerateQuestion from "../Components/GenerateQuestion";
import Timer from "../Components/Timer";
import TrueFalse from "../Components/TrueFalse";

function Question({
  selectedMovie,
  movies,
  setMovies,
}) {
  const [timerCount, setTimerCount] = useState(10);

  useEffect(() => {
    FetchApi().then((res) => setMovies(res));
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <View style={styles.title}>
        <Timer timerCount={timerCount} setTimerCount={setTimerCount}/>
          <View style={styles.heading}>
            <Text>Question</Text>
          </View>
          <GenerateQuestion movies={movies} />
          <Text>{movies && selectedMovie?.question}</Text>
        </View>
        <View style={styles.titleWrap}>
          <TrueFalse />
        </View>
      </View>
    </View>
  );
}

function mapStateToProps(state) {
  return {
    winningStreak: state.winningStreak,
    movies: state.movies,
    selectedMovie: state.selectedMovie,
    scene: state.scene,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    increaseWinningStreak: () =>
      dispatch({
        type: "INCREASE_WINNING_STREAK",
      }),
    resetWinningStreak: () =>
      dispatch({
        type: "RESET_WINNING_STREAK",
      }),
    setMovies: (movies) =>
      dispatch({
        type: "SET_MOVIES",
        movies,
      }),
    setScene: (name) =>
      dispatch({
        type: "SET_SCENE",
        name,
      }),
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    height: "60%",
    width: "100%",
    flexDirection: "column",
  },
  titleWrap: {
    flexDirection: "row",
  },
  title: {
    shadowColor: "#1a1a1a",
    shadowRadius: 10,
    textAlign: "center",
    color: "#fff",
    backgroundColor: "#de4e45",
    fontWeight: "bold",
    marginTop: 5,
    padding: 5,
    fontSize: 20,
    height: 250,
    width: 300,
  },
  heading: {
    marginBottom: 8,
  },
  subtitle: {
    textAlign: "center",
    borderWidth: 2,
    borderStyle: "dashed",
    borderTopColor: "#de4e45",
    color: "#fff",
    shadowColor: "#de4e45",
    shadowRadius: 10,
    backgroundColor: "#1a1a1a",
    fontWeight: "bold",
    padding: 5,
    fontSize: 10,
    paddingHorizontal: 70,
    height: 150,
  },
  btn: {
    padding: 10,
    margin: 50,
    backgroundColor: "#de4e45",
    textAlign: "center",
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Question);
