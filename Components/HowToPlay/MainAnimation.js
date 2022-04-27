import {
  View,
  Text,
  Animated,
  StyleSheet,
  useWindowDimensions,
  ImageBackground,
  Easing,
  Platform,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import mainAnimation from "../../Images/HowToPlay/Main/mainAnimation.png";
import mainAnimationWeb from "../../Images/HowToPlay/Main/mainAnimationWeb.png";
import React, { useRef, useEffect } from "react";

const MainAnimation = () => {
  const translation = useRef(new Animated.Value(0)).current;
  const screenWidth = useWindowDimensions().width;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(translation, {
          toValue: 0,
          useNativeDriver: true,
        }),
        Animated.timing(translation, {
          toValue:
            Platform.OS === "web" ? (screenWidth < 581 ? 120 : 190) : 310,
          easing: Easing.bounce,
          duration: 5000,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        resizeMode={"cover"}
        style={styles.container}
        source={Platform.OS === "web" ? mainAnimationWeb : mainAnimation}
      >
        <View style={{ alignItems: "center", flex: 1 }}>
          <Animated.View
            style={{
              width: 30,
              height: 30,
              duration: 700,
              transform: [{ translateY: translation }],
              opacity: translation.interpolate({
                inputRange: [0, 50],
                outputRange: [0, 1],
              }),
            }}
          >
            <Text style={styles.animationFontAwesome}>
              <FontAwesome name="arrow-down" size={24} color="#292840" />
            </Text>
          </Animated.View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%",
    flexDirection: "column",
  },
  animationText: {
    color: "#F2D379",
    margin: 5,
  },
  animationFontAwesome: {
    alignSelf: "center",
    alignItems: "center",
  },
});

export default MainAnimation;
