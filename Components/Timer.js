import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Audio } from "expo-av";
import tick from "../Sounds/tick.wav";
import Clock from "../Components/Clock";
import { StyleSheet, View, Platform } from "react-native";

function Timer({ setScene }) {
  const [timerCount, setTimerCount] = useState(10);
  const [sound, setSound] = useState();

  async function playSound() {
    const { sound } = await Audio.Sound.createAsync(tick);
    setSound(sound);
    await sound.playAsync();
  }

  useEffect(() => {
    const timerInterval = setInterval(() => {
      if (timerCount > 0) {
        setTimerCount(timerCount - 1);
        playSound();
      } else {
        clearTimer();
      }
    }, 1000);

    const clearTimer = () => {
      clearInterval(timerInterval);
      setScene("GameOver");
    };

    return () => {
      clearInterval(timerInterval);
      sound ? sound.unloadAsync() : undefined;
    };
  }, [timerCount]);

  // Conditional render depending on OS
  if (Platform.OS === "web") {
    // Render for web
    return (
      <View style={styles.timer}>
        <Clock />
      </View>
    );
  } else {
  // Render for ios and android
    return <Clock />;
  }
}

const styles = StyleSheet.create({
  timer: {
    position: "absolute",
    left: 0,
    top: 4,
    flex: 1,
  },
});

function mapStateToProps(state) {
  return {
    scene: state.scene,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setScene: (name) =>
      dispatch({
        type: "SET_SCENE",
        name,
      }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
