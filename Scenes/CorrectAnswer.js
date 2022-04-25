import { Text, Pressable, StyleSheet, ImageBackground } from "react-native";
import { connect } from "react-redux";
import Trailer from "../Components/Trailer";
import AppLoading from "expo-app-loading";
import { useFonts, Limelight_400Regular } from "@expo-google-fonts/limelight";
import ticket from "../Images/ticket.png";
import Badge from "../Components/Badge";
import DriveInMovie from "../Layout/DriveInMovie";
import Lives from "../Components/Lives";

const CorrectAnswer = ({ selectedMovie, setScene, resetSelectedMovie, gamePlayMode }) => {
  const handleNextQuestion = () => {
    setScene("Question");
    resetSelectedMovie();
  };

  let [fontsLoaded] = useFonts({
    Limelight_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <DriveInMovie
        screen={<Trailer movieId={selectedMovie?.movieId} />}
        indicators={
          <>
          { gamePlayMode === 'easySinglePlayer' &&
            <Lives/>
          }
            <Text style={styles.h2}>Correct!</Text>
            <Badge />
          </>
        }
        answers={
          <Pressable style={[styles.button]} onPress={handleNextQuestion}>
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
    selectedMovie: state.selectedMovie,
    gamePlayMode: state.gamePlayMode
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
    marginVertical: 10,
    fontFamily: "Limelight_400Regular",
    color: "#F2D379",
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
});

export default connect(mapStateToProps, mapDispatchToProps)(CorrectAnswer);
