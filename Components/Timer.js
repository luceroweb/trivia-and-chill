import { StyleSheet, View, Text} from 'react-native';
import { connect } from 'react-redux';

function Timer({ timerCount }) {
  return (
    <View style={styles.timer}>
      <Text>{timerCount}</Text>
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
    countdownTimer: setInterval(() => dispatch({
      type: 'COUNTDOWN_TIMER'
    }), 1000),
    resetTimer: () => dispatch({
      type: 'RESET_TIMER'
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