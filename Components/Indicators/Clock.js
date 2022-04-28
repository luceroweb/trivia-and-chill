import { Text, View, StyleSheet, Platform } from "react-native";
import { CountdownCircleTimer } from "react-native-countdown-circle-timer";

export default function Clock({ isPlaying, onUpdate, onComplete }) {
  return (
    <View style={styles.container}>
      <CountdownCircleTimer
        isPlaying={isPlaying}
        duration={10}
        colors={["#F2D379", "#CA3D45"]}
        colorsTime={[10, 0]}
        onComplete={onComplete}
        size={50}
        strokeWidth={6}
        trailColor={"#CA3D45"}
        onUpdate={onUpdate}
      >
        {({ remainingTime, color }) => (
          <Text style={{ color: "#F2D379", fontSize: 20 }}>
            {remainingTime}
          </Text>
        )}
      </CountdownCircleTimer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // paddingTop: Constants.statusBarHeight,
    padding: 4,
  },
});
