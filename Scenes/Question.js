import { useEffect } from "react";
import { StyleSheet, View, ScrollView, Text } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts, Limelight_400Regular } from "@expo-google-fonts/limelight";
import { connect } from "react-redux";
import FetchApi from "../Utils/FetchApi";
import GenerateQuestion from "../Components/GenerateQuestion";
import Timer from "../Components/Indicators/Timer";
import TrueFalse from "../Components/TrueFalse";
import MultipleChoice from "../Components/MultipleChoice";
import Badge from "../Components/Indicators/Badge";
import Lives from "../Components/Indicators/Lives";
import Theater from "../Layout/Theater";

function Question({ selectedMovie, movies, setMovies, gamePlayMode }) {
  useEffect(() => {
    FetchApi().then((res) => {
      setMovies(res);
    });
  }, []);

  let [fontsLoaded] = useFonts({
    Limelight_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else if (Object.keys(selectedMovie).length === 0) {
    return <GenerateQuestion movies={movies} />;
  } else {
    return (
      <Theater
        indicators={
          <>
            {gamePlayMode === "easySinglePlayer" && (
              <View>
                <Lives />
              </View>
            )}
            {gamePlayMode !== "easySinglePlayer" && <Timer />}
            <View>
              <Badge />
            </View>
          </>
        }
        content={
          <View style={{ width: "100%" }}>
            <View style={styles.questionHeader}>
              <Text style={styles.heading}>Question</Text>
            </View>
            <Text style={styles.questionText}>
              {movies && selectedMovie?.question}
            </Text>
          </View>
        }
        buttons={
          Array.isArray(selectedMovie?.answer) ? (
            <MultipleChoice />
          ) : (
            <TrueFalse />
          )
        }
      />
    );
  }
}
function mapStateToProps(state) {
  return {
    winningStreak: state.winningStreak,
    movies: state.movies,
    selectedMovie: state.selectedMovie,
    scene: state.scene,
    gamePlayMode: state.gamePlayMode || "easySinglePlayer",
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setMovies: (movies) =>
      dispatch({
        type: "SET_MOVIES",
        movies,
      }),
  };
}

const styles = StyleSheet.create({
  heading: {
    color: "#292840",
    fontFamily: "Limelight_400Regular",
    fontSize: 30,
  },
  questionText: {
    color: "#292840",
    alignSelf: "center",
  },
  badge: {
    position: "absolute",
    top: 15,
    right: 50,
  },
  lives: {
    position: "absolute",
    top: -5,
    left: 50,
  },
  questionHeader: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    paddingBottom: 10,
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Question);
