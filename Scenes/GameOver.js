import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  ImageBackground,
  Platform,
  Share,
} from "react-native";
import { connect } from "react-redux";
import AppLoading from "expo-app-loading";
import { useFonts, Limelight_400Regular } from "@expo-google-fonts/limelight";
import { Audio } from "expo-av";
import lose from "../Sounds/lose.wav";
import Theater from "../Layout/Theater";

function GameOver({
  setScene,
  winningStreak,
  resetWinningStreak,
  resetSelectedMovie,
}) {
  const shareMessage = `I got a streak of 🎞️${winningStreak} in Trivia & Chill!
Test your movie knowledge here: https://luceroweb.github.io/trivia-and-chill/`;

  const [sound, setSound] = useState();
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

  const shareScoreMobile = async () => {
    try {
      const result = await Share.share({
        message: shareMessage,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  const shareScoreWeb = async () => {
    try {
      await navigator.clipboard.writeText(shareMessage);
      alert("Message copied to clipboard!");
    } catch (error) {
      alert(error.message);
    }
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
      <Theater
        content={
          <View style={{ width: "100%" }}>
            <View style={styles.questionHeader}>
              <Text style={styles.gameOverStyle}>Game Over</Text>
            </View>
          </View>
        }
        buttons={
          <View style={styles.buttonRow}>
            {winningStreak > 0 && Platform.OS !== "web" && (
              <Pressable style={styles.buttonStyle} onPress={shareScoreMobile}>
                <ImageBackground
                  source={require("../Images/ticket.png")}
                  style={styles.ticket}
                >
                  <Text style={styles.backToStartButtonText}>Share Score</Text>
                </ImageBackground>
              </Pressable>
            )}
            {winningStreak > 0 && Platform.OS === "web" && (
              <Pressable style={styles.buttonStyle} onPress={shareScoreWeb}>
                <ImageBackground
                  source={require("../Images/ticket.png")}
                  style={styles.ticket}
                >
                  <Text style={styles.backToStartButtonText}>Share Score</Text>
                </ImageBackground>
              </Pressable>
            )}
            <Pressable style={styles.buttonStyle} onPress={backToStartHandler}>
              <ImageBackground
                source={require("../Images/ticket.png")}
                style={styles.ticket}
              >
                <Text style={styles.backToStartButtonText}>Start Over</Text>
              </ImageBackground>
            </Pressable>
          </View>
        }
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    winningStreak: state.winningStreak,
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
  gameOverStyle: {
    fontSize: 28,
    textAlign: "center",
    fontFamily: "Limelight_400Regular",
    color: "#292840",
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
    marginRight: 5,
  },
  buttonRow: {
    flexDirection: "row",
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(GameOver);
