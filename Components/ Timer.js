import { StyleSheet, View, Text} from 'react-native';
import { connect } from 'react-redux';

function Timer({ timerCount }) {
  return (
    <View style={styles.timer}>
      {
      winningStreak > 0 &&
        <Text>{timerCount}</Text>
      }
      {/* {winningStreak = 0 &&
      setScene('gameover')} */}
    </View>
  )
}

function mapStateToProps(state){
  return {
    timerCount: state.timerCount
  }
}

function mapDispatchToProps(dispatch) {
  return {
    countdownTimer: () => dispatch({
      type: 'COUNTDOWN_TIMER'
    })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Timer);

const styles = StyleSheet.create({
    timer: {
        position: 'absolute',
        left: 0,
        top: 0,
        flex: 1
    }
});