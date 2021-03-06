import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ImageBackground,
  Pressable,
  useWindowDimensions,
  Platform,
} from "react-native";
import React from "react";
import { connect } from "react-redux";
import { useFonts, Limelight_400Regular } from "@expo-google-fonts/limelight";
import AppLoading from "expo-app-loading";
import CorrectAnswerDemo from "../Components/HowToPlay/CorrectAnswerDemo";
import MainAnimation from "../Components/HowToPlay/MainAnimation";
import GameOverHelp from "../Components/HowToPlay/GameOverHelp.js";
import WrongAnswerHelp from "../Components/HowToPlay/WrongAnswerHelp";
import QuestionInstructions from "../Components/HowToPlay/QuestionInstructions";
import LoseGameInstruction from "../Components/HowToPlay/LoseGameInstruction";
import EasyModeLivesHelp from "../Components/HowToPlay/EasyModeLivesHelp";
import GameInstructionSetting from "../Components/HowToPlay/GameInstructionSetting";
const HowToPlay = ({ setScene }) => {
  let [fontsLoaded] = useFonts({ Limelight_400Regular });
  const { width } = useWindowDimensions();

  let flexDirection =
    width > 800
      ? { flexDirection: "row", justifyContent: "space-between" }
      : "";
  let columnGap = width > 800 ? { marginRight: 10 } : null;
  let animationContainer = {
    width: Platform.OS === "web" ? (width > 800 ? 500 : "100%") : 230,
    alignSelf: "center",
  };
  // There is a space for bullets here, so please leave the gap
  const bullet = `
	
1.  Select the gear icon to open the Settings.
2.  Change “Select a Game Play Mode” to “Easy Single Player”.
3.  Select the “X” icon to close the Settings.`;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.mainContainer}>
        <ScrollView>
          <View style={styles.contentContainer}>
            <Text style={styles.headings}>How To Play</Text>
            <View style={styles.instructionWrapper}>
              <Text style={styles.instructionText}>
                Thanks for playing "Trivia & Chill Game". This is a trivia game
                to test your movie knowledge. Random questions about popular
                movies could be shown as true/false or multiple choice. Answer
                correctly to increase your winning streak! If you get a wrong
                answer, then the game is over.
              </Text>
              <Text style={styles.instructionText}>
                You can choose between the following game modes to change the
                difficulty of the game.
              </Text>
            </View>
          </View>
          <View style={styles.contentContainer}>
            <Text style={styles.headings}>Setting </Text>
            <View style={[styles.instructionWrapper, flexDirection]}>
              <Text style={[styles.instructionTextBullet, columnGap]}>
                You can choose between the following game modes to change the
                difficulty of the game.
                <Text style={styles.instructionTextBullet}>{bullet}</Text>
              </Text>
              <View style={[styles.settingAnimation, animationContainer]}>
                <GameInstructionSetting />
              </View>
            </View>
          </View>
          <View style={styles.contentContainer}>
            <Text style={styles.headings}>Single Player Mode (Default)</Text>

            <View style={[styles.instructionWrapper, flexDirection]}>
              <Text style={[styles.instructionText, columnGap]}>
                1. Select “Start" to begin the game
              </Text>

              <View style={[styles.mainAnimation, animationContainer]}>
                <MainAnimation />
              </View>
            </View>

            <View style={[styles.instructionWrapper, flexDirection]}>
              <Text style={[styles.instructionText, columnGap]}>
                2. Read and answer the question before the timer runs out!
              </Text>
              <View style={animationContainer}>
                <QuestionInstructions />
              </View>
            </View>

            <View style={[styles.instructionWrapper, flexDirection]}>
              <Text style={[styles.instructionText, columnGap]}>
                3. Guess correctly to increase your winning streak, and enjoy
                the movie trailer. Select the “Next Question” button to continue
                the game.
              </Text>
              <View style={animationContainer}>
                <CorrectAnswerDemo />
              </View>
            </View>

            <View style={[styles.instructionWrapper, flexDirection]}>
              <Text style={[styles.instructionText, columnGap]}>
                4. Making a wrong answer results in sudden death. Select "Back
                to Start" to restart the game.
              </Text>
              <View style={animationContainer}>
                <GameOverHelp />
              </View>
            </View>
          </View>

          <View style={styles.contentContainer}>
            <Text style={styles.headings}>Easy Single Player mode</Text>

            <View style={styles.instructionWrapper}>
              <Text style={styles.instructionText}>
                Game play is the same as Single Player Mode with these changes.
              </Text>
            </View>

            <View style={styles.instructionWrapper}>
              <Text style={styles.instructionText}>
                1. See "Settings" instructions
              </Text>
            </View>

            <View style={[styles.instructionWrapper, flexDirection]}>
              <Text style={[styles.instructionText, columnGap]}>
                2. Start the game with 3 lives. There is no timer, so you can
                take your time to choose the correct answer.
              </Text>
              <View style={animationContainer}>
                <EasyModeLivesHelp />
              </View>
            </View>

            <View style={[styles.instructionWrapper, flexDirection]}>
              <Text style={[styles.instructionText, columnGap]}>
                3. If you choose an incorrect answer, then you lose 1 life and
                your winning streak goes back to zero.
              </Text>
              <View style={animationContainer}>
                <WrongAnswerHelp />
              </View>
            </View>

            <View style={[styles.instructionWrapper, flexDirection]}>
              <Text style={[styles.instructionText, columnGap]}>
                4. If you lose all your lives, the game is over.
              </Text>
              <View style={animationContainer}>
                <LoseGameInstruction />
              </View>
            </View>
          </View>

          <Pressable onPress={() => setScene("Main")}>
            <ImageBackground
              source={require("../Images/ticket.png")}
              style={styles.ticketImage}
            >
              <Text>Home</Text>
            </ImageBackground>
          </Pressable>
        </ScrollView>
      </View>
    );
  }
};

function mapDispatchToProps(dispatch) {
  return {
    setScene: (name) =>
      dispatch({
        type: "SET_SCENE",
        name: name,
      }),
  };
}

const styles = StyleSheet.create({
  contentContainer: {
    backgroundColor: "#A0947C",
    marginTop: 10,
    width: "90%",
    alignSelf: "center",
    padding: 5,
    borderRadius: 8,
  },
  headings: {
    fontFamily: "Limelight_400Regular",
    borderRadius: 8,
    padding: 20,
    textAlign: "center",
    color: "#F2D379",
    fontSize: 30,
    marginBottom: 15,
    marginTop: 15,
    backgroundColor: "#292840",
  },
  instructionWrapper: {
    borderRadius: 8,
    padding: 20,
    backgroundColor: "#292840",
    marginBottom: 15,
    color: "#F2D379",
  },
  instructionText: {
    fontSize: 20,
    marginBottom: 15,
    color: "#F2D379",
    width: "100%",
  },
  instructionTextBullet: {
    fontSize: 20,
    marginBottom: 15,
    marginLeft: 15,
    color: "#F2D379",
    width: "100%",
  },
  mainContainer: {
    backgroundColor: "#401323",
    height: "100%",
  },
  ticketImage: {
    marginTop: 10,
    flex: 1,
    marginBottom: 10,
    width: 200,
    aspectRatio: 18 / 9,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  mainAnimation: {
    alignSelf: "center",
    aspectRatio: Platform.OS === "web" ? 980 / 500 : 230 / 500,
  },
  settingAnimation: {
    alignSelf: "center",
    aspectRatio: Platform.OS === "web" ? 1000 / 600 : 1 / 3,
  },
});

export default connect(null, mapDispatchToProps)(HowToPlay);
