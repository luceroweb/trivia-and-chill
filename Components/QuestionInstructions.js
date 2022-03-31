import { ImageBackground, StyleSheet, View, Animated, } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { useEffect, useRef } from "react";
export default function QuestionInstructions() {
  const translation = useRef(new Animated.ValueXY({ x: 100, y: 40 })).current;
  useEffect(() => {
    Animated.loop(
      Animated.parallel([
        Animated.timing(translation.x, {
          toValue: 0,
          duration: 2000,
          delay: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(translation.y, {
          toValue: 0,
          duration: 2000,
          delay: 1000,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../images/questionpage.png")}
        // resizeMode="cover"
        style={{ width: 500, aspectRatio: 1021 / 540 }}
      >
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
        ><Entypo name="mouse-pointer" size={24} color="black" /></Animated.View>
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