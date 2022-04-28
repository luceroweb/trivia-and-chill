import {
  Animated,
  View,
  ImageBackground,
  Platform,
  useWindowDimensions,
} from "react-native";
import { useRef, useEffect } from "react";
import { Entypo } from "@expo/vector-icons";
import WrongAnswerScreen from "../../Images/HowToPlay/WrongAnswer/WrongAnswerScreen.png";
import WrongAnswerScreenMobile from "../../Images/HowToPlay/WrongAnswer/WrongAnswerScreenMobile.png";

export default function WrongAnswerHelp() {
  const translation = useRef(
    new Animated.ValueXY({
      x: Platform.OS === "web" ? 100 : 50,
      y: Platform.OS === "web" ? 100 : 50,
    })
  ).current;

  const lifePointerCircle = useRef(new Animated.Value(1)).current;

  const screenWidth = useWindowDimensions().width;

  useEffect(() => {
    Animated.loop(
      Animated.parallel([
        Animated.timing(translation.x, {
          toValue: 10,
          duration: 3000,
          delay: 1000,
          useNativeDriver: false,
        }),
        Animated.timing(translation.y, {
          toValue:
            Platform.OS === "web" ? (screenWidth < 800 ? 185 : 160) : 185,
          duration: 3000,
          delay: 1000,
          useNativeDriver: false,
        }),
        Animated.timing(lifePointerCircle, {
          toValue: 0,
          duration: 3000,
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
        source={
          Platform.OS === "web" ? WrongAnswerScreen : WrongAnswerScreenMobile
        }
      >
        <Animated.View
          style={{
            transform: [
              { translateX: translation.x },
              { translateY: translation.y },
            ],
          }}
        >
          <Entypo
            name={Platform.OS === "web" ? "mouse-pointer" : "dot-single"}
            size={Platform.OS === "web" ? 24 : 72}
            color={Platform.OS === "web" ? "black" : "red"}
          />
        </Animated.View>

        <Animated.View
          style={{
            transform: [
              { translateX: Platform.OS === "web" ? -50 : -63 },
              {
                translateY:
                  Platform.OS === "web" ? (screenWidth < 800 ? 41 : 33) : 35,
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
