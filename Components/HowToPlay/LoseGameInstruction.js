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
      x: Platform.OS === "web" ? (width < 630 ? 300: 350) :200,
      y: Platform.OS === "web" ? 250:370,
    })
  ).current;
  const lifePointerCircle = useRef(new Animated.Value(1)).current;
  const backgroundFade = useRef(new Animated.Value(0)).current;
  const screenWidth = useWindowDimensions().width;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(lifePointerCircle, {
          toValue: 0,
          duration: 1500,
          useNativeDriver: false,
        }),
        Animated.parallel([        
          Animated.timing(translation.x, {
            toValue: Platform.OS === "web" ? 240 : 120,
            duration: 1000,
            // delay: 500,
            useNativeDriver: false,
          }),
          Animated.timing(translation.y, {
            toValue:
              Platform.OS === "web" ? (width < 630 ? 200 : 220) : 280,
            duration: 1000,
            // delay: 500,
            useNativeDriver:false,
          }),
        ]),
        
        Animated.timing(backgroundFade, {
          toValue: 1,
          duration: 500,
          useNativeDriver: false,
        }),
        Animated.timing(backgroundFade, {
          toValue: 0,
          duration: 250,
          delay:2000,
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
          aspectRatio: Platform.OS === "web" ? 900 / 500 : 5 / 9,
        }}
      >
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
            opacity:backgroundFade,
          }}
        />

        <Animated.View
          style={{
            
              transform: [
                  { translateX: translation.x },
                  { translateY: translation.y },
              ]   ,                 
          
            opacity: backgroundFade.interpolate({
              inputRange: [0,1],
              outputRange:[1,0],
            }),
          }}
        >
          <Entypo name="mouse-pointer" size={18} color="black" />
        </Animated.View>
        <Animated.View
          style={{
            transform: [
              {
                translateX:
                  Platform.OS === "web" ? (screenWidth < 800 ? 130 : 120) : 20,
              },
              {
                translateY:
                  Platform.OS === "web" ? (screenWidth < 800 ? 115 : 100) : 200,
              },
            ],
            opacity: lifePointerCircle,
          }}
        >
          <Entypo name="circle" size={40} color="white" />
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
    marginBottom: 20,
  },
});
