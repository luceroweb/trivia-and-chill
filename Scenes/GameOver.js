import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  ImageBackground,
  useWindowDimensions,
} from "react-native";
import { connect } from "react-redux";
import BGImage from "../Images/drive-in-movie.jpg";
import BGImageMobile from "../Images/drive-in-movie-mobile.jpg";
import { Audio } from "expo-av";
import lose from "../Sounds/lose.wav";
import AppLoading from "expo-app-loading";
import { useFonts, Limelight_400Regular } from "@expo-google-fonts/limelight";

function GameOver({ setScene, resetWinningStreak }) {
  const [sound, setSound] = useState();
  const { width } = useWindowDimensions();

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

  let myBackgroundImage;
  let gameOverWrapStyle;
  let gameOverStyle;
  let buttonStyle;

  if (width > 860) {
    myBackgroundImage = BGImage;
    gameOverWrapStyle = styles.gameOverWrap;
    gameOverStyle = styles.gameOver;
    buttonStyle = styles.button;
  } else if (width > 650) {
    myBackgroundImage = BGImage;
    gameOverWrapStyle = styles.gameOverWrapMobile;
    gameOverStyle = styles.gameOver;
    buttonStyle = styles.buttonMobile;
  } else if (width > 430) {
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
      <ImageBackground
        source={myBackgroundImage}
        style={styles.image}
        resizeMode="cover"
      >
        <View style={gameOverWrapStyle}>
          <Text style={gameOverStyle}>Game Over</Text>
          <Pressable style={buttonStyle} onPress={backToStartHandler}>
            <ImageBackground
              source={require("../Images/ticket.png")}
              style={styles.ticket}
            >
              <View style={styles.backToStartButton}>
                <Text style={styles.backToStartButtonText}>Back to Start</Text>
              </View>
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
  gameOverWrap: {
    backgroundColor: "#292840",
    width: "60%",
    aspectRatio: 16 / 9,
    marginTop: "-18%",
    justifyContent: "center",
    alignItems: "center",
  },
  gameOverWrapMobile: {
    backgroundColor: "#292840",
    padding: 20,
    width: "70%",
    aspectRatio: 16 / 9,
    marginTop: "-16%",
    justifyContent: "center",
    alignItems: "center",
  },
  gameOverWrapMini: {
    backgroundColor: "#292840",
    padding: 20,
    width: "84%",
    aspectRatio: 16 / 9,
    marginTop: "-20%",
    justifyContent: "center",
    alignItems: "center",
  },
  gameOverWrapSuperMini: {
    backgroundColor: "#292840",
    padding: 10,
    width: "94%",
    aspectRatio: 16 / 9,
    marginTop: "0%",
    marginBottom: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  gameOver: {
    fontSize: 70,
    marginBottom: 70,
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
    fontSize: 34,
    marginBottom: 70,
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
    fontSize: 12,
    color: "#401323",
  },
  ticket: {
    flex: 1,
    marginTop: 30,
  },
  button: {
    width: "22%",
    aspectRatio: 7.2 / 5,
  },
  buttonMobile: {
    width: "30%",
    aspectRatio: 7.2 / 5,
  },
  buttonMini: {
    width: "30%",
    aspectRatio: 7.2 / 5,
  },
  buttonSuperMini: {
    width: "30%",
    aspectRatio: 7.2 / 5,
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(GameOver);
