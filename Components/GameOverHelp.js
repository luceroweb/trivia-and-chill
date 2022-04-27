import { Animated, View, ImageBackground, Platform } from "react-native";
import { useRef, useEffect } from "react";
import { Entypo } from "@expo/vector-icons";
import gameover from "../Images/HowToPlay/GameOver/SinglePlayer/gameover.png";
import gameOverMobile from "../Images/HowToPlay/GameOver/SinglePlayer/gameOverMobile.png";

export default function GameOverHelp() {
  const translation = useRef(
    new Animated.ValueXY({
      x: Platform.OS === "web" ? 100 : 50,
      y: Platform.OS === "web" ? 100 : 50,
    })
  ).current;

  useEffect(() => {
    Animated.loop(
      Animated.parallel([
        Animated.timing(translation.x, {
          toValue: 0,
          duration: 3000,
          delay: 1000,
          useNativeDriver: false,
        }),
        Animated.timing(translation.y, {
          toValue: Platform.OS === "web" ? 35 : -12,
          duration: 3000,
          delay: 1000,
          useNativeDriver: false,
        }),
      ])
    ).start();
  }, []);

  return (
    <View>
      <ImageBackground
        resizeMode={Platform.OS === "web" ? "contain" : "cover"}
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          alignSelf: "center",
          maxWidth: 647,
          maxHeight: Platform.OS === "web" ? 423 : "100%",
          width: "100%",
          height: "100%",
          aspectRatio: Platform.OS === "web" ? 647 / 423 : 1170 / 2532,
        }}
        source={Platform.OS === "web" ? gameover : gameOverMobile}
      >
        <Animated.View
          style={{
            transform: [
              { translateX: translation.x },
              { translateY: translation.y },
            ],
            marginBottom: 10,
          }}
        >
          <Entypo
            name={Platform.OS === "web" ? "mouse-pointer" : "circle"}
            size={24}
            color={Platform.OS === "web" ? "black" : "#A0947C"}
          />
        </Animated.View>
      </ImageBackground>
    </View>
  );
}
