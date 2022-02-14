import { useEffect } from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { connect } from "react-redux";
import FetchApi from "../Utils/FetchApi";
import GenerateQuestion from "../Components/GenerateQuestion";

function Home({
  winningStreak,
  increaseWinningStreak,
  selectedMovie,
  resetWinningStreak,
  movies,
  setMovies,
  setScene,
  timerCount,
  countdownTimer,
}) {
  
  useEffect(() => {
    FetchApi().then((res) => setMovies(res));
  }, []);

  return (
    <View style={styles.container}>
      <Text>{timerCount}</Text>
      <Text>{winningStreak}</Text>
      <Pressable onPress={increaseWinningStreak}>
        <Text>Add</Text>
      </Pressable>
      <Pressable onPress={resetWinningStreak}>
        <Text>Reset</Text>
      </Pressable>
      <Pressable onPress={()=>setScene('Question')}>
        <Text>Start</Text>
      </Pressable>
      <GenerateQuestion />
    </View>
  );
}

function mapStateToProps(state) {
  return {
    winningStreak: state.winningStreak,
    timerCount: state.timerCount,
    movies: state.movies,
    selectedMovie: state.selectedMovie,
    scene: state.scene
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
    countdownTimer: () => dispatch({
      type: 'COUNTDOWN_TIMER',
    }),
      setScene: (name) =>
      dispatch({
        type: "SET_SCENE",
        name
      })
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
