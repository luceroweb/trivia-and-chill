import {
  ImageBackground,
  Text,
  View,
  Animated,
  Platform,
  useWindowDimensions,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { useEffect, useRef } from "react";
export default function CorrectAnswerDemo() {
  const translation = useRef(new Animated.ValueXY({ x: 100, y: 40 })).current;
  const pointerSize = useRef(new Animated.Value(0)).current;
  const screenWidth = useWindowDimensions().width;
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
            toValue:
              Platform.OS === "web" ? (screenWidth < 550 ? 65 : 105) : 180,
            duration: 3500,
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
    <View>
      <ImageBackground
        resizeMode={Platform.OS === "web" ? "contain" : "contain"}
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          alignSelf: "center",
          width: "100%",
          height: "100%",
          aspectRatio: Platform.OS === "web" ? 1021 / 540 : 321 / 590,
        }}
        source={
          Platform.OS === "web"
            ? require("../../Images/HowToPlay/CorrectAnswer/correctAnswerDemo.png")
            : require("../../Images/HowToPlay/CorrectAnswer/correctAnswerDemoMobile.png")
        }
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
                  outputRange: [1, 0.6, 1],
                }),
              },
            ],
          }}
        >
          {Platform.OS === "web" ? (
            <Entypo name="mouse-pointer" size={24} color={"black"} />
          ) : (
            <FontAwesome name="hand-pointer-o" size={38} color="black" />
          )}
        </Animated.View>
      </ImageBackground>
    </View>
  );
}
