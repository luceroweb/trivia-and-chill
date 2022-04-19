import { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  Pressable,
  ImageBackground,
  Animated,
  Platform,
  useWindowDimensions,
} from "react-native";
import { Audio } from "expo-av";
import clapper from "../Sounds/clapper.wav";
import { connect } from "react-redux";
import FetchApi from "../Utils/FetchApi";
import { useFonts, Limelight_400Regular } from "@expo-google-fonts/limelight";
import AppLoading from "expo-app-loading";

function Main({ setScene, setMovies }) {
  const clapperOpenFade = useRef(new Animated.Value(1)).current;
  const clapperClosedFade = useRef(new Animated.Value(0)).current;
  const textFade = useRef(new Animated.Value(0)).current;
  const boardWithTextFade = useRef(new Animated.Value(0)).current;
  const [sound, setSound] = useState();

  const { width, height } = useWindowDimensions();
  useEffect(() => {
    FetchApi().then((res) => setMovies(res));
  }, []);

  async function playSound() {
    const { sound } = await Audio.Sound.createAsync(clapper, { volume: 0.1 });
    setSound(sound);

    await sound.playAsync();
  }

  useEffect(() => {
    setTimeout(() => {
      playSound();
    }, 1540);
    Animated.parallel([
      Animated.timing(boardWithTextFade, {
        toValue: 1,
        duration: 3250,
        useNativeDriver: false,
      }),
      Animated.stagger(1497, [
        Animated.timing(clapperOpenFade, {
          toValue: 0,
          duration: 0,
          delay: 1500,
          useNativeDriver: false,
        }),
        Animated.parallel([
          Animated.timing(clapperClosedFade, {
            toValue: 1,
            duration: 2000,
            useNativeDriver: false,
          }),
        ]),
        Animated.timing(textFade, {
          toValue: 1,
          delay: 800,
          duration: 4000,
          useNativeDriver: false,
        }),
      ]),
    ]).start();
  }, []);

  let [fontsLoaded] = useFonts({ Limelight_400Regular });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={[styles.container]}>
        <ImageBackground
          style={{
            flex: 1,
            flexDirection: "column",
            aspectRatio: 4 / 3,
            maxWidth: width,
            justifyContent: "center",
          }}
          source={require("../Images/theater-sign-generator.jpg")}
          resizeMode={width > 750 ? "contain" : "cover"}
          alt="movie theatre with marquee sign with cars parked in front"
        >
          {/* Animated View for picture of open clapper with no text */}
          <Animated.View
            style={{
              opacity: clapperOpenFade,
              position: "absolute",
              width: width > 500 ? "85%" : "100%",
              alignSelf: "center",
              alignItems:
                Platform.OS !== "web" && width < 500 ? "center" : "stretch",
            }}
          >
            <Image
              style={{
                aspectRatio: 1280 / 1117,
                maxWidth: Platform.OS !== "web" ? "90%" : width,
              }}
              source={require("../Images/IntroAnimation/clapper2-open.png")}
              alt="open movie clapper"
              resizeMode="contain"
            />
          </Animated.View>
          {/* Animated View for clapper image with arm closed with no text */}
          <Animated.View
            style={{
              opacity: clapperClosedFade.interpolate({
                inputRange: [0, 0.0000000000000000001, 0.5, 1],
                outputRange: [0, 1, 1, 0],
              }),
              position: "absolute",
              width: width > 500 ? "85%" : "100%",
              maxWidth: width,
              alignSelf: "center",
              alignItems:
                Platform.OS !== "web" && width < 500 ? "center" : "stretch",
            }}
          >
            <Image
              style={{
                aspectRatio: 1280 / 1117,
                maxWidth: Platform.OS !== "web" ? "90%" : width,
              }}
              source={require("../Images/IntroAnimation/clapper2-closed.png")}
              alt="closed movie clapper"
              resizeMode="contain"
            />
          </Animated.View>
          {/* Animated View for clapper board with actual text in foreground */}
          <Animated.View
            style={{
              opacity: boardWithTextFade.interpolate({
                inputRange: [0, 0.8, 1],
                outputRange: [1, 1, 0],
              }),
              position: "absolute",
              width: width > 500 ? "85%" : "100%",
              maxWidth: width,
              alignSelf: "center",
              alignItems:
                Platform.OS !== "web" && width < 500 ? "center" : "stretch",
            }}
          >
            <Image
              style={{
                aspectRatio: 1280 / 1117,
                maxWidth: Platform.OS !== "web" ? "90%" : width,
              }}
              //Can change font in following line to limelight, annie, or arial
              source={require("../Images/IntroAnimation/clapper2-no-arm-limelight.png")}
              alt="closed movie clapper"
              resizeMode="contain"
            />
          </Animated.View>
          {/* Animated View for the fading in title and start button */}
          <Animated.View style={{ opacity: textFade }}>
            <View
              style={[
                styles.titleContainer,
                { marginTop: Platform.OS !== "web" && width < 750 ? 64 : 0 },
              ]}
            >
              <Text
                style={[
                  styles.fontText,
                  {
                    fontSize:
                      height > 700
                        ? width > 900
                          ? 120
                          : (100 * width) / 800
                        : (100 * height) / 900,
                  },
                ]}
              >
                Trivia &#38; Chill
              </Text>
              <View
                style={[
                  styles.buttonContainer,
                  {
                    // I think it's okay without this line, but not positive.  It is causing some issues: paddingTop: width < 750 && Platform.OS === "web" ? 150 : 0,
                  },
                ]}
              >
                <ImageBackground
                  source={require("../Images/ticket.png")}
                  style={{
                    width: 160,
                    height: 80,
                    alignSelf: "center",
                    marginBottom: 30,
                  }}
                >
                  <View
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Pressable onPress={() => setScene("Question")}>
                      <Text>Start</Text>
                    </Pressable>
                  </View>
                </ImageBackground>
              </View>
            </View>
          </Animated.View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#401323",
  },
  start: {
    borderRadius: 5,
    backgroundColor: "white",
    padding: 10,
    marginBottom: 10,
  },
  text: {
    position: "relative",
    top: -78,
    marginLeft: 42,
    fontSize: 24,
  },
  border: {
    borderWidth: 4,
    borderColor: "#401323",
    width: 85,
    marginLeft: 27,
    height: 54,
    top: -123,
  },
  fontText: {
    fontFamily: "Limelight_400Regular",
    textAlign: "center",
    color: "#F2D379",
    fontSize: Platform.OS === "web" ? 100 : 50,
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center",
    textAlign: "center",
    backgroundColor: "transparent",
    width: "100%",
    marginTop: Platform.OS === "web" ? 50 : 80,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "center",
    textAlign: "center",
    marginTop: Platform.OS === "web" ? 280 : 390,
  },
});

function mapDispatchToProps(dispatch) {
  return {
    setScene: (name) =>
      dispatch({
        type: "SET_SCENE",
        name,
      }),
    setMovies: (movies) =>
      dispatch({
        type: "SET_MOVIES",
        movies,
      }),
    setPerformerName: (performerName) =>
      dispatch({
        type: "SET_PERFORMER_NAME",
        performerName,
      }),
  };
}

export default connect(null, mapDispatchToProps)(Main);
