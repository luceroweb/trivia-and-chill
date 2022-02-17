import { useEffect } from 'react';
import { StyleSheet, View, Text} from 'react-native';
import { connect } from 'react-redux';

function Timer({ setScene, timerCount, setTimerCount }) {
  useEffect(() => {
    const timerInterval = setInterval(() => {
      if (timerCount > 0) {
      setTimerCount(timerCount - 1);
      }
      else {
        clearTimer();
      }
    }, 1000);

    const clearTimer = () => {
      clearInterval(timerInterval);
      setScene('GameOver')
    }

    return () => clearInterval(timerInterval);
  }, [timerCount]);

  return (
    <View style={styles.timer}>
      <Text>{timerCount}</Text>
    </View>
  )
}

function mapStateToProps(state){
  return {
    scene: state.scene
  }
}

function mapDispatchToProps(dispatch) {
  return {
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