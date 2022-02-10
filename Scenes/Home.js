import { useEffect } from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';
import { connect } from 'react-redux';
import Badge from '../Components/Badge';
import FetchApi from '../Utils/FetchApi';
import GenerateQuestion from '../Components/GenerateQuestion';

function Home({ winningStreak, increaseWinningStreak, resetWinningStreak, movies, setMovies }) {

  useEffect(
    () => {
      FetchApi().then(res => setMovies(res));
    },
    []
  )

  return(
    <View style={styles.container}>
      <Badge />

      <Text>{winningStreak}</Text>
      <Pressable onPress={increaseWinningStreak}>
        <Text>Add</Text>
      </Pressable>
      <Pressable onPress={resetWinningStreak}>
        <Text>Reset</Text>
      </Pressable>

      <GenerateQuestion movies={movies} />
    </View>
  )
}

function mapStateToProps(state){
  return {
    winningStreak: state.winningStreak,
    movies: state.movies,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    increaseWinningStreak: () => dispatch({
      type: 'INCREASE_WINNING_STREAK'
    }),
    resetWinningStreak: () => dispatch({
      type: 'RESET_WINNING_STREAK'
    }),
    setMovies: (movies) => dispatch({
      type: 'SET_MOVIES',
      movies,
    })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});