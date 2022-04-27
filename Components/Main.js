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

  const { width } = useWindowDimensions();
  useEffect(() => {
    FetchApi().then((res) => setMovies(res));
  }, []);

  async function playSound() {
    const { sound } = await Audio.Sound.createAsync(clapper, { volume: 0.1 });
    setSound(sound);

    await sound.playAsync();
  }

  let delay;

  if (Platform.OS === "web") {
    delay = 1900;
  } else {
    delay = 1600;
  }

  useEffect(() => {
    setTimeout(() => {
      playSound();
    }, delay);
    Animated.parallel([
      Animated.timing(boardWithTextFade, {
        toValue: 1,
        duration: 3740,
        useNativeDriver: false,
      }),
      Animated.stagger(1897, [
        Animated.timing(clapperOpenFade, {
          toValue: 0,
          duration: 0,
          delay: 1900,
          useNativeDriver: false,
        }),
        Animated.timing(clapperClosedFade, {
          toValue: 1000,
          duration: 2000,
          useNativeDriver: false,
        }),
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
      <View
        style={[
          styles.container,
          { backgroundColor: width < 600 ? "#100307" : "black" },
        ]}
      >
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <ImageBackground
            style={[
              styles.backgroundPicture,
              {
                height: width > 600 ? 600 : width * 1.5,
              },
            ]}
            source={require("../Images/marqueeBackground.png")}
            alt="movie theatre with marquee sign with cars parked in front"
          >
            {/* Animated View for picture of open clapper with no text */}
            <Animated.View
              style={[
                styles.clapperViews,
                {
                  opacity: clapperOpenFade,
                  width: width > 600 ? "85%" : "100%",
                  maxWidth: width,
                  alignItems: width < 600 ? "center" : "stretch",
                },
              ]}
            >
              <Image
                style={[
                  styles.introImages,
                  {
                    maxWidth: width < 600 && "90%",
                    width: width < 600 ? "90%" : 672,
                  },
                ]}
                source={require("../Images/IntroAnimation/clapper2-open.png")}
                alt="open movie clapper"
                resizeMode="contain"
              />
            </Animated.View>
            {/* Animated View for clapper image with arm closed with no text */}
            <Animated.View
              style={[
                styles.clapperViews,
                {
                  opacity: clapperClosedFade.interpolate({
                    inputRange: [0, 0.0001, 500, 1000],
                    outputRange: [0, 1, 1, 0],
                  }),
                  width: width > 600 ? "85%" : "100%",
                  maxWidth: width,
                  alignItems: width < 600 ? "center" : "stretch",
                },
              ]}
            >
              <Image
                style={[
                  styles.introImages,
                  {
                    maxWidth: width < 600 && "90%",
                    width: width < 600 ? "90%" : 672,
                  },
                ]}
                source={require("../Images/IntroAnimation/clapper2-closed.png")}
                alt="closed movie clapper"
                resizeMode="contain"
              />
            </Animated.View>
            {/* Animated View for clapper board with actual text in foreground */}
            <Animated.View
              style={[
                styles.clapperViews,
                {
                  opacity: boardWithTextFade.interpolate({
                    inputRange: [0, 0.8, 1],
                    outputRange: [1, 1, 0],
                  }),
                  width: width > 600 ? "85%" : "100%",
                  maxWidth: width,
                  alignItems: width < 600 ? "center" : "stretch",
                  zIndex: 2,
                },
              ]}
            >
              <Image
                style={[
                  styles.introImages,
                  {
                    maxWidth: width < 600 && "90%",
                    width: width < 600 ? "90%" : 672,
                  },
                ]}
                source={require("../Images/IntroAnimation/clapper2-no-arm-arial.png")}
                alt="closed movie clapper"
                resizeMode="contain"
              />
            </Animated.View>
          </ImageBackground>

          {/* Animated View for the fading in title and start button */}
          <Animated.View
            style={[
              {
                marginTop: width < 600 ? 64 : 0,
                opacity: textFade,
              },
              styles.titleAndButtonContainer,
            ]}
          >
            <Text
              style={[
                styles.fontText,
                {
                  fontSize: width > 900 ? 110 : (100 * width) / 800,
                },
              ]}
            >
              Trivia &#38; Chill
            </Text>
            {/*following View is a spacer necessary because of complications on android within an Animated.View */}
            <View style={{ height: width > 600 ? 300 : width / 1.6 }}></View>
            <Pressable onPress={() => setScene("Question")}>
              <ImageBackground
                source={require("../Images/ticket.png")}
                style={styles.ticket}
              >
                <Text style={styles.buttonText}>Start</Text>
              </ImageBackground>
            </Pressable>
          </Animated.View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  backgroundPicture: {
    flexDirection: "column",
    aspectRatio: 672 / 500,
    justifyContent: "center",
    shadowColor: "#c9195468",
    shadowOpacity: 0.9,
    shadowRadius: 300,
    marginTop: 30,
    marginBottom: 30,
  },
  clapperViews: {
    position: "absolute",
    alignSelf: "center",
  },
  introImages: {
    aspectRatio: 1280 / 1117,
  },
  fontText: {
    fontFamily: "Limelight_400Regular",
    textAlign: "center",
    color: "#F2D379",
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: "100%",
  },
  titleAndButtonContainer: {
    position: "absolute",
  },
  ticket: {
    marginTop: 10,
    flex: 1,
    marginBottom: 10,
    width: 200,
    aspectRatio: 18 / 9,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
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
