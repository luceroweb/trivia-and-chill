import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  ImageBackground,
  useWindowDimensions,
  Platform,
} from "react-native";
import { connect } from "react-redux";
import BGImage from "../Images/drive-in-movie.jpg";
import AppLoading from "expo-app-loading";
import { useFonts, Limelight_400Regular } from "@expo-google-fonts/limelight";
import { Audio } from "expo-av";
import lose from "../Sounds/lose.wav";

function GameOver({ setScene, resetWinningStreak, resetSelectedMovie }) {
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
    resetSelectedMovie();
  };

  let [fontsLoaded] = useFonts({
    Limelight_400Regular,
  });

  let myBackgroundImage;
  let gameOverWrapStyle;
  let gameOverStyle;
  let buttonStyle;

  if (width / height >= 1.8) {
    myBackgroundImage = BGImage;
    gameOverWrapStyle = styles.gameOverWrapWide;
    gameOverStyle = styles.gameOver;
    buttonStyle = styles.button;
  } else if (width > 860) {
    myBackgroundImage = BGImage;
    gameOverWrapStyle = styles.gameOverWrap;
    gameOverStyle = styles.gameOver;
    buttonStyle = styles.button;
  } else if (width > 650) {
    myBackgroundImage = BGImage;
    gameOverWrapStyle = styles.gameOverWrapMobile;
    gameOverStyle = styles.gameOver;
    buttonStyle = styles.buttonMobile;
  } else if (width > 450) {
    myBackgroundImage = BGImage;
    gameOverWrapStyle = styles.gameOverWrapMini;
    gameOverStyle = styles.gameOverMobile;
    buttonStyle = styles.buttonMini;
  } else {
    myBackgroundImage = BGImage;
    gameOverWrapStyle = styles.gameOverWrapSuperMini;
    gameOverStyle = styles.gameOverMini;
    buttonStyle = styles.buttonSuperMini;
  }
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
      <ImageBackground source={myBackgroundImage} style={styles.image}>
        <View
          style={[
            gameOverWrapStyle,
            { alignItems: "center", paddingVertical: 20 },
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
    );
  }
}

function mapStateToProps(state) {
  return {
    winningStreak: state.winningStreak,
    scene: state.scene,
    selectedMovie: state.selectedMovie,
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
    resetSelectedMovie: (selectedMovie) =>
      dispatch({
        type: "RESET_SELECTED_MOVIE",
        selectedMovie,
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
  image: {
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  imageMobile: {
    flex: 1,
    width: "120%",
    height: "120%",
    padding: 30,
    alignItems: "center",
    justifyContent: "center",
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
    top: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  gameOverWrap: {
    backgroundColor: "#292840",
    padding: 20,
    width: "50%",
    aspectRatio: 16 / 9,
    marginTop: "-25%",
    alignItems: "center",
    justifyContent: "center",
  },
  gameOverWrapMobile: {
    backgroundColor: "#292840",
    padding: 20,
    width: "70%",
    aspectRatio: 16 / 9,
    marginTop: "-25%",
    justifyContent: "center",
    alignItems: "center",
  },
  gameOverWrapMini: {
    backgroundColor: "#292840",
    padding: 20,
    width: "90%",
    aspectRatio: 16 / 9,
    marginTop: "-50%",
    justifyContent: "center",
    alignItems: "center",
  },
  gameOverWrapSuperMini: {
    backgroundColor: "#292840",
    padding: 10,
    width: "90%",
    aspectRatio: 16 / 9,
    marginTop: "-45%",
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
