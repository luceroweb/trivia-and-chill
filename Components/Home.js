import { StyleSheet, View, Text, Pressable } from 'react-native';
import { connect } from 'react-redux';

function Home({ winningStreak, increaseWinningStreak, resetWinningStreak, timerCount, resetTimer }) {

  return(
    <View style={styles.container}>
      <Text>{timerCount}</Text>
      { timerCount < 1 &&
        resetTimer() } 
      <Text>{winningStreak}</Text>
      <Pressable onPress={increaseWinningStreak}>
        <Text>Add</Text>
      </Pressable>
      <Pressable onPress={resetWinningStreak}>
        <Text>Reset</Text>
      </Pressable>
    </View>
  )
}

function mapStateToProps(state){
  return {
    winningStreak: state.winningStreak,
    timerCount: state.timerCount
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
    countdownTimer: () => dispatch({
      type: 'COUNTDOWN_TIMER'
    }),
    resetTimer: () => dispatch({
      type: 'RESET_TIMER'
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