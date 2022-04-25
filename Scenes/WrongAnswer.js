import {
  View,
  Text,
  Pressable,
  StyleSheet,
  ImageBackground,
} from "react-native";
import { connect } from "react-redux";
import Lives from "../Components/Lives";
import AppLoading from "expo-app-loading";
import { useFonts, Limelight_400Regular } from "@expo-google-fonts/limelight";
import ticket from "../Images/ticket.png";
import Badge from "../Components/Badge";
import DriveInMovie from "../Layout/DriveInMovie";
import Theater from "../Layout/Theater";

const WrongAnswer = ({ setScene, resetSelectedMovie, lives, resetWinningStreak }) => {
  const handleNextQuestion = () => {
    resetWinningStreak();
    setScene("Question");
    resetSelectedMovie();
  };

  const ohno = `Oh no! You lost a life.
You have ${lives} ${lives > 1 ? "lives" : "life"} left.
Try again!`;

  let [fontsLoaded] = useFonts({
    Limelight_400Regular,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <Theater
        content={
          <>
            <Text style={styles.h2}>Incorrect Answer!</Text>
            <Text style={styles.livesText}>{ohno}</Text>
          </>
        }
        indicators={
          <>
            <View>
              <Lives />
            </View>
            <View>
              <Badge />
            </View>
          </>
        }
        buttons={
          <Pressable
            style={[styles.button]}
            onPress={handleNextQuestion}
            accessibilityRole="button"
            accessibilityHint="This button takes you to the next question"
          >
            <ImageBackground style={styles.ticketButton} source={ticket}>
              <Text style={styles.ticketText}>Next Question!</Text>
            </ImageBackground>
          </Pressable>
        }
      />
    );
  }
};

function mapStateToProps(state) {
  return {
    lives: state.lives,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setScene: (name) =>
      dispatch({
        type: "SET_SCENE",
        name,
      }),
    resetSelectedMovie: () =>
      dispatch({
        type: "RESET_SELECTED_MOVIE",
      }),
    resetWinningStreak: () =>
      dispatch({
        type: "RESET_WINNING_STREAK",
      }),
  };
}

const styles = StyleSheet.create({
  button: {
    flexShrink: 1,
    alignSelf: "center",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    backgroundColor: "transparent",
    marginTop: 50,
  },
  h2: {
    fontSize: 28,
    fontFamily: "Limelight_400Regular",
    color: "#292840",
    alignSelf: "center",
  },
  ticketButton: {
    maxWidth: "100%",
    maxHeight: "100%",
    width: 224,
    height: 116,
    justifyContent: "center",
  },
  ticketText: {
    fontFamily: "Limelight_400Regular",
    position: "absolute",
    alignSelf: "center",
  },
  livesText: {
    marginTop: 10,
    color: "#292840",
    fontSize: 18,
    lineHeight: 28,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(WrongAnswer);
