import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import Constants from 'expo-constants';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';

export default function Clock() {
  const [isPlaying, setIsPlaying] = React.useState(true)

  return (
    <View style={styles.container}>
      <CountdownCircleTimer
        isPlaying={isPlaying}
        duration={10}
        colors={["#F2dE79", "#CA3D45"]}
        colorsTime={[10, 0]}
        onComplete={() => ({ shouldRepeat: false})}
        size={50}
        strokeWidth={5}
    >
      {({ remainingTime, color }) => (
        <Text style={{ color, fontSize: 25 }}>
          {remainingTime}
        </Text>
      )}
    </CountdownCircleTimer>
  </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
    padding: 8,
    
  }
});