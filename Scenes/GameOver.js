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
  const screenWrapTopPosition = {
    marginTop: width * 0.025 > 16 ? width * 0.025 : 16,
  };

  const [sound, setSound] = useState();
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
      <View style={styles.layout}>
        <Image
          source={MilkyWay}
          style={[styles.milkywaybg, { marginBottom: (height - 40) * -1 }]}
        ></Image>
        <Image
          source={DriveInForeground}
          style={styles.driveinforeground}
        ></Image>
        <View style={[styles.screenWrap, screenWrapTopPosition]}>
          <Text style={styles.gameOverStyle}>Game Over</Text>
          <Pressable style={styles.buttonStyle} onPress={backToStartHandler}>
            <ImageBackground
              source={require("../Images/ticket.png")}
              style={styles.ticket}
            >
              <Text style={styles.backToStartButtonText}>Start Over</Text>
            </ImageBackground>
          </Pressable>
        </View>
      </View>
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
    backgroundColor: "black",
    height: "100%",
  },
  milkywaybg: {
    width: "100%",
    aspectRatio: 468 / 272,
  },
  driveinforeground: {
    position: "absolute",
    top: 20,
    resizeMode: "contain",
    width: Platform.OS !== "web" ? 650 : "100%",
    minWidth: 650,
    height: "auto",
    alignSelf: "center",
    aspectRatio: 468 / 485,
  },
  screenWrap: {
    position: "absolute",
    top: 20,
    backgroundColor: "#292840",
    padding: 20,
    width: "49.1%",
    minWidth: 320,
    aspectRatio: 714 / 391,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    zIndex: 1000,
    marginLeft: -2,
  },
  gameOverStyle: {
    fontSize: 28,
    marginBottom: Platform.OS !== "web" ? 20 : 70,
    textAlign: "center",
    fontFamily: "Limelight_400Regular",
    color: "#F2D379",
  },
  backToStartButtonText: {
    textAlign: "center",
    fontSize: 14,
    color: "#401323",
    marginBottom: 5,
  },
  ticket: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonStyle: {
    width: "35%",
    minWidth: 120,
    minHeight: 62,
    aspectRatio: 7.8 / 4,
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(GameOver);
