import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Audio } from "expo-av";
import tick from "../Sounds/tick.wav";
import Clock from "../Components/Clock";
import { StyleSheet, View, Platform } from "react-native";

function Timer({ setScene }) {
  const [sound, setSound] = useState();
  const [isPlaying, setIsPlaying] = useState(false);

  async function handleClockUpdate(remainingTime) {
    if (sound && remainingTime > 0) {
      await sound.replayAsync();
    }
  }

  function handleClockComplete() {
    setScene("GameOver");
  }

  useEffect(() => {
    const loadSound = async () => {
      try {
        const { sound } = await Audio.Sound.createAsync(tick);
        await sound.playAsync();
        setIsPlaying(true);
        setSound(sound);
      } catch (e) {
        console.error(e);
      }
    };
    loadSound();
    return () => {
      sound ? sound.unloadAsync() : undefined;
    };
  }, []);

  return (
    <View style={styles.timer}>
      <Clock
        isPlaying={isPlaying}
        onUpdate={handleClockUpdate}
        onComplete={handleClockComplete}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  timer: {
    position: "relative",
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
