import {
  ImageBackground,
  StyleSheet,
  View,
  Animated,
  useWindowDimensions,
  Platform,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { useEffect, useRef } from "react";
import loseGameAnimationWeb from "../../Images/gameOverAnimationWEb.png";
import loseGameAnimationMobile from "../../Images/gameOverAnimationMobile.png";
import oneLifeAnimationMobile from "../../Images/oneLifeAnimationMobile.png";
import oneLifeAnimationWeb from "../../Images/oneLifeAnimationWeb.png";

export default function LoseGameInstruction() {
  const { width } = useWindowDimensions();
  const translation = useRef(
    new Animated.ValueXY({
      x: Platform.OS === "web" ? (width < 630 ? width * 0.2 : 100) : 200,
      y: 40,
    })
  ).current;
  const lifePointerCircle = useRef(new Animated.Value(0)).current;
  const screenWidth = useWindowDimensions().width;

  useEffect(() => {
    Animated.loop(
      Animated.parallel([
        Animated.timing(translation.x, {
          toValue: Platform.OS === "web" ? 0 : 4,
          duration: 2000,
          delay: 1000,
          useNativeDriver: false,
        }),
        Animated.timing(translation.y, {
          toValue:
            Platform.OS === "web" ? (width < 630 ? width * 0.13 : 120) : 100,
          duration: 2000,
          delay: 1000,
          useNativeDriver: false,
        }),
        Animated.timing(lifePointerCircle, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: false,
        }),
      ])
    ).start();
  }, [width]);

  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode={"cover"}
        source={
          Platform.OS === "web" ? oneLifeAnimationWeb : oneLifeAnimationMobile
        }
        style={{
          width: "100%",
          height: "100%",
          aspectRatio: Platform.OS === "web" ? 1021 / 540 : 5 / 9,
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
            ],
          }}
        >
          <Entypo name="mouse-pointer" size={18} color="black" />
        </Animated.View>

        <Animated.Image
          source={
            Platform.OS === "web"
              ? loseGameAnimationWeb
              : loseGameAnimationMobile
          }
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            aspectRatio: Platform.OS === "web" ? 1021 / 540 : 5 / 9,
            borderRadius: 20,
            opacity: translation.x.interpolate({
              delay: 10000,
              inputRange: Platform.OS === "web" ? [0, 2] : [4, 6],
              outputRange: [1, 0],
              extrapolate: "clamp",
            }),
          }}
        />
      </ImageBackground>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
});
