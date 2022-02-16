import { useEffect } from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';
import { connect } from 'react-redux';
import Badge from '../Components/Badge';
import FetchApi, { FetchApiMovieId } from '../Utils/FetchApi';
import GenerateQuestion from '../Components/GenerateQuestion';
import Trailer from '../Components/Trailer';

function Home({ winningStreak, increaseWinningStreak, resetWinningStreak, movies, setMovies
  // ,setMovieId,movieId
 }) {

  useEffect(
    () => {
      FetchApi().then(res => setMovies(res));      
    },
    []
  )
  useEffect(
    () => {
      FetchApiMovieId()
      .then(respond => console.log(response));      
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
      <Trailer
      //  movieId={movieId}
      />
    </View>
  )
}

function mapStateToProps(state){
  return {
    winningStreak: state.winningStreak,
    movies: state.movies,
    movieId: state.movieId,
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
    }),
    setMovieId: (movieId) =>
      dispatch({
        type: "SET_MOVIEID",
        movieId
      }),

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