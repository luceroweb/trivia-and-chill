import { useEffect } from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { connect } from "react-redux";
import FetchApi from "../Utils/FetchApi";
import GenerateQuestion from "../Components/GenerateQuestion";

function Home({
  winningStreak,
  increaseWinningStreak,

  resetWinningStreak,
  movies,
  setMovies,
  setScene
}) {
  useEffect(() => {
    FetchApi().then((res) => setMovies(res));
  }, []);

  return (
    <View style={styles.container}>
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
    </View>
  );
}

function mapStateToProps(state) {
  return {
    winningStreak: state.winningStreak,
    movies: state.movies,
    
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
