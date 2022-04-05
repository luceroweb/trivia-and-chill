import { ImageBackground, StyleSheet, View, Animated, useWindowDimensions, Platform } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { useEffect, useRef } from "react";

export default function QuestionInstructions() {
  const { width } = useWindowDimensions();
  const translation = useRef(new Animated.ValueXY({ x:  Platform.OS === 'web' ? width < 630 ? width * 0.2 : 230 : 100, y: 40 })).current;

  useEffect(() => {
    Animated.loop(
      Animated.parallel([
        Animated.timing(translation.x, {
          toValue: Platform.OS === 'web' ? 0 : 4,
          duration: 2000,
          delay: 1000,
          useNativeDriver: false,
        }),
        Animated.timing(translation.y, {
          toValue: Platform.OS === 'web' ? width < 630 ? width * 0.13 : 85 : 45, 
          duration: 2000,
          delay: 1000,
          useNativeDriver: false,
        }),
      ])  
    ).start();
  }, [width]);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../Images/question-page.png")}
        style={{ width: '100%', height: '100%', aspectRatio: 1021 / 540, borderRadius: 20 }}
      >
        <Animated.Image
          source={require('../Images/question-answered.png')}
          style={{ 
            position: 'absolute',
            width: '100%',
            height: '100%',
            aspectRatio: 1021 / 540,
            borderRadius: 20, 
            opacity: translation.x.interpolate({
              inputRange: [0, 2],
              outputRange: [1, 0],
              extrapolate: 'clamp',
            }),
          }}
        />
        <Animated.View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            transform: [
              { translateX: translation.x },
              { translateY: translation.y },
            ],
          }}
        >
          <Entypo name="mouse-pointer" size={24} color="black" />
        </Animated.View>
      </ImageBackground>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});