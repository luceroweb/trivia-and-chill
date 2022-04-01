import {
  View,
  Text,
  Linking,
  StyleSheet,
  ScrollView,
  ImageBackground,
  Pressable,
} from "react-native";
import React from "react";
import { connect } from "react-redux";
import { useFonts, Limelight_400Regular } from "@expo-google-fonts/limelight";
import AppLoading from "expo-app-loading";
import CorrectAnswerDemo from "../Components/HowToPlay/CorrectAnswerDemo";
import MainAnimation from "../Components/HowToPlay/MainAnimation";

import GameOverHelp from "../Components/GameOverHelp.js";

const HowToPlay = ({ setScene }) => {
  let [fontsLoaded] = useFonts({ Limelight_400Regular });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
			<View style={styles.mainContainer}>
				<ScrollView style={styles.scrollView}>
					<View style={styles.subContainer}>
						<View style={styles.contentContainer}>
							<Text style={styles.headings}>How To Play</Text>
							<Text style={styles.content}>
								Thanks for playing "Guess The Movie Game". This is a trivia game
								to test your movie knowledge. Random questions about popular
								movies could be shown as true/false or multiple choice. Answer
								correctly to increase your winning streak! If you get a wrong
								answer, then the game is over.
							</Text>
							<Text style={styles.content}>
								You can choose between the following game modes to change the
								difficulty of the game.
							</Text>
						</View>

						<View style={styles.contentContainer}>
							<Text style={styles.headings}>Single Player Mode (Default)</Text>

							<View style={styles.mainAnimation}>
								<MainAnimation />
								{/* <Text style={styles.content}>
                  1. Select “Start" to begin the game
                </Text> */}
							</View>

							<View>
								<Text style={styles.content}>
									2. Read and answer the question before the timer runs out!
								</Text>
							</View>

              <CorrectAnswerDemo />

              <View>
                <Text style={styles.content}>
                  4. Making a wrong answer results in sudden death. Select "Back
                  to Start" to restart the game.
                </Text>
                <GameOverHelp />
              </View>
            </View>

						<View style={styles.contentContainer}>
							<Text style={styles.headings}>Easy Single Player mode</Text>
							<Text style={styles.content}>
								Game play is the same as Single Player Mode with these changes
							</Text>

							<View>
								<Text style={styles.content}>
									1. Start the game with 3 lives.
								</Text>
							</View>

							<View>
								<Text style={styles.content}>
									2. There is no timer, so you can take your time to choose the
									correct answer.
								</Text>
							</View>

							<View>
								<Text style={styles.content}>
									3. If you choose an incorrect answer, then you lose 1 life and
									your winning streak goes back to zero.
								</Text>
							</View>

							<View>
								<Text style={styles.content}>
									4. If you lose all your lives, the game is over.
								</Text>
							</View>
						</View>
					</View>
					<ImageBackground
						source={require("../Images/ticket.png")}
						style={styles.ticketImage}
					>
						<Pressable onPress={() => setScene("Main")}>
							<Text>Home</Text>
						</Pressable>
					</ImageBackground>
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
		// borderWidth: 3,
		// borderColor: "#A0947C",
		// marginBottom: 30,
		marginTop: 10,
		maxWidth: "90%",
		alignSelf: "center",
		// width: "80%",
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
	content: {
		borderRadius: 8,
		padding: 20,
		fontSize: 20,
		backgroundColor: "#292840",
		marginBottom: 15,
		color: "#F2D379",
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
		alignItems: "center",
		alignSelf: "center",
		justifyContent: "center",
		width: 200,
		height: 500,
	},
});

export default connect(null, mapDispatchToProps)(HowToPlay);
