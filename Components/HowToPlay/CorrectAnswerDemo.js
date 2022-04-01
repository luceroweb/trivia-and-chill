import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Animated,
  Platform,
  useWindowDimensions
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { useEffect, useRef } from "react";
export default function CorrectAnswerDemo() {
  const translation = useRef(new Animated.ValueXY({ x: 100, y: 40 })).current;
  const pointerSize = useRef(new Animated.Value(0)).current;
  const screenWidth= useWindowDimensions().width;
  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.parallel([
          Animated.timing(translation.x, {
            toValue: 0,
            duration: 2000,
            delay: 1000,
            useNativeDriver: false,
          }),
          Animated.timing(translation.y, {
            toValue: screenWidth < 581 ? 55: 105,
            duration:3500,
            delay: 1000,
            useNativeDriver: false,
          }),
        ]),
        Animated.timing(pointerSize, {
          toValue: 100,
          duration: 300,
          useNativeDriver: false,
        }),
      ])
    ).start();
  }, [screenWidth]);
  return (
    <View style={styles.container}>
      <Text style={styles.instruction}> 3. Guess correctly to increase your winning streak, and enjoy the movie trailer. Select the “Next Question” button to continue the game.</Text>
      <ImageBackground
        source={require("./../../Images/correctAnswerDemo.png")}
        style={{ 
        width: screenWidth < 580 ? 250 : 500, aspectRatio: 1021 / 540, marginBottom:15,
      }}
      >
        <Animated.View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            transform: [
              { translateX: translation.x },
              { translateY: translation.y },
              {
                scale: pointerSize.interpolate({
                  inputRange: [0, 50, 100],
                  outputRange: [1, .6, 1],
                }),
              },
            ],
          }}
        >
          <Entypo name="mouse-pointer" size={24} color={"black"} />
        </Animated.View>
      </ImageBackground>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: Platform.OS === "web" ? 1 : 0,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#292840",
    borderRadius: 8,
    marginBottom: 15,
    
  },
  instruction:{
    color: "#F2D379",
    fontSize: 20,
    padding:20,
    
  }
});