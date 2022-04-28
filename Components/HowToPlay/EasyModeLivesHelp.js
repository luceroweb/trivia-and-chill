import {
  Animated,
  View,
  ImageBackground,
  Platform,
  useWindowDimensions,
} from "react-native";
import { useRef, useEffect } from "react";
import { Entypo } from "@expo/vector-icons";
import GameStartEasy from "../../Images/HowToPlay/Questions/EasySinglePlayer/gameStartEasy.png";
import GameStartEasyMobile from "../../Images/HowToPlay/Questions/EasySinglePlayer/gameStartEasyMobile.png";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function EasyModeLivesHelp() {
  const lifePointerCircle = useRef(new Animated.Value(1)).current;

  const screenWidth = useWindowDimensions().width;

  useEffect(() => {
    Animated.loop(
      Animated.parallel([
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
        source={Platform.OS === "web" ? GameStartEasy : GameStartEasyMobile}
      >
        <Animated.View
          style={{
            transform: [
              {
                translateX:
                  Platform.OS === "web"
                    ? screenWidth < 800
                      ? -120
                      : -100
                    : -65,
              },
              { translateY: Platform.OS === "web" ? 10 : 70 },
            ],
            opacity: lifePointerCircle,
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <MaterialCommunityIcons
              name="popcorn"
              size={screenWidth > 800 ? 12 : 16}
              color="#F2D379"
            />
            <MaterialCommunityIcons
              name="popcorn"
              size={screenWidth > 800 ? 12 : 16}
              color="#F2D379"
            />
            <MaterialCommunityIcons
              name="popcorn"
              size={screenWidth > 800 ? 12 : 16}
              color="#F2D379"
            />
          </View>
        </Animated.View>
      </ImageBackground>
    </View>
  );
}
