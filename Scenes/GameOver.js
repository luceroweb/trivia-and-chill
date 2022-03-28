import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  Image,
  ImageBackground,
  useWindowDimensions,
  Platform,
} from "react-native";
import { connect } from "react-redux";
import MilkyWay from "../Images/milkyway.jpg";
import DriveInForeground from "../Images/drive-in-movie-foreground.png";
import AppLoading from "expo-app-loading";
import { useFonts, Limelight_400Regular } from "@expo-google-fonts/limelight";
import { Audio } from "expo-av";
import lose from "../Sounds/lose.wav";

function GameOver({ setScene, resetWinningStreak }) {
  const { width, height } = useWindowDimensions();

  const [sound, setSound] = useState();

  async function playSound() {
    const { sound } = await Audio.Sound.createAsync(lose);
    setSound(sound);
  }

  async function playSound() {
    const { sound } = await Audio.Sound.createAsync(lose);
    setSound(sound);

    await sound.playAsync();
  }

  const backToStartHandler = () => {
    resetWinningStreak();
    setScene("Main");
  };

  let [fontsLoaded] = useFonts({
    Limelight_400Regular,
  });

  let MilkyWayBG;
  let gameOverWrapStyle;
  let gameOverStyle;
  let buttonStyle;

  // if (width / height >= 1.8) {
  //   MilkyWayBG = MilkyWay;
  //   gameOverWrapStyle = styles.gameOverWrapWide;
  //   gameOverStyle = styles.gameOver;
  //   buttonStyle = styles.button;
  // } else if (width > 860) {
  //   MilkyWayBG = MilkyWay;
  //   gameOverWrapStyle = styles.gameOverWrap;
  //   gameOverStyle = styles.gameOver;
  //   buttonStyle = styles.button;
  // } else if (width > 650) {
  //   MilkyWayBG = MilkyWay;
  //   gameOverWrapStyle = styles.gameOverWrapMobile;
  //   gameOverStyle = styles.gameOver;
  //   buttonStyle = styles.buttonMobile;
  // } else if (width > 450) {
  //   MilkyWayBG = MilkyWay;
  //   gameOverWrapStyle = styles.gameOverWrapMini;
  //   gameOverStyle = styles.gameOverMobile;
  //   buttonStyle = styles.buttonMini;
  // } else {
  MilkyWayBG = MilkyWay;
  gameOverWrapStyle = styles.gameOverWrap;
  gameOverStyle = styles.gameOverMini;
  buttonStyle = styles.buttonSuperMini;
  // }
  useEffect(() => {
    playSound();
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, []);

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <>
        <ImageBackground
          source={MilkyWayBG}
          style={[styles.milkywaybg, { marginBottom: (height - 40) * -1 }]}
        >
          <Image
            source={DriveInForeground}
            style={[
              styles.driveinforeground,
              {
                top:
                  Platform.OS === "ios" && height === "1334px"
                    ? 40
                    : Platform.OS === "ios"
                    ? 48
                    : 30,
              },
            ]}
          ></Image>
          <View
            style={[
              styles.gameOverWrap,
              {
                top:
                  Platform.OS === "ios" && height === "1334px"
                    ? 40
                    : Platform.OS === "ios"
                    ? 48
                    : 30,
              },
              { marginTop: width * 0.023 > 15 ? width * 0.023 : 15 },
            ]}
          >
            <Text style={gameOverStyle}>Game Over</Text>
            <Pressable style={buttonStyle} onPress={backToStartHandler}>
              <ImageBackground
                source={require("../Images/ticket.png")}
                style={[
                  styles.ticket,
                  {
                    alignItems: "center",
                    justifyContent: "center",
                  },
                ]}
              >
                <Text style={styles.backToStartButtonText}>Back to Start</Text>
              </ImageBackground>
            </Pressable>
          </View>
        </ImageBackground>
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    winningStreak: state.winningStreak,
    scene: state.scene,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    resetWinningStreak: () =>
      dispatch({
        type: "RESET_WINNING_STREAK",
      }),
    setScene: (name) =>
      dispatch({
        type: "SET_SCENE",
        name,
      }),
  };
}

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    backgroundColor: "red",
  },
  milkywaybg: {
    width: "100%",
    aspectRatio: 468 / 272,
  },
  driveinforeground: {
    position: "absolute",
    width: "100%",
    minWidth: 650,
    alignSelf: "center",
    aspectRatio: 468 / 485,
  },
  heading: {
    fontSize: 40,
    marginBottom: 70,
    textAlign: "center",
  },
  gameOverWrapWide: {
    backgroundColor: "#292840",
    padding: 20,
    width: "50%",
    aspectRatio: 16 / 9,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
  },
  gameOverWrap: {
    backgroundColor: "#292840",
    padding: 20,
    width: "50%",
    minWidth: 320,
    aspectRatio: 16 / 9,
    marginLeft: -4,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    zIndex: 1000,
  },
  gameOverWrapMobile: {
    backgroundColor: "#292840",
    padding: 20,
    width: "70%",
    aspectRatio: 16 / 9,
    justifyContent: "center",
    alignItems: "center",
  },
  gameOverWrapMini: {
    backgroundColor: "#292840",
    padding: 20,
    width: "90%",
    aspectRatio: 16 / 9,
    justifyContent: "center",
    alignItems: "center",
  },
  gameOverWrapSuperMini: {
    backgroundColor: "#292840",
    padding: 10,
    width: "90%",
    aspectRatio: 16 / 9,
    justifyContent: "center",
    alignItems: "center",
  },
  gameOver: {
    fontSize: 60,
    textAlign: "center",
    fontFamily: "Limelight_400Regular",
    color: "#F2D379",
  },
  gameOverMobile: {
    fontSize: 40,
    marginBottom: 70,
    textAlign: "center",
    fontFamily: "Limelight_400Regular",
    color: "#F2D379",
  },

  gameOverMini: {
    fontSize: 28,
    marginBottom: Platform.OS === "android" ? 20 : 70,
    textAlign: "center",
    fontFamily: "Limelight_400Regular",
    color: "#F2D379",
  },
  backToStartButton: {
    flex: 1,
    padding: 10,
    borderRadius: 10,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  backToStartButtonText: {
    textAlign: "center",
    fontSize: 14,
    color: "#401323",
    marginBottom: 5,
  },
  ticket: {
    flex: 1,
  },
  button: {
    width: "30%",
    aspectRatio: 7.8 / 4,
  },
  buttonMobile: {
    width: "40%",
    aspectRatio: 7.8 / 4,
  },

  buttonMini: {
    width: "30%",
    aspectRatio: 7.8 / 4,
  },
  buttonSuperMini: {
    width: "35%",
    aspectRatio: 7.8 / 4,
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(GameOver);
