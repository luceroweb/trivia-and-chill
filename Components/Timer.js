import { StyleSheet, View, Text} from 'react-native';
import { connect } from 'react-redux';

function Timer({ timerCount, setScene }) {
  const timerEnd = () => {
    setScene('GameOver')
  }

  return (
    <View style={styles.timer}>{
      timerCount < 1
      ?
      timerEnd()
      :
      <Text>{timerCount}</Text>
    }

    </View>
  )
}

function mapStateToProps(state){
  return {
    timerCount: state.timerCount,
    scene: state.scene
  }
}

function mapDispatchToProps(dispatch) {
  return {
    countdownTimer: setInterval(() => dispatch({
      type: 'COUNTDOWN_TIMER'
    }), 1000),
    setScene: (name) =>
    dispatch({
      type: "SET_SCENE",
      name
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