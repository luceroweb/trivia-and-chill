import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import { CountdownCircleTimer } from "react-native-countdown-circle-timer";

export default function App() {
  const [isPlaying, setIsPlaying] = React.useState(true);

  return (
    <View style={styles.container}>
      <CountdownCircleTimer
        isPlaying={isPlaying}
        duration={10}
        colors={["#F2D379", "#CA3D45"]}
        colorsTime={[10, 0]}
        onComplete={() => ({ shouldRepeat: false, delay: 2 })}
        size={50}
        strokeWidth={6}
        trailColor={"#CA3D45"}
      >
        {({ remainingTime }) => (
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
    padding: 4,
  },
});
