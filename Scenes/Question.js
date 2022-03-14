import { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  ImageBackground,
  useWindowDimensions,
  SafeAreaView,
} from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts, Limelight_400Regular } from "@expo-google-fonts/limelight";
import { connect } from "react-redux";
import FetchApi from "../Utils/FetchApi";
import GenerateQuestion from "../Components/GenerateQuestion";
import Timer from "../Components/Timer";
import TrueFalse from "../Components/TrueFalse";
import MultipleChoice from "../Components/MultipleChoice";
import Drive from "../Images/drive-in-movie.jpg";
import Badge from "../Components/Badge";

function Question({ selectedMovie, movies, setMovies, movieId }) {
  const [timerCount, setTimerCount] = useState(10);
  const { width, height } = useWindowDimensions();
  const widthBreakpoint = 700;

  useEffect(() => {
    FetchApi().then((res) => setMovies(res));
  }, []);

  let [fontsLoaded] = useFonts({
    Limelight_400Regular,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <ImageBackground
        resizeMode={"cover"}
        source={Drive}
        style={[
          styles.container,
          width > widthBreakpoint ? styles.image : styles.imageMobile,
        ]}
      >
        <View
          style={[width > widthBreakpoint ? styles.title : styles.titleMobile]}
        >
          <View style={styles.timerBox}>
            <Timer
              timerCount={timerCount}
              setTimerCount={setTimerCount}
            />
            <Text
              style={[
                width > 800 ? styles.heading : styles.headingMobile,
                {
                  color: "#F2D379",
                  fontFamily: "Limelight_400Regular",
                  fontSize: 30,
                },
              ]}
            >
              Question
            </Text>
            <View></View>
          </View>
          <GenerateQuestion movies={movies} />
          <Text style={styles.q}>{movies && selectedMovie?.question}</Text>
          <View style={styles.badge}>
            <Badge />
          </View>
        </View>

        <View
          style={[
            width > widthBreakpoint ? styles.titleWrap : styles.titleWrapMobile,
          ]}
        >
          {Array.isArray(selectedMovie?.answer) ? (
            <MultipleChoice />
          ) : (
            <TrueFalse />
          )}
        </View>
      </ImageBackground>
    );
  }
}
function mapStateToProps(state) {
  return {
    winningStreak: state.winningStreak,
    movies: state.movies,
    selectedMovie: state.selectedMovie,
    scene: state.scene,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    increaseWinningStreak: () =>
      dispatch({
        type: "INCREASE_WINNING_STREAK",
      }),
    resetWinningStreak: () =>
      dispatch({
        type: "RESET_WINNING_STREAK",
      }),
    setMovies: (movies) =>
      dispatch({
        type: "SET_MOVIES",
        movies,
      }),
    setScene: (name) =>
      dispatch({
        type: "SET_SCENE",
        name,
      }),
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%",
    flexDirection: "column",    
  },
  image: {
    paddingBottom: 75,
  },
  imageMobile: {
    paddingBottom: 100,
    paddingTop: 25,
  },
  titleWrap: {
    flexDirection: "row",
    padding: 20,
    backgroundColor: "red"
  },
  titleWrapMobile: {
    flexDirection: "row",
    paddingTop: 20,
    paddingBottom: 3,    
  },
  title: {
    shadowColor: "#1a1a1a",
    shadowRadius: 10,
    textAlign: "center",
    color: "#F2D379",
    backgroundColor: "#292840",
    fontWeight: "bold",
    fontSize: 20,
    height: 350,
    width: 615,   
  },
  titleMobile: {
    shadowColor: "#1a1a1a",
    shadowRadius: 10,
    textAlign: "center",
    color: "#F2D379",
    backgroundColor: "#292840",
    fontWeight: "bold",
    fontSize: 20,
    height: 390,
    width: 300,
    marginHorizontal: 30,    
  },
  heading: {
    flexGrow: 1,
    color: "#F2D379",
    paddingTop: 10,
    paddingBottom: 4,
    alignSelf: "center",
    marginTop: 10,
    textAlign: "center",    
  },
  headingMobile: {
    flexGrow: 1,
    color: "#F2D379",
    paddingTop: 10,
    paddingBottom: 4,
    paddingRight: 50,
    alignSelf: "center",
    marginTop: 10,
    textAlign: "center",    
  },
  q: {
    color: "#F2D379",
    marginHorizontal: 20,
    alignSelf: "center",
  },
  badge: {
    position: "absolute",
    bottom: 0,
    right: 0,
  },
  timerBox: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Question);
