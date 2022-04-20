import { useEffect, useState } from "react";
import { StyleSheet, View, ScrollView, Text } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts, Limelight_400Regular } from "@expo-google-fonts/limelight";
import { connect } from "react-redux";
import FetchApi from "../Utils/FetchApi";
import GenerateQuestion from "../Components/GenerateQuestion";
import Timer from "../Components/Timer";
import TrueFalse from "../Components/TrueFalse";
import MultipleChoice from "../Components/MultipleChoice";
import Badge from "../Components/Badge";
import Lives from "../Components/Lives";
import DriveInMovie from "../Layout/DriveInMovie";

function Question({ selectedMovie, movies, setMovies, gamePlayMode, genre }) {
const [filteredMovies, setFilteredMovies] = useState(null)

  useEffect(() => {
    FetchApi().then((res) => {
      setMovies(res);
    });
  }, []);

  let [fontsLoaded] = useFonts({
    Limelight_400Regular,
  });

  useEffect(()=>{
    if(genre !== null){
      setFilteredMovies( movies.filter((movie)=>{
        return movie.genre_ids.includes(genre.id) 
      }))
    }
  }, [genre])

  if (!fontsLoaded) {
    return <AppLoading />;
  } else if (Object.keys(selectedMovie).length === 0) {
    return <GenerateQuestion movies={filteredMovies !== null ? filteredMovies : movies} />;
  } else {
    return (
      <DriveInMovie
        screen={
          <View style={{ width: "100%" }}>
            <View style={styles.questionHeader}>
              {gamePlayMode !== "easySinglePlayer" && <Timer />}
              <Text style={styles.heading}>Question</Text>
            </View>
            <Text style={styles.questionText}>
              {movies && selectedMovie?.question}
            </Text>
          </View>
        }
        indicators={
          <>
            {gamePlayMode === "easySinglePlayer" && (
              <View style={styles.lives}>
                <Lives />
              </View>
            )}
            <View style={styles.badge}>
              <Badge />
            </View>
          </>
        }
        answers={
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
    genre: state.genre,
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
    color: "#F2D379",
    fontFamily: "Limelight_400Regular",
    fontSize: 30,
  },
  questionText: {
    color: "#F2D379",
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
